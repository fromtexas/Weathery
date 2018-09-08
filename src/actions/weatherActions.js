import * as types from "../constants/actionTypes";
import { getWeather } from "../utils/getWeather";

export const getWeatherAction = city => dispatch => {
  getWeather(city).then(res => {
    dispatch({ type: types.ADD_WEATHER, payload: res });
  });
};
