import { SET_FOOD_SELECTED } from '../action-types/index';

export function setFoodSelected(foodId) {
  return {
    type: SET_FOOD_SELECTED,
    payload: {
      foodId
    }
  }
}