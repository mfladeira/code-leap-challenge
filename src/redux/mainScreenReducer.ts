const INITIAL_STATE = {
  title: "",
  content: "",
};

const mainScreenReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "change-title":
      return {
        ...state,
        title: action.title,
      };
    case "change-content":
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

export { mainScreenReducer };
