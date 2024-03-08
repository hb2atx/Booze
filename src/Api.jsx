import axios from "axios";

const BASE_API_URL = "http://localhost:3000";

class SnackOrBoozeApi {
  static async getItems() {
    try {
      const snacksResponse = await axios.get(`${BASE_API_URL}/snacks`);
      const drinksResponse = await axios.get(`${BASE_API_URL}/drinks`);

      return {
        snacks: snacksResponse.data,
        drinks: drinksResponse.data,
      };
    } catch (error) {
      console.error("Error getting items:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  }

  static async addSnack(item) {
    try {
      const resp = await axios.post(`${BASE_API_URL}/snacks`, item);
      return resp.data; // Return the response data on success
    } catch (error) {
      console.error("Error adding snack:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  }

  static async addDrink(item) {
    try {
      const resp = await axios.post(`${BASE_API_URL}/drinks`, item);
      return resp.data; // Return the response data on success
    } catch (error) {
      console.error("Error adding drink:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  }
}

export default SnackOrBoozeApi;
