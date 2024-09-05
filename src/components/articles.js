import React from "react";
import style from "../css/articles.module.css";

function Articles() {
  return (
    <main>
      <div className={style.articles}>
        <section className={style.article}>
          <img
            className={style.articleImage}
            src="https://kombidruk.com.ua/content/images/12/480x362l50nn0/copy_prapor-ukrainy-herb-vinnytsia-kozaky911-38090760682975.png"
            alt="image didn't downloaded"
          />
          <div className={style.overlay}>
            <h1 className={style.titleMain}>Vinnytsia Empire</h1>
            <h2 className={style.briefInfo}>
              Vinnytsia Empire was created 1921 year. The creator was Dmitry
              Chechaluk
            </h2>
            <a href="#">
              <button className={style.articleButton}>Read more</button>
            </a>
          </div>
        </section>
        <section className={style.article}>
          <img
            className={style.articleImage}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Prapor_Vinnytskoyi_oblasti.svg/1200px-Prapor_Vinnytskoyi_oblasti.svg.png"
            alt="image didn't downloaded"
          />
          <div className={style.overlay}>
            <h1 className={style.titleMain}>Vinnytsia Empire</h1>
            <h2 className={style.briefInfo}>
              Vinnytsia Empire was created 1921 year. The creator was Dmitry
              Chechaluk
            </h2>
            <a href="#">
              <button className={style.articleButton}>Read more</button>
            </a>
          </div>
        </section>
        <section className={style.article}>
          <img
            className={style.articleImage}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Prapor_Vinnytskoyi_oblasti.svg/1200px-Prapor_Vinnytskoyi_oblasti.svg.png"
            alt="image didn't downloaded"
          />
          <div className={style.overlay}>
            <h1 className={style.titleMain}>Vinnytsia Empire</h1>
            <h2 className={style.briefInfo}>
              Vinnytsia Empire was created 1921 year. The creator was Dmitry
              Chechaluk
            </h2>
            <a href="#">
              <button className={style.articleButton}>Read more</button>
            </a>
          </div>
        </section>
        <section className={style.article}>
          <img
            className={style.articleImage}
            src="https://www.ukrdruk.com/wp-content/uploads/2022/12/flag-00123_%D1%83%D0%BA%D1%80_800.jpg"
            alt="image didn't downloaded"
          />
          <div className={style.overlay}>
            <h1 className={style.titleMain}>Vinnytsia Empire</h1>
            <h2 className={style.briefInfo}>
              Vinnytsia Empire was created 1921 year. The creator was Dmitry
              Chechaluk
            </h2>
            <a href="#">
              <button className={style.articleButton}>Read more</button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Articles;
