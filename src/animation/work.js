import { useState, useEffect, useRef } from 'react';
import { buildMenuHierarchy, handleScrollTo } from './sidebar';

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

export const useMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const mainContentRef = useRef(null);
  const [menuLinks, setMenuLinks] = useState([]);

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  useEffect(() => {
    const updateMenu = () => {
      if (mainContentRef.current) {
        const headings = Array.from(
          mainContentRef.current.querySelectorAll('h2, h3, h4')
        );
        const menuHierarchy = buildMenuHierarchy(headings);
        setMenuLinks(menuHierarchy);
      }
    };

    updateMenu();
  }, [mainContentRef.current, buildMenuHierarchy]);

  return {
    isCollapsed,
    handleToggle,
    mainContentRef,
    menuLinks,
    renderMenu,
  };
};
