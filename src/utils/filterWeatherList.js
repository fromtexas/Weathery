export const filterWeatherList = arr => {
  let mappedArr = {};
  let dt_txt;

  arr.forEach(item => {
    dt_txt = item.dt_txt.slice(0, 10);
    mappedArr[dt_txt] = [];
    mappedArr[dt_txt].push(item);
  });

  return mappedArr;
};
