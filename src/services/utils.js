import moment from 'moment';
import { getCarrierImgUrl } from './urls';
import { TICKETS_DECLINATION } from './constants';
import { sortBy, groupBy, max } from 'lodash';

export const formatTicket = (ticket) => {
  return {
    price: formatPrice(ticket.price),
    logoSrc: getCarrierImg(ticket.carrier),
    segments: formatSegments(ticket.segments),
  };
};

const formatPrice = (price) => {
  price = String(price);
  const thousands = price.slice(0, Math.floor(price.length / 2));
  const hundreds = price.slice(-3);

  return `${thousands} ${hundreds} Р`;
};

const getCarrierImg = (carrierName) => {
  return `${getCarrierImgUrl}${carrierName}.png`;
};

const formatSegments = (segments) => {
  return segments.map((segment) => ({
    countriesCodes: getCountriesCodes(segment.origin, segment.destination),
    arrivalTimePeriod: formatArrivalTime(segment.date, segment.duration),
    flightTime: getTimeInWay(segment.duration),
    stopsCount: formatFilterDeclination(segment.stops.length),
    stops: parseStops(segment.stops),
  }));
};

const getCountriesCodes = (ctr1, ctr2) => {
  return `${ctr1}-${ctr2}`;
};

const formatArrivalTime = (dateTime, minutesInWay) => {
  const startFlight = moment(dateTime).format('HH:mm');
  const endFlight = moment(dateTime).add({ minute: minutesInWay }).format('HH:mm');

  return `${startFlight}-${endFlight}`;
};

const getTimeInWay = (minutes) => {
  const hh = Math.floor(minutes / 60);
  const mm = hh === 0 ? minutes : minutes % 60;

  return `${hh}ч ${mm}м`;
};

const formatFilterDeclination = (ticketsCount) => {
  switch (ticketsCount) {
    case 0:
      return `${TICKETS_DECLINATION[0]}`;
    case 1:
      return `${ticketsCount} ${TICKETS_DECLINATION[1]}`;
    case 2:
      return `${ticketsCount} ${TICKETS_DECLINATION[2]}`;
    case 3:
      return `${ticketsCount} ${TICKETS_DECLINATION[3]}`;
    default:
      return;
  }
};

const parseStops = (stops) => {
  if (stops.length === 0) {
    return ['прямой'];
  }
  return stops.join(',');
};

export const sortTickets = (tickets, sortType) => {
  switch (sortType) {
    case 'price':
      return sortBy(tickets, (item) => item.price);
    case 'speed':
      return sortBy(tickets, (item) => getTotalDuration(item));
    default:
      return;
  }
};

const getTotalDuration = (ticket) => {
  return ticket.segments[0].duration + ticket.segments[1].duration;
};

export const filterTickets = (tickets, activeFilters) => {
  const gropedTickets = groupBy(tickets, (item) => maxStops(item));
  const suitableTickets = activeFilters.map((item) => gropedTickets[item]);
  const filteredTickets = [].concat.apply([], suitableTickets);
  return filteredTickets;
};

const maxStops = (ticket) => {
  const firstSegmentStops = ticket.segments[0].stops.length;
  const secondSegmentStops = ticket.segments[1].stops.length;
  return max([firstSegmentStops, secondSegmentStops]);
};
