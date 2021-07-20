import {LOAD_PRODUCTS} from './types';
import productData from '../assets/data/storeItemsData';

export const loadProducts = () => {

  return {
    type: LOAD_PRODUCTS,
    products: productData
  };

};