import React from "react";
import sidebarStyles from "../css/article/sidebar.module.css";
import mainStyles from "../css/article/main.module.css";
import floatRightStyles from "../css/article/float-right.module.css";
import { useMenu } from "../animation/use-sidebar.js";

const Article = () => {
  const {
    isCollapsed,
    handleToggle,
    mainContentRef,
    menuLinks,
    handleScrollTo,
  } = useMenu();

  const renderMenu = (items) => (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo(item.id);
            }}
          >
            <span>{item.text}</span>
          </a>
          {item.children.length > 0 && renderMenu(item.children)}
        </li>
      ))}
    </ol>
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
            <div className={mainStyles["mw-brief-info"]}>
              <h1>Vinnytsia Empire</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className={floatRightStyles["mw-float-right"]}>
              <div className={floatRightStyles["mw-article-photo"]}>
                <img
                  src="https://ukrainetrek.com/images/flag/vinnitsa-oblast-flag.gif"
                  alt="article photo"
                ></img>
                <div className={floatRightStyles["mw-article-title"]}>
                  <h1>Vinnytsia Empire</h1>
                </div>
              </div>
              <div className={floatRightStyles["mw-content"]}>
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
            <div className={mainStyles["mw-main-info"]}>
              <h2>Introduction</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <h2>Background dumppage of April 29-30</h2>
              <h2>Test</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <h3>Test2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ligula non risus molestie semper non a dolor. Maecenas
                lacus nisl, pellentesque in vestibulum ut, venenatis quis est.
                Etiam nec nibh est. Nunc feugiat sem at ipsum pulvinar
                fermentum. Phasellus sit amet tristique ante, in mattis lorem.
                Sed egestas quam vel elit vestibulum ullamcorper. In finibus
                iaculis ex, id tincidunt urna tempus id. Aenean vitae nibh
                aliquet, egestas mi vitae, tristique ligula. Donec suscipit elit
                eget est commodo, aliquet porta dolor aliquet. Cras mi nibh,
                maximus ut diam id, aliquam imperdiet ante. Donec id finibus
                sapien, aliquet tristique ligula. Pellentesque condimentum magna
                sit amet tempor efficitur. Nulla non iaculis nunc, ac varius
                metus. Maecenas eu elit suscipit, lobortis dui eu, mollis arcu.
                Nulla orci arcu, hendrerit et egestas eget, maximus et turpis.
                Nunc sed metus ut erat tempor tincidunt. Morbi at metus blandit
                odio tincidunt sollicitudin. Morbi sed dolor justo. Nulla
                sollicitudin sem pellentesque urna suscipit, ut vehicula magna
                dignissim. Nullam faucibus velit a vulputate pharetra. Aliquam
                sapien diam, convallis ac sapien non, vehicula aliquam nulla.
                Aenean vitae lectus eros. Sed egestas, nisl sit amet lacinia
                consectetur, ex nibh consectetur tellus, eu elementum tortor
                quam et diam. Donec congue quam purus. Etiam efficitur at turpis
                vel aliquam. Mauris sagittis, ipsum sit amet porta suscipit,
                enim dolor suscipit mi, vel ultrices risus nibh et dui. Quisque
                non risus efficitur, ullamcorper velit vel, finibus arcu.
                Praesent non lectus tellus. Maecenas eget diam malesuada,
                vestibulum tellus bibendum, euismod sem. Nulla mollis tellus a
                viverra vulputate. Aenean suscipit nibh at tristique accumsan.
                Duis ultricies tincidunt arcu, eget consequat tortor laoreet
                vitae. Fusce sollicitudin, urna id sodales varius, risus ex
                commodo nisl, et faucibus elit sem in nibh. Quisque vitae risus
                non erat aliquet dapibus sed eget sem. Nullam gravida luctus dui
                quis pellentesque. Morbi tincidunt nisi nec augue finibus
                gravida. Donec aliquam enim ut tempor eleifend. Curabitur luctus
                vel velit non consectetur. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas molestie risus quis urna
                congue consectetur. Aliquam ligula enim, auctor ut pretium
                vitae, eleifend at massa. Nunc at lorem eget quam suscipit
                vulputate. Vestibulum magna ligula, accumsan viverra pretium ac,
                lobortis quis arcu. Maecenas fermentum, mauris a facilisis
                faucibus, lacus turpis placerat eros, quis condimentum tortor
                ipsum nec tellus. Aenean vestibulum mauris sit amet urna
                placerat, eu aliquam purus placerat. Cras eget massa lobortis,
                tincidunt augue at, pharetra lorem. Etiam commodo risus justo,
                ut accumsan erat lobortis at. Pellentesque in orci interdum,
                pulvinar nibh id, ornare urna. Nulla lorem metus, pharetra a
                feugiat id, placerat sed neque. Integer eu neque at metus
                maximus tempor. Proin tristique dapibus congue. Maecenas iaculis
                efficitur hendrerit. Sed rutrum est maximus felis tempus
                iaculis. Donec felis ex, pellentesque nec purus vel, ultricies
                posuere urna. Aliquam erat volutpat. Donec volutpat id felis
                varius porttitor. Sed at metus non ipsum efficitur porttitor.
                Donec a bibendum odio. Quisque felis neque, congue et nibh sit
                amet, lacinia posuere tortor. Nullam et ex nunc. Cras eu augue
                eget enim ornare blandit. Curabitur ut tristique tellus,
                accumsan tristique purus. Phasellus varius dui et lorem
                porttitor maximus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Duis vestibulum, mi
                non euismod convallis, lorem turpis aliquet enim, et suscipit
                sapien sem eu enim.
              </p>
              <h4>Test3</h4>
              <h2>Introduction1</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <h2>Background dumppage of April 29-302</h2>
              <h2>Test11</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <h3>Test22</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ligula non risus molestie semper non a dolor. Maecenas
                lacus nisl, pellentesque in vestibulum ut, venenatis quis est.
                Etiam nec nibh est. Nunc feugiat sem at ipsum pulvinar
                fermentum. Phasellus sit amet tristique ante, in mattis lorem.
                Sed egestas quam vel elit vestibulum ullamcorper. In finibus
                iaculis ex, id tincidunt urna tempus id. Aenean vitae nibh
                aliquet, egestas mi vitae, tristique ligula. Donec suscipit elit
                eget est commodo, aliquet porta dolor aliquet. Cras mi nibh,
                maximus ut diam id, aliquam imperdiet ante. Donec id finibus
                sapien, aliquet tristique ligula. Pellentesque condimentum magna
                sit amet tempor efficitur. Nulla non iaculis nunc, ac varius
                metus. Maecenas eu elit suscipit, lobortis dui eu, mollis arcu.
                Nulla orci arcu, hendrerit et egestas eget, maximus et turpis.
                Nunc sed metus ut erat tempor tincidunt. Morbi at metus blandit
                odio tincidunt sollicitudin. Morbi sed dolor justo. Nulla
                sollicitudin sem pellentesque urna suscipit, ut vehicula magna
                dignissim. Nullam faucibus velit a vulputate pharetra. Aliquam
                sapien diam, convallis ac sapien non, vehicula aliquam nulla.
                Aenean vitae lectus eros. Sed egestas, nisl sit amet lacinia
                consectetur, ex nibh consectetur tellus, eu elementum tortor
                quam et diam. Donec congue quam purus. Etiam efficitur at turpis
                vel aliquam. Mauris sagittis, ipsum sit amet porta suscipit,
                enim dolor suscipit mi, vel ultrices risus nibh et dui. Quisque
                non risus efficitur, ullamcorper velit vel, finibus arcu.
                Praesent non lectus tellus. Maecenas eget diam malesuada,
                vestibulum tellus bibendum, euismod sem. Nulla mollis tellus a
                viverra vulputate. Aenean suscipit nibh at tristique accumsan.
                Duis ultricies tincidunt arcu, eget consequat tortor laoreet
                vitae. Fusce sollicitudin, urna id sodales varius, risus ex
                commodo nisl, et faucibus elit sem in nibh. Quisque vitae risus
                non erat aliquet dapibus sed eget sem. Nullam gravida luctus dui
                quis pellentesque. Morbi tincidunt nisi nec augue finibus
                gravida. Donec aliquam enim ut tempor eleifend. Curabitur luctus
                vel velit non consectetur. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas molestie risus quis urna
                congue consectetur. Aliquam ligula enim, auctor ut pretium
                vitae, eleifend at massa. Nunc at lorem eget quam suscipit
                vulputate. Vestibulum magna ligula, accumsan viverra pretium ac,
                lobortis quis arcu. Maecenas fermentum, mauris a facilisis
                faucibus, lacus turpis placerat eros, quis condimentum tortor
                ipsum nec tellus. Aenean vestibulum mauris sit amet urna
                placerat, eu aliquam purus placerat. Cras eget massa lobortis,
                tincidunt augue at, pharetra lorem. Etiam commodo risus justo,
                ut accumsan erat lobortis at. Pellentesque in orci interdum,
                pulvinar nibh id, ornare urna. Nulla lorem metus, pharetra a
                feugiat id, placerat sed neque. Integer eu neque at metus
                maximus tempor. Proin tristique dapibus congue. Maecenas iaculis
                efficitur hendrerit. Sed rutrum est maximus felis tempus
                iaculis. Donec felis ex, pellentesque nec purus vel, ultricies
                posuere urna. Aliquam erat volutpat. Donec volutpat id felis
                varius porttitor. Sed at metus non ipsum efficitur porttitor.
                Donec a bibendum odio. Quisque felis neque, congue et nibh sit
                amet, lacinia posuere tortor. Nullam et ex nunc. Cras eu augue
                eget enim ornare blandit. Curabitur ut tristique tellus,
                accumsan tristique purus. Phasellus varius dui et lorem
                porttitor maximus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Duis vestibulum, mi
                non euismod convallis, lorem turpis aliquet enim, et suscipit
                sapien sem eu enim.
              </p>
              <h4>Test33</h4>
              <h2>Introduction2</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <h2>Background dumppage of April 29-32</h2>
              <h2>Test13</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <h3>Test23</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis ligula non risus molestie semper non a dolor. Maecenas
                lacus nisl, pellentesque in vestibulum ut, venenatis quis est.
                Etiam nec nibh est. Nunc feugiat sem at ipsum pulvinar
                fermentum. Phasellus sit amet tristique ante, in mattis lorem.
                Sed egestas quam vel elit vestibulum ullamcorper. In finibus
                iaculis ex, id tincidunt urna tempus id. Aenean vitae nibh
                aliquet, egestas mi vitae, tristique ligula. Donec suscipit elit
                eget est commodo, aliquet porta dolor aliquet. Cras mi nibh,
                maximus ut diam id, aliquam imperdiet ante. Donec id finibus
                sapien, aliquet tristique ligula. Pellentesque condimentum magna
                sit amet tempor efficitur. Nulla non iaculis nunc, ac varius
                metus. Maecenas eu elit suscipit, lobortis dui eu, mollis arcu.
                Nulla orci arcu, hendrerit et egestas eget, maximus et turpis.
                Nunc sed metus ut erat tempor tincidunt. Morbi at metus blandit
                odio tincidunt sollicitudin. Morbi sed dolor justo. Nulla
                sollicitudin sem pellentesque urna suscipit, ut vehicula magna
                dignissim. Nullam faucibus velit a vulputate pharetra. Aliquam
                sapien diam, convallis ac sapien non, vehicula aliquam nulla.
                Aenean vitae lectus eros. Sed egestas, nisl sit amet lacinia
                consectetur, ex nibh consectetur tellus, eu elementum tortor
                quam et diam. Donec congue quam purus. Etiam efficitur at turpis
                vel aliquam. Mauris sagittis, ipsum sit amet porta suscipit,
                enim dolor suscipit mi, vel ultrices risus nibh et dui. Quisque
                non risus efficitur, ullamcorper velit vel, finibus arcu.
                Praesent non lectus tellus. Maecenas eget diam malesuada,
                vestibulum tellus bibendum, euismod sem. Nulla mollis tellus a
                viverra vulputate. Aenean suscipit nibh at tristique accumsan.
                Duis ultricies tincidunt arcu, eget consequat tortor laoreet
                vitae. Fusce sollicitudin, urna id sodales varius, risus ex
                commodo nisl, et faucibus elit sem in nibh. Quisque vitae risus
                non erat aliquet dapibus sed eget sem. Nullam gravida luctus dui
                quis pellentesque. Morbi tincidunt nisi nec augue finibus
                gravida. Donec aliquam enim ut tempor eleifend. Curabitur luctus
                vel velit non consectetur. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas molestie risus quis urna
                congue consectetur. Aliquam ligula enim, auctor ut pretium
                vitae, eleifend at massa. Nunc at lorem eget quam suscipit
                vulputate. Vestibulum magna ligula, accumsan viverra pretium ac,
                lobortis quis arcu. Maecenas fermentum, mauris a facilisis
                faucibus, lacus turpis placerat eros, quis condimentum tortor
                ipsum nec tellus. Aenean vestibulum mauris sit amet urna
                placerat, eu aliquam purus placerat. Cras eget massa lobortis,
                tincidunt augue at, pharetra lorem. Etiam commodo risus justo,
                ut accumsan erat lobortis at. Pellentesque in orci interdum,
                pulvinar nibh id, ornare urna. Nulla lorem metus, pharetra a
                feugiat id, placerat sed neque. Integer eu neque at metus
                maximus tempor. Proin tristique dapibus congue. Maecenas iaculis
                efficitur hendrerit. Sed rutrum est maximus felis tempus
                iaculis. Donec felis ex, pellentesque nec purus vel, ultricies
                posuere urna. Aliquam erat volutpat. Donec volutpat id felis
                varius porttitor. Sed at metus non ipsum efficitur porttitor.
                Donec a bibendum odio. Quisque felis neque, congue et nibh sit
                amet, lacinia posuere tortor. Nullam et ex nunc. Cras eu augue
                eget enim ornare blandit. Curabitur ut tristique tellus,
                accumsan tristique purus. Phasellus varius dui et lorem
                porttitor maximus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Duis vestibulum, mi
                non euismod convallis, lorem turpis aliquet enim, et suscipit
                sapien sem eu enim.
              </p>
              <h4>Test33</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Article;
