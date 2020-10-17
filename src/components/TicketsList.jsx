import React from 'react';
import TicketItem from './TicketItem';
import TicketLoader from './TicketItem/TicketLoader';
import { fetchTickets, getId } from '../actions/tickets';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormatTickets } from '../selectors';

const TicketsList = React.memo(function () {
  const dispatch = useDispatch();

  const { searchId, isLoaded } = useSelector(({ tickets }) => ({
    searchId: tickets.searchId,
    isLoaded: tickets.isLoaded,
  }));

  const tickets = useSelector(selectFormatTickets);

  React.useEffect(() => {
    searchId ? dispatch(fetchTickets(searchId)) : dispatch(getId());
  }, [searchId, dispatch]);

  return (
    <div className="tickets-list">
      {isLoaded ? (
        tickets.length > 0 ? (
          tickets.map((item, index) => <TicketItem key={`${item}_${index}`} {...item} />)
        ) : (
          <div className="absence-tickets-placard">
            <h1 className="message">По указаным фильтрам билетов не найдено</h1>
          </div>
        )
      ) : (
        Array(5)
          .fill(0)
          .map((_, index) => <TicketLoader key={index} />)
      )}
    </div>
  );
});

export default TicketsList;
