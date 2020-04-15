import axios from 'axios';
const baseUrl = 'https://thawing-temple-80581.herokuapp.com';

export const getMessage = () => {
  return async dispatch => {
    const { data } = await axios.get(baseUrl);
    const sorted = data.sort((a,b) => b.id - a.id);
    dispatch({
      type: 'GET_MESSAGE',
      payload: sorted
    })
  }
}