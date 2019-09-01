import axios from 'axios';

const KEY = 'AIzaSyCgjyngFXRPgZCXZCZQ-JMyHlM_FSJBB4E';

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
