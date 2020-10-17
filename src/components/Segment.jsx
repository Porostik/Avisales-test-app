import React from 'react';

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

export default Segment;
