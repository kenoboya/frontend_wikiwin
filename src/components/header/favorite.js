import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../api/routes/authorization';
import favoriteStyles from '../../css/header/favorite.module.css';

function Favorite() {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
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

  const toggleFavoriteMenu = (e) => {
    e.stopPropagation();
    if (userData) {
      // Only open menu if user is authenticated
      setIsFavoriteOpen(!isFavoriteOpen);
    }
  };

  return (
    <div className={favoriteStyles.favorite} onClick={toggleFavoriteMenu}>
      <button className={favoriteStyles.favoriteButton}>
        <i className={`ri-bookmark-fill ${favoriteStyles.favoriteIcon}`}></i>
      </button>
      <div
        className={`${favoriteStyles.favoriteMenu} ${
          isFavoriteOpen ? favoriteStyles.open : ''
        }`}
      >
        {userData ? (
          <>
            <div className={favoriteStyles.favoriteHeader}>
              <h1>Favorite articles</h1>
              <button
                className={favoriteStyles.favoriteHeaderButton}
                onClick={(e) => e.stopPropagation()}
              >
                <i className="ri-settings-5-line"></i>
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
                      />
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
                        />
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className={favoriteStyles.favoriteContent}>
            <p>Please log in to view your favorite articles.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
