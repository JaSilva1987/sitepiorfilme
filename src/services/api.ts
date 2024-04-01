import axios from "axios";

const API_URL = "https://tools.texoit.com/backend-java/api/movies";

export const getWinnersByYear = async () => {
  try {
    const response = await axios.get(`${API_URL}/winnersByYear`);
    return response.data;
  } catch (error) {
    console.error("Error fetching winners by year:", error);
    return [];
  }
};

export const getTopStudios = async () => {
  try {
    const response = await axios.get(
      `${API_URL}?projection=studios-with-win-count`
    );
    const studios = response.data.studios;

    // Retorna apenas os 3 primeiros estúdios
    return studios.slice(0, 3);
  } catch (error) {
    console.error("Error fetching top studios:", error);
    return [];
  }
};

export const getProducerIntervals = async () => {
  try {
    const response = await axios.get(
      `${API_URL}?projection=max-min-win-interval-for-producers`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching producer intervals:", error);
    return [];
  }
};

export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
