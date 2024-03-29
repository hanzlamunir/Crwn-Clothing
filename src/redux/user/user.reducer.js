const INITIAL_STATE = {
  currrentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log("currentuser", action.payload);
      return {
        ...state,
        currrentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
