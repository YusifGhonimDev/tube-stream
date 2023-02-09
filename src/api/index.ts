import axios from "axios";

export const instance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  params: {
    maxResults: 50,
  },
});
