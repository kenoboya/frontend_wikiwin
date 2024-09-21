export async function fetchSignOut() {
  try {
    const response = await fetch('/sign-out', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to sign out');
    }
  } catch (error) {
    console.error('Error during sign out:', error);
  }
}

export const refreshToken = async () => {
  try {
    const response = await fetch('/refresh', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
};

export const fetchUserProfile = async () => {
  try {
    let response = await fetch('/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      if (response.status === 401) {
        await refreshToken();
        response = await fetch('/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
      } else {
        throw new Error('Failed to fetch user data');
      }
    }

    const data = await response.json();
    if (data.username && data.first_name && data.last_name) {
      return {
        username: data.username,
        name: `${data.first_name} ${data.last_name}`,
        image:
          data.image ||
          'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg',
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchUserProfile;
