// api.js
import axios from 'axios';

const BASE_URL = 'https://moonpig.github.io/tech-test-frontend';

export const searchCards = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const viewCard = async (productNo) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${productNo}.json`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
