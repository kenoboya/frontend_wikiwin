export const fetchArticle = async (formattedTitle) => {
  try {
    const response = await fetch(`/articles/${formattedTitle}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};
