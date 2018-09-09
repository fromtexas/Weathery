import axios from "axios";
import { KEY } from "./API";

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/";

export const getWeather = location => {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${KEY}`;

  return axios.get(requestUrl).then(
    res => {
      return res.data;
    },
    res => {
      throw new Error(res);
    }
  );
};
