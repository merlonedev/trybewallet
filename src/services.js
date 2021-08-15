const fetchAPI = async (URL) => {
  const response = await fetch(URL);
  const DATA = await response.json();
  return DATA;
};

export default fetchAPI;
