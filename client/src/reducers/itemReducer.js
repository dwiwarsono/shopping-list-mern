import uuid from 'uuid';
import { AMBIL_ITEMS, TAMBAH_ITEMS, HAPUS_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Telur' },
    { id: uuid(), name: 'Mie' },
    { id: uuid(), name: 'enak' },
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case AMBIL_ITEMS:
      return {
        ...state
      };
    case HAPUS_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case TAMBAH_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    default:
      return state;
  }
}