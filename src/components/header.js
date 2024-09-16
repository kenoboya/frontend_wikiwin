import React, { useState } from 'react';
import headerStyles from '../css/header/header.module.css';
import profileStyles from '../css/header/profile.module.css';
import favoriteStyles from '../css/header/favorite.module.css';
import logotype from '../assets/logotype/logotype.png';

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
  const [isFavoriteSettingsOpen, setIsFavoriteSettingsOpen] = useState(false);
  const [isFavoriteArticleOpen, setIsFavoriteArticleOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  const toggleFavoriteMenu = () => {
    setIsFavoriteOpen((prevState) => !prevState);
  };

  const toggleFavoriteSettingsMenu = () => {
    setIsFavoriteSettingsOpen((prevState) => !prevState);
  };

  const toggleFavoriteArticleMenu = () => {
    setIsFavoriteArticleOpen((prevState) => !prevState);
  };

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoContainer} id="logotype">
        <img
          src={logotype}
          alt="problem with internet"
          className={headerStyles.logoImage}
        />
      </div>
      <div className={headerStyles.navBar}>
        <nav className={headerStyles.navigation}>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <a>
                <span>Explore</span>
              </a>
            </li>
            <li className={headerStyles.navItem}>
              <a>
                <span>About</span>
              </a>
            </li>
            <li className={headerStyles.navItem}>
              <a href="http://localhost:3000/articles">
                <span>Article</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyles.search}>
        <form
          className={headerStyles.searchForm}
          action="/search"
          method="GET"
          id="search-bar"
        >
          <input
            type="search"
            name="query"
            placeholder="Search article"
            className={headerStyles.searchInput}
            aria-label="search"
          />
          <div className={headerStyles.searchButton} id="search-button">
            <i className={`ri-search-2-line ${headerStyles.searchIcon}`}></i>
          </div>
        </form>
      </div>
      <div className={headerStyles.buttons}>
        <div className={favoriteStyles.favorite} onClick={toggleFavoriteMenu}>
          <button className={favoriteStyles.favoriteButton}>
            <i
              className={`ri-bookmark-fill ${favoriteStyles.favoriteIcon}`}
            ></i>
          </button>
          <div
            className={`${favoriteStyles.favoriteMenu} ${
              isFavoriteOpen ? favoriteStyles.open : ''
            }`}
          >
            <div className={favoriteStyles.favoriteHeader}>
              <h1>Favorite articles</h1>
              <button className={favoriteStyles.favoriteHeaderButton}>
                <i class="ri-settings-5-line"></i>
              </button>
            </div>
            <div className={favoriteStyles.favoriteContent}>
              <ul>
                <li>
                  <div className={favoriteStyles.authorProfile}>
                    <a>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg/417px-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg"
                        alt="author profile"
                      ></img>
                      <span>Author name</span>
                    </a>
                  </div>
                  <div className={favoriteStyles.favoriteArticle}>
                    <a>
                      <div
                        className={favoriteStyles.favoriteArticleDescription}
                      >
                        <h1>Article title</h1>
                        <span>
                          Article description alabamadsaodsa sadas,sadas
                          sdlsad,assets kfsafs
                        </span>
                      </div>
                      <div className={favoriteStyles.favoriteArticlePhoto}>
                        <img
                          src="https://pz.vntu.edu.ua/media/uploads/user/35/prew/m3hf0zlcus5njkwo.jpg"
                          alt="article photo"
                        ></img>
                      </div>
                    </a>
                    <button className={favoriteStyles.favoriteArticleButton}>
                      <i class="ri-align-justify"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
      </div>
    </header>
  );
}

export default Header;
