import fetch from 'isomorphic-fetch';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function requestData(category) {
  return {
    type: REQUEST_DATA,
    category
  };
}

export function receiveData(category, data) {
  return {
    type: RECEIVE_DATA,
    category,
    data
  };
}

function selectRandomly(results) {
  return results[Math.floor(Math.random() * results.length)];
}

export function fetchData(category) {
  return function(dispatch) {
    dispatch(requestData(category));
    return fetch(`http://swapi.co/api/${category}`)
      .then(response => response.json())
      .then(json => selectRandomly(json.results))
      .then(selected => dispatch(receiveData(category, selected)));
  };
}
