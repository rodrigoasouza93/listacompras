import { createSelector } from 'reselect'
import uuidv1 from 'uuid/v1';
import { Types } from '../actions/list';

const initialState = {
  list: null,
  items: [],
}
function getItemTotal(product) {
  return product.price * product.quantity;
}

export default function list(state=initialState, action) {
  switch(action.type) {
    case Types.ADD_PRODUCT:
      return {
        list: action.list,
        items: [ 
          ...state.items, 
          { ...action.product, total: getItemTotal(action.product), id: uuidv1() }
        ]
      };
    case Types.DELETE_PRODUCT:
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.productId)
    }

    default:
      return state;
  }
}

export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0),
);
