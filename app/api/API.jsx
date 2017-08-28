import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/';
//bf60f54add3a2f791a7c01c4944ff31e
const KEY = 'appid=bf60f54add3a2f791a7c01c4944ff31e&units=metric';
export let getWeather = (location) => {
  let encodedLocation = encodeURIComponent(location);
   let requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${KEY}`;
    return axios.get(requestUrl).then((res) => {
          return res.data;
    },(res) => {
      throw new Error(res);
    })
}
