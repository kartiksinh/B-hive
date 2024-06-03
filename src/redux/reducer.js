import spacesData from "../data/data.json";

const initialState = {
  workingSpaces: spacesData,
};

const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ITEM:
    //   return {
    //     ...state,
    //     numOfItems: state.numOfItems + 1,
    //   };
    // case DELETE_ITEM:
    //   return {
    //     ...state,
    //     numOfItems: state.numOfItems - 1,
    //   };
    default:
      return state;
  }
};

export default spaceReducer;
