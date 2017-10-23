export const weatherReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_WEATHER':
    return [...state, action.list];
    default:
    return state;
  }
}
