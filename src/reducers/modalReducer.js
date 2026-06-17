const initialState = {
  isModalState: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MODAL_STATE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
