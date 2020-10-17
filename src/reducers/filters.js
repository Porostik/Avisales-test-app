const initialState = {
  transfers: [0, 1, 2, 3],
  sort: 'price',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      let transfers = state.transfers;
      if (transfers.includes(action.payload)) {
        transfers = transfers.filter((item) => item !== action.payload);
      } else {
        transfers = [...transfers, action.payload];
      }

      return {
        ...state,
        transfers: transfers,
      };
    case 'SET_ALL_FILTERS':
      return {
        ...state,
        transfers: action.payload,
      };
    case 'SET_SORT':
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
