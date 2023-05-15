const INITIAL_STATE = {
  user: "",
};

const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export { loginReducer };
