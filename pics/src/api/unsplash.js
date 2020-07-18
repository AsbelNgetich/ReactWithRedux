import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID piLn_rd7s6c3Gt_Za5FMeWc7RFYyIF8TFNaaWBEkqtM",
  },
});
