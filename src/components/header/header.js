import headerStyles from '../../css/header/header.module.css';
import Profile from './profile';
import Favorite from './favorite';
import logotype from '../../assets/logotype/logotype.png';

function Header() {
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
        <Favorite />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
