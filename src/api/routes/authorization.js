import Cookies from 'js-cookie';

const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');

  if (refreshToken) {
    try {
      const response = await fetch('/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      Cookies.set('authToken', data.accessToken);
      Cookies.set('refreshToken', data.refreshToken);

      return data.accessToken;
    } catch (error) {
      console.error('Error refreshing token:', error);
      Cookies.remove('authToken');
      Cookies.remove('refreshToken');
      return null;
    }
  } else {
    return null;
  }
};

export const fetchUserProfile = async () => {
  let token = Cookies.get('authToken');

  if (!token) {
    return null;
  }

  try {
    let response = await fetch('/user/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        token = await refreshToken();

        if (token) {
          response = await fetch('/user/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
        } else {
          throw new Error('Failed to refresh token');
        }
      } else {
        throw new Error('Failed to fetch user data');
      }
    }

    const data = await response.json();
    return {
      username: data.username,
      name: `${data.first_name} ${data.last_name}`,
      image:
        data.image ||
        'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg',
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchUserProfile;
