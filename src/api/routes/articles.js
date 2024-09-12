async function fetchArticles() {
  try {
    const response = await fetch('/articles');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
}

export default fetchArticles;
