export const generateUniqueId = (text) => {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
};

export const assignUniqueIdsToHeadings = (ref) => {
  if (!ref.current) return;

  const headings = ref.current.querySelectorAll("h2, h3, h4");
  headings.forEach((heading, index) => {
    const baseId = generateUniqueId(heading.textContent || `heading-${index}`);
    heading.id = baseId;
  });
};
