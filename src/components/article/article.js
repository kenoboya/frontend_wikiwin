import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import sidebarStyles from "../../css/article/sidebar.module.css";
import mainStyles from "../../css/article/main.module.css";
import floatRightStyles from "../../css/article/float-right.module.css";
import { useMenu } from "../../animation/use-sidebar.js";
import { fetchArticle } from "../../api/routes/article.js";

const Article = () => {
  const { title } = useParams();
  const { isCollapsed, handleToggle, mainContentRef, menuLinks, renderMenu } =
    useMenu();
  const [article, setArticle] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [infoBox, setInfoBox] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (title) {
          const data = await fetchArticle(title);
          setArticle(data.Article);
          setChapters(data.Chapters);
          setInfoBox(data.InfoBox);
        }
      } catch (error) {
        console.error("Failed to fetch article data", error);
      }
    };

    loadData();
  }, [title]);

  if (!article || !chapters.length || !infoBox) {
    return <div>Loading...</div>;
  }

  const renderChapter = (chapter) => (
    <div key={chapter.chapter_id}>
      <h2>{chapter.name}</h2>
      <p>{chapter.content}</p>
      {chapter.child && chapter.child.length > 0 && (
        <div>
          {chapter.child.map((child) => (
            <div key={child.chapter_id}>
              <h3>{child.name}</h3>
              <p>{child.content}</p>
              {child.child && child.child.length > 0 && (
                <div>
                  {child.child.map((grandChild) => (
                    <div key={grandChild.chapter_id}>
                      <h4>{grandChild.name}</h4>
                      <p>{grandChild.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <main>
      <div className={sidebarStyles["mw-parser-output"]}>
        <div
          className={`${sidebarStyles["mw-side-nav"]} ${
            isCollapsed ? sidebarStyles.collapsed : ""
          }`}
        >
          <div
            className={sidebarStyles["mw-side-nav-control"]}
            onClick={handleToggle}
            id="menu-toggle"
          >
            <i className="ri-align-justify"></i>
          </div>
          <div className={sidebarStyles["pop-up-menu"]}></div>
          <div className={sidebarStyles["nav-links"]}>
            {renderMenu(menuLinks)}
          </div>
        </div>
        <div
          className={`${mainStyles["mw-body"]} ${
            isCollapsed ? mainStyles.collapsed : ""
          }`}
          ref={mainContentRef}
        >
          <div
            className={`${mainStyles["mw-body-header"]} ${
              isCollapsed ? mainStyles.collapsed : ""
            }`}
          >
            <div id="BriefInfo" className={mainStyles["mw-brief-info"]}>
              <h1>{article.title}</h1>
              <p>{article.leadSection}</p>
            </div>

            <div id="InfoBox" className={floatRightStyles["mw-float-right"]}>
              <div className={floatRightStyles["mw-article-photo"]}>
                <img src={article.image} alt="article photo" />
                <div className={floatRightStyles["mw-article-title"]}>
                  <h1>{article.title}</h1>
                </div>
              </div>
              <div className={floatRightStyles["mw-content"]}>
                {Object.entries(infoBox).map(
                  ([key, value]) =>
                    value != null &&
                    !key.includes("info_box") && (
                      <div key={key}>
                        <h5>
                          {key
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (char) =>
                              char.toUpperCase()
                            )}{" "}
                        </h5>
                        <span>{value}</span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div>
            <div id="MainInfo" className={mainStyles["mw-main-info"]}>
              {chapters.map(renderChapter)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Article;
