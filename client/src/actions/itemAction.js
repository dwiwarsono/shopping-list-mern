import { AMBIL_ITEMS, TAMBAH_ITEMS, HAPUS_ITEMS } from './types';


export const ambilItem = () => {
  return {
    type: AMBIL_ITEMS

  };
}
export const hapusItem = id => {
    return {
      type: HAPUS_ITEMS,
      payload: id
    };
}

export const tambahItem = item => {
  return {
    type: TAMBAH_ITEMS,
    payload: item
  };
}