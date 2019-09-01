import axios from 'axios';

const KEY = 'AIzaSyAXBQWRlWEg5PVP4IrCbGDzzMlb023MMG4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

