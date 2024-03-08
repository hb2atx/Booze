import SnackOrBoozeApi from "./Api";
import axios from "axios";

jest.mock("axios");

describe("SnackOrBoozeApi", () => {
  describe("getSnacks", () => {
    it("makes a GET request to /snacks", async () => {
      const result = [{ name: "Crisps" }];
      axios.get.mockResolvedValueOnce({ data: result });

      await expect(SnackOrBoozeApi.getSnacks()).resolves.toEqual(result);
      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/snacks");
    });
  });

  describe("getDrinks", () => {
    it("makes a GET request to /drinks", async () => {
      const result = [{ name: "Cola" }];
      axios.get.mockResolvedValueOnce({ data: result });

      await expect(SnackOrBoozeApi.getDrinks()).resolves.toEqual(result);
      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/drinks");
    });
  });
});