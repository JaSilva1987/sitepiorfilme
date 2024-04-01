import axios from "axios";

const API_URL = "https://tools.texoit.com/backend-java/api/movies";

export const getWinnersByYear = async (year: string) => {
  try {
    const response = await axios.get(`${API_URL}?winner=true&year=${year}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching winners by year:", error);
    return [];
  }
};

export const getYearsWithMultipleWinners = async () => {
  try {
    const response = await axios.get(
      `${API_URL}?projection=years-with-multiple-winners`
    );
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

export const getMovies = async (
  pageNumber: number,
  pageSize: number,
  year?: string
) => {
  try {
    let url = `${API_URL}?page=${pageNumber}&size=${pageSize}`;
    if (year) {
      url += `&year=${year}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
