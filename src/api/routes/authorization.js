import Cookies from 'js-cookie';

export const fetchUserProfile = () => {
  const token = Cookies.get('authToken');

  if (token) {
    return fetch('/user/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then((data) => {
        return {
          username: data.username,
          name: `${data.first_name} ${data.last_name}`,
          profileImage:
            data.profileImage ||
            'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg', // Default profile image
        };
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        return null;
      });
  } else {
    return Promise.resolve(null);
  }
};
