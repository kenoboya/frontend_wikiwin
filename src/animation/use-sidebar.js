import { useState, useEffect, useRef } from "react";
import { buildMenuHierarchy, handleScrollTo } from "./sidebar";

export const useMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const mainContentRef = useRef(null);
  const [menuLinks, setMenuLinks] = useState([]);

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  useEffect(() => {
    const headings = Array.from(
      mainContentRef.current.querySelectorAll("h2, h3, h4")
    );
    const menuHierarchy = buildMenuHierarchy(headings);
    setMenuLinks(menuHierarchy);
  }, []);

  return {
    isCollapsed,
    handleToggle,
    mainContentRef,
    menuLinks,
    handleScrollTo,
  };
};
