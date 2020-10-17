import React from 'react';
import { setFilter, setAllFilters, setSort } from './actions/filters';
import { Sort, TicketsList, TransferFilter } from './components/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets, getId } from './actions/tickets';
import { enableSort, enableFilters } from './services/filtersProps';
import { selectFormatTickets } from './selectors';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  const dispatch = useDispatch();

  const { activeTransfers, activeSort } = useSelector(({ filters }) => ({
    activeTransfers: filters.transfers,
    activeSort: filters.sort,
  }));

  const { searchId, isLoaded } = useSelector(({ tickets }) => ({
    searchId: tickets.searchId,
    isLoaded: tickets.isLoaded,
  }));

  const tickets = useSelector(selectFormatTickets);

  React.useEffect(() => {
    searchId ? dispatch(fetchTickets(searchId)) : dispatch(getId());
  }, [searchId, dispatch]);

  const setFilters = (filterProp) => {
    if (filterProp === 'all') {
      if (activeTransfers.length === enableFilters.length - 1) {
        dispatch(setAllFilters([]));
        return;
      }

      let filersArr = enableFilters.filter((item) => item.prop !== 'all').map((item) => item.prop);
      dispatch(setAllFilters(filersArr));
      return;
    }

    dispatch(setFilter(filterProp));
  };

  const changeSort = (sort) => {
    dispatch(setSort(sort));
  };

  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="main-content">
        <TransferFilter
          enableFilters={enableFilters}
          onSetFilters={setFilters}
          activeTransfers={activeTransfers}
        />
        <div className="content-wrap">
          <Sort enableSort={enableSort} onChangeSort={changeSort} activeSort={activeSort} />
          <TicketsList tickets={tickets} isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  );
}

export default App;
