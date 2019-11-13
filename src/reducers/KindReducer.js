const INITIAL_STATE = {
  kinds: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'give_kinds':
      return { ...state, kinds: action.payload };

    default: return state;
  }
};

