import {getWeather} from 'API'


const addWeather = (list) => {
  return {
    type: 'ADD_WEATHER',
    list
  }
}


export const startGetWeather = (city) => {
  return (dispatch, getState) => {
    return getWeather(city).then((res) => {
      dispatch(addWeather(res));
    })
  }
}
