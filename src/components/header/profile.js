import React, { useState } from 'react';
import profileStyles from '../../css/header/profile.module.css';

function Profile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg/417px-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg"
          alt="Your account profile"
          className={profileStyles.profileImage}
        />
      </button>
      <div
        className={`${profileStyles.profileMenu} ${
          isProfileOpen ? profileStyles.open : ''
        }`}
      >
        <div className={profileStyles.profileMenuHeader}>
          <div className={profileStyles.profileMenuHeaderImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg/417px-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg"
              alt="Your account profile"
            ></img>
          </div>
          <div className={profileStyles.profileMenuHeaderName}>
            <div className={profileStyles.profileMenuHeaderNameMain}>
              <span>Max Mazur</span>
            </div>
            <div className={profileStyles.profileMenuHeaderUsername}>
              <span>Username</span>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">
              <i class="ri-profile-line"></i>
              <span>View profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-pencil-line"></i>
              <span>Create Article</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-logout-box-line"></i>
              <span>Sign out</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ri-settings-5-line"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
