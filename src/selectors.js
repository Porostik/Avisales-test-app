import { createSelector } from 'reselect';
import { formatTicket, filterTickets, sortTickets } from './services/utils';

const tickets = (state) => state.tickets.tickets;
const isLoaded = (state) => state.tickets.isLoaded;
const transfersFilter = (state) => state.filters.transfers;
const sort = (state) => state.filters.sort;

export const selectFormatTickets = createSelector(
  [tickets, transfersFilter, sort, isLoaded],
  (allTickets, filters, sort, isLoaded) => {
    if (allTickets.length > 0) {
      const filteredTickets = filterTickets(allTickets, filters);
      const sortedTickets = sortTickets(filteredTickets, sort);
      const tickets = sortedTickets.slice(0, 5).map((item) => formatTicket(item));
      return tickets;
    }
  },
);
