import React from 'react';
import PropTypes from 'prop-types';

function Segment({ countriesCodes, arrivalTimePeriod, flightTime, stopsCount, stops }) {
  return (
    <>
      <div className="info-item">
        <p className="info-item__title">{countriesCodes}</p>
        <p className="title-item__content">{arrivalTimePeriod}</p>
      </div>
      <div className="info-item">
        <p className="info-item__title">в пути</p>
        <p className="title-item__content">{flightTime}</p>
      </div>
      <div className="info-item">
        <p className="info-item__title">{stopsCount}</p>
        <p className="title-item__content">{stops}</p>
      </div>
    </>
  );
}

Segment.protoTypes = {
  countriesCodes: PropTypes.string,
  arrivalTimePeriod: PropTypes.string,
  flightTime: PropTypes.string,
  stopsCount: PropTypes.string,
  stops: PropTypes.string,
};

export default Segment;
