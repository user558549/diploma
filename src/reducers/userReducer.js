const initialState = {
  id: null,
  login: null,
  role: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "DELETE_USER":
      return { state, ...initialState };
    default:
      return state;
  }
};
