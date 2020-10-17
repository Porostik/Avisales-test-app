const initialState = {
  tickets: [],
  searchId: null,
  isLoaded: false,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };
    case 'SET_IS_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
