export const buildMenuHierarchy = (headings) => {
  const menu = [];
  const stack = [];
  const ids = new Set();

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.substring(1), 10);
    let id =
      heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-');

    let uniqueId = id;
    let counter = 1;
    while (ids.has(uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter++;
    }
    id = uniqueId;
    ids.add(id);
    heading.id = id;

    const item = { id, text: heading.textContent, children: [] };

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length) {
      stack[stack.length - 1].item.children.push(item);
    } else {
      menu.push(item);
    }

    stack.push({ level, item });
  });

  return menu;
};

export const handleScrollTo = (id) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const offset = 70; // Offset for header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = targetElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
