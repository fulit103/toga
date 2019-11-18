import {SET_FOOD_SELECTED} from '../action-types/index';

const reducer = (state, action) => {
  switch(action.type){
    case SET_FOOD_SELECTED:
      return {
        ...state,
        food_selected: state.foods.filter(i => i.id===action.payload.foodId)[0]
      }
    default:
      return state;
  }
};

export default reducer;
