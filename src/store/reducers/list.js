import { createSelector } from 'reselect'
import uuidv1 from 'uuid/v1';
import { Types } from '../actions/list';

const initialState = {
  list: null,
  items: [],
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case Types.NEW_LIST:
      return {
        ...initialState,
        date: getDate(),
      }
    case Types.ADD_PRODUCT:
      return {
        ...state,
        list: action.list,
        items: [
          ...state.items,
          { ...action.product, total: getItemTotal(action.product), id: uuidv1(), checked: false }
        ]
      };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId),
      }
    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.productId),
      }
    case Types.UPDATE_PRODUCT:
      return {
        ...state,
        list: action.list,
        items: updateProduct(state.items, action.product),
      }

    default:
      return state;
  }
}

// Helpers
function getItemTotal(product) {
  return product.price * product.quantity;
}

function updateProduct(items, product) {
  const index = items.findIndex(item => item.id === product.id);
  return [
    ...items.slice(0, index),
    { ...product, total: getItemTotal(product) },
    ...items.slice(index + 1)
  ];
}

function toggleItem(items, productId) {
  const index = items.findIndex(item => item.id === productId);
  return [
    ...items.slice(0, index),
    { ...items[index], checked: !items[index].checked },
    ...items.slice(index + 1)
  ];
}

function getDate() {
  const date = new Date();
  const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
  return date.toLocaleDateString('pt-BR', options);
}

// Selectors
export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((total, item) => total + item.total, 0),
);

export const getOpenedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => !item.checked).length,
);

export const getClosedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => item.checked).length,
);
