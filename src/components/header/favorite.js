import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../api/routes/authorization';
import favoriteStyles from '../../css/header/favorite.module.css';
import fetchFavoriteArticles from '../../api/routes/favorite';
import { useNavigationForArticles } from '../../animation/utils';
import { deleteFavoriteArticles } from '../../api/routes/favorite';

function Favorite() {
  const [state, setState] = useState({
    isFavoriteOpen: false,
    isFavoriteSettingsOpen: false,
    userData: null,
    favoriteArticles: [],
    loading: false,
  });

  const { navigateTo, formatTitleForUrl } = useNavigationForArticles();

  const toggleFavoriteMenu = async (e) => {
    e.stopPropagation();
    setState((prevState) => {
      const newFavoriteOpen = !prevState.isFavoriteOpen;
      if (newFavoriteOpen) {
        fetchArticles();
      }
      return {
        ...prevState,
        isFavoriteOpen: newFavoriteOpen,
      };
    });
  };

  const toggleFavoriteSettings = (e) => {
    e.stopPropagation();
    setState((prevState) => ({
      ...prevState,
      isFavoriteSettingsOpen: !prevState.isFavoriteSettingsOpen,
    }));
  };

  const handleFavoriteClick = async (e, article_id) => {
    e.stopPropagation();
    try {
      await deleteFavoriteArticles(article_id);
      setState((prevState) => ({
        ...prevState,
        favoriteArticles: prevState.favoriteArticles.filter(
          (article) => article.article_id !== article_id
        ),
      }));
    } catch (error) {
      console.error('Failed to delete favorite article:', error);
    }
  };

  const fetchProfile = async () => {
    try {
      const user = await fetchUserProfile();
      setState((prevState) => ({
        ...prevState,
        userData: user || null,
      }));
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setState((prevState) => ({
        ...prevState,
        userData: null,
      }));
    }
  };

  const fetchArticles = async () => {
    setState((prevState) => ({ ...prevState, loading: true }));
    try {
      const articles = await fetchFavoriteArticles();
      setState((prevState) => ({
        ...prevState,
        favoriteArticles: articles || [],
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching articles:', error);
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  const handleArticleClick = (article) => {
    const formattedTitle = formatTitleForUrl(article.title);
    navigateTo(`/articles/${formattedTitle}`);
  };

  return (
    <div className={favoriteStyles.favorite} onClick={toggleFavoriteMenu}>
      <button className={favoriteStyles.favoriteButton}>
        <i className={`ri-bookmark-fill ${favoriteStyles.favoriteIcon}`}></i>
      </button>
      <div
        className={`${favoriteStyles.favoriteMenu} ${
          state.isFavoriteOpen ? favoriteStyles.open : ''
        }`}
      >
        {state.userData ? (
          <>
            <div className={favoriteStyles.favoriteHeader}>
              <h1>Favorite articles</h1>
              <button
                className={favoriteStyles.favoriteHeaderButton}
                onClick={toggleFavoriteSettings}
              >
                <i className="ri-settings-5-line"></i>
              </button>
              {state.isFavoriteSettingsOpen && (
                <div className={favoriteStyles.favoriteSettings}>
                  <ul>
                    <li>
                      <span>Sort by date</span>
                    </li>
                    <li>
                      <span>Sort by A-Z</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={favoriteStyles.favoriteContent}>
              <ul>
                {state.favoriteArticles.length > 0 ? (
                  state.favoriteArticles.map((article) => (
                    <li key={article.article_id}>
                      <div className={favoriteStyles.authorProfile}>
                        <a>
                          <img
                            src={article.author_image}
                            alt="author profile"
                          />
                          <span>
                            {article.first_name + ' ' + article.last_name}
                          </span>
                        </a>
                      </div>
                      <div
                        className={favoriteStyles.favoriteArticle}
                        onClick={() => handleArticleClick(article)}
                      >
                        <div
                          className={favoriteStyles.favoriteArticleDescription}
                        >
                          <h1>{article.title}</h1>
                          <span>{article.description}</span>
                        </div>
                        <div className={favoriteStyles.favoriteArticlePhoto}>
                          <img
                            src={article.article_image}
                            alt="article photo"
                          />
                        </div>
                      </div>
                      <button
                        className={favoriteStyles.favoriteArticleButton}
                        onClick={(e) =>
                          handleFavoriteClick(e, article.article_id)
                        }
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </li>
                  ))
                ) : (
                  <li>No favorite articles found.</li>
                )}
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
