import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../api/routes/authorization';
import profileStyles from '../../css/header/profile.module.css';

function Profile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = await fetchUserProfile();
      if (user) {
        setUserData(user);
      }
    };
    fetchProfile();
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  return (
    <div className={profileStyles.profile}>
      <button
        className={profileStyles.profileButton}
        onClick={toggleProfileMenu}
      >
        <img
          src={
            userData
              ? userData.profileImage
              : 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg'
          }
          alt={userData ? 'Your account profile' : 'Log in'}
          className={profileStyles.profileImage}
        />
      </button>
      <div
        className={`${profileStyles.profileMenu} ${
          isProfileOpen ? profileStyles.open : ''
        }`}
      >
        {userData ? (
          <>
            <div className={profileStyles.profileMenuHeader}>
              <div className={profileStyles.profileMenuHeaderImage}>
                <img src={userData.profileImage} alt="Your account profile" />
              </div>
              <div className={profileStyles.profileMenuHeaderName}>
                <div className={profileStyles.profileMenuHeaderNameMain}>
                  <span>{userData.name}</span>
                </div>
                <div className={profileStyles.profileMenuHeaderUsername}>
                  <span>{userData.username}</span>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <a href="#">
                  <i className="ri-profile-line"></i>
                  <span>View profile</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-pencil-line"></i>
                  <span>Create Article</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-logout-box-line"></i>
                  <span>Sign out</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-settings-5-line"></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <a href="/login">
                <i className="ri-login-box-line"></i>
                <span>Log in</span>
              </a>
            </li>
            <li>
              <a href="/register">
                <i className="ri-login-circle-line"></i>
                <span>Register</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Profile;
