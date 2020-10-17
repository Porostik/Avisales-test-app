import axios from 'axios';
import { fetchSearchIdUrl, fetchTicketsUrl } from '../services/urls';

export const getId = () => async (dispatch) => {
  dispatch(setIsLoaded(false));
  try {
    const {
      data: { searchId },
    } = await axios.request(fetchSearchIdUrl);

    dispatch(setSearchId(searchId));
  } catch (error) {
    throw error;
  }
};

export const fetchTickets = (id) => async (dispatch) => {
  try {
    const {
      data: { tickets, stop },
    } = await axios.request(`${fetchTicketsUrl}${id}`);
    dispatch(setTickets(tickets));
    dispatch(setIsLoaded(true));
    if (!stop) dispatch(fetchTickets(id));
  } catch (error) {
    setTimeout(() => {
      dispatch(fetchTickets(id));
    }, 1000);

    throw error;
  }
};

const setTickets = (tickets) => ({
  type: 'SET_TICKETS',
  payload: tickets,
});

const setSearchId = (id) => ({
  type: 'SET_SEARCH_ID',
  payload: id,
});

const setIsLoaded = (isLoaded) => ({
  type: 'SET_IS_LOADED',
  payload: isLoaded,
});
