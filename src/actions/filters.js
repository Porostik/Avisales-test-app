export const setFilter = (transfer) => ({
  type: 'SET_FILTER',
  payload: transfer,
});

export const setSort = (sort) => ({
  type: 'SET_SORT',
  payload: sort,
});

export const setAllFilters = (filters) => ({
  type: 'SET_ALL_FILTERS',
  payload: filters,
});
