import logotype from "../assets/logotype/logotype.png";
import style from "../css/header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoContainer} id="logotype">
        <img
          src={logotype}
          alt="problem with internet"
          className={style.logoImage}
        />
      </div>
      <div className={style.navBar}>
        <nav className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a>
                <span>Explore</span>
              </a>
            </li>
            <li className={style.navItem}>
              <a>
                <span>About</span>
              </a>
            </li>
            <li className={style.navItem}>
              <a href="http://localhost:3000/articles">
                <span>Article</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.favorite}>
        <i className={`ri-bookmark-fill ${style.favoriteIcon}`}>
          <a href="#" className={style.favoriteLink}></a>
        </i>
      </div>
      <div className={style.profile}>
        <a className={style.profileLink}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg/417px-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg"
            alt="Your account profile"
            className={style.profileImage}
          />
        </a>
      </div>
      <div className={style.search}>
        <form
          className={style.searchForm}
          action="/search"
          method="GET"
          id="search-bar"
        >
          <input
            type="search"
            name="query"
            placeholder="Search article"
            className={style.searchInput}
            aria-label="search"
          />
          <div className={style.searchButton} id="search-button">
            <i className={`ri-search-2-line ${style.searchIcon}`}></i>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
