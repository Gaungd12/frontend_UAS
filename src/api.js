const BASE_URL = "https://ghibliapi.vercel.app";

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/films`);
  return response.json();
};
