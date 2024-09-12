import React from 'react';
import style from '../../css/articles.module.css';
import { useNavigationForArticles } from '../../animation/utils';

const Article = ({ image, title, leadSection }) => {
  const { navigateTo, formatTitleForUrl } = useNavigationForArticles();
  const handleClick = () => {
    const formattedTitle = formatTitleForUrl(title);
    navigateTo(`/articles/${formattedTitle}`);
  };
  return (
    <section className={style.article}>
      <img className={style.articleImage} src={image} alt="Article image" />
      <div className={style.overlay}>
        <h1 className={style.titleMain}>{title}</h1>
        <h2 className={style.briefInfo}>{leadSection}</h2>
        <button className={style.articleButton} onClick={handleClick}>
          Read more
        </button>
      </div>
    </section>
  );
};

export default Article;
