import React, { useState, useEffect } from 'react';
import style from '../../css/articles.module.css';
import fetchArticles from '../../api/routes/articles';
import Article from './article';

const Articles = () => {
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
      <div className={style.articles}>
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
};

export default Articles;
