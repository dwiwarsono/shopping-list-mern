import axios from 'axios';
import { AMBIL_ITEMS, TAMBAH_ITEMS, HAPUS_ITEMS, LOADING_ITEMS } from './types';


export const ambilItem = () => dispatch => {
  dispatch(setLoadingItem());
  axios.get('/api/items')
    .then(res =>
      dispatch({
        type: AMBIL_ITEMS,
        payload: res.data
      })
    );
};

export const tambahItem = item => dispatch => {
  axios.post('/api/items', item)
    .then(res =>
      dispatch({
        type: TAMBAH_ITEMS,
        payload: res.data
      })
    )
};

export const hapusItem = id => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: HAPUS_ITEMS,
        payload: id
      })
    )
};



export const setLoadingItem = () => {
  return {
    type: LOADING_ITEMS,
  };
};