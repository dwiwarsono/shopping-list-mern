// import uuid from 'uuid';
import { AMBIL_ITEMS, TAMBAH_ITEMS, HAPUS_ITEMS, LOADING_ITEMS } from '../actions/types';

const initialState = {
  items: [],
  loading: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case AMBIL_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case HAPUS_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case TAMBAH_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}