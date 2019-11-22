import {SET_FOOD_SELECTED,SET_SHOPPING_CART} from '../action-types/index';

const reducer = (state, action) => {
  switch(action.type){
    case SET_FOOD_SELECTED:
      return {
        ...state,
        food_selected: state.foods.filter(i => i.id===action.payload.foodId)[0]
      }
    case SET_SHOPPING_CART:
      return {
        ...state,
        shopping_cart: state.foods.filter(i => i.id===action.payload.foodId)[0].ingredientes
      }
    default:
      return state;
  }
};

export default reducer;
