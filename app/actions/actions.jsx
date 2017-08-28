import {getWeather} from 'API'


let addWeather = (list) => {
  return {
    type: 'ADD_WEATHER',
    list
  }
}


export let startGetWeather = (city) => {
  return (dispatch, getState) => {
    return getWeather(city).then((res) => {
      dispatch(addWeather(res));
    })
  }
}
