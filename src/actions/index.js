import { SET_FOOD_SELECTED, SET_SHOPPING_CART } from '../action-types/index';

export function setFoodSelected(foodId) {
  return {
    type: SET_FOOD_SELECTED,
    payload: {
      foodId
    }
  }
}

export function setShoppingCart(foodId){
  return {
    type: SET_SHOPPING_CART,
    payload: {
      foodId
    }
  }
}