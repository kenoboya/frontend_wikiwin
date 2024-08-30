function Article() {
  return (
    <main>
      <div className="mw-parser-output">
        <div className="mw-side-nav">
          <div className="pop-up-menu"></div>
          <div className="nav-links">
            <ol>
              <li>
                <a>
                  <span>Introduction</span>
                </a>
              </li>
              <li>
                <a>
                  <span>background dumppage of April 29-30</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Test</span>
                </a>
                <ol>
                  <li>
                    <a>
                      <span>Test2</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Test3</span>
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div className="mw-body"></div>
        <div className="mw-float-right"></div>
      </div>
    </main>
  );
}

export default Article;
