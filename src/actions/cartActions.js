import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  CHECK_SHIPPING,
  UNCHECK_SHIPPING
} from "./action-types/cartActions";


//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  };
};

//remove item action

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

//subtract qt action

export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  };
};

//add qt action

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  };
};

export const addShipping = () => {
  return {
    type: ADD_SHIPPING
  };
};

export const substractShipping = () => {
  return {
    type: SUB_SHIPPING
  };
};

export const checkShipping = () => {
  return {
    type: CHECK_SHIPPING
  };
};

export const uncheckShipping = () => {
  return {
    type: UNCHECK_SHIPPING
  };
};
