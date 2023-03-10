export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, items: action.payload };
    case "SEARCH_ITEMS":
      return { ...state, search: action.payload };
    case "TOGGLE_THEME":
      return {...state, darkTheme: !state.darkTheme};
    case "LOADING": return{...state, loading: !state.loading};
    default:
      return state;
  }
};
