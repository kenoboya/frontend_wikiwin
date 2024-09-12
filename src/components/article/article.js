import React from 'react';
import sidebarStyles from '../../css/article/sidebar.module.css';
import mainStyles from '../../css/article/main.module.css';
import floatRightStyles from '../../css/article/float-right.module.css';
import { useMenu } from '../../animation/use-sidebar.js';

const Article = () => {
  const { isCollapsed, handleToggle, mainContentRef, menuLinks, renderMenu } =
    useMenu();

  return (
    <main>
      <div className={sidebarStyles['mw-parser-output']}>
        <div
          className={`${sidebarStyles['mw-side-nav']} ${
            isCollapsed ? sidebarStyles.collapsed : ''
          }`}
        >
          <div
            className={sidebarStyles['mw-side-nav-control']}
            onClick={handleToggle}
            id="menu-toggle"
          >
            <i className="ri-align-justify"></i>
          </div>
          <div className={sidebarStyles['pop-up-menu']}></div>
          <div className={sidebarStyles['nav-links']}>
            {renderMenu(menuLinks)}
          </div>
        </div>
        <div
          className={`${mainStyles['mw-body']} ${
            isCollapsed ? mainStyles.collapsed : ''
          }`}
          ref={mainContentRef}
        >
          <div
            className={`${mainStyles['mw-body-header']} ${
              isCollapsed ? mainStyles.collapsed : ''
            }`}
          >
            <div className={mainStyles['mw-brief-info']}>
              <h1>Vinnytsia Empire</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <div className={floatRightStyles['mw-float-right']}>
              <div className={floatRightStyles['mw-article-photo']}>
                <img
                  src="https://ukrainetrek.com/images/flag/vinnitsa-oblast-flag.gif"
                  alt="article photo"
                ></img>
                <div className={floatRightStyles['mw-article-title']}>
                  <h1>Vinnytsia Empire</h1>
                </div>
              </div>
              <div className={floatRightStyles['mw-content']}>
                <div id="country">
                  <h5>Country:</h5>
                  <span> Ukraine</span>
                </div>
                <div id="city">
                  <h5>City:</h5>
                  <span>Vinnitsia</span>
                </div>
                <div id="city">
                  <h5>City:</h5>
                  <span>Vinnitsia</span>
                </div>
                <div id="city">
                  <h5>City:</h5>
                  <span>Vinnitsia</span>
                </div>
                <div id="city">
                  <h5>City:</h5>
                  <span>Vinnitsia</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={mainStyles['mw-main-info']}>
              <h2>Introduction</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
              </p>
              <h2>Background dumppage of April 29-30</h2>
              <h2>Test</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
              </p>
              <h3>Test2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ligula non risus molestie semper non a dolor. Maecenas
                sapien sem eu enim.
              </p>
              <h4>Test3</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Article;
