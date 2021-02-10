import axios from "axios";

const KEY = "AIzaSyBoX9C8DO8jBDl-MRgGmFyB8Qe4wPM4jiI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
