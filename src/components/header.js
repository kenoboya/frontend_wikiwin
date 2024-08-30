import logotype from "../assets/logotype/logotype.png";
function Header() {
  return (
    <header>
      <div className="logo-container" id="logotype">
        <img src={logotype} alt="problem with internet"></img>
      </div>
      <div className="nav-bar">
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a>
                <span>Expore</span>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a>
                <span>Article</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="favorite">
        <i className="ri-bookmark-fill">
          <a href="#"></a>
        </i>
      </div>
      <div className="profile">
        <a className="profile-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg/417px-%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%9E._%D0%9D.jpg"
            alt="Your account profile"
          ></img>
        </a>
      </div>
      <div className="search">
        <form
          className="search-form"
          action="/search"
          method="GET"
          id="search-bar"
        >
          <input
            type="search"
            name="query"
            placeholder="Search article"
            className="search-input"
            aria-label="search"
          ></input>
          <div className="search__button" id="search-button">
            <i className="ri-search-2-line search__icon"></i>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
