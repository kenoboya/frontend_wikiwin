import React, { useState, useEffect } from 'react';
import style from '../css/articles.module.css';
import fetchArticles from '../api/routes/articles';
import Article from './articles/article';

function UserProfile() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          throw new Error('Data fetched is not an array');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getArticles();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main>
      <div className={style.profile_container}>
        <div className={style.profile_header}>
          <div className={style.profile_header_image}>
            <img src="#" alt="profile image"></img>
          </div>
          <div className={style.profile_header_content}>
            <div className={style.profile_header_content_name}>
              <h1>Max Mazur</h1>
            </div>
            <div className={style.profile_header_content_username}>
              <span>Username</span>
            </div>
            <div className={style.profile_header_content_stats}>
              <div>
                <span>Posts: </span>
              </div>
              <div>
                <span>Favorites: </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.profile_content}>
        {articles && Array.isArray(articles) ? (
          articles.map((article) => (
            <Article
              key={article.article_id}
              image={article.image}
              title={article.title}
              leadSection={article.leadSection}
            />
          ))
        ) : (
          <div>No articles available</div>
        )}
      </div>
    </main>
  );
}

export default UserProfile;
