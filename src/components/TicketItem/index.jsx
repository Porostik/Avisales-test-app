import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../Segment';

function TicketItem({ price, logoSrc, segments }) {
  return (
    <div className="tickets-list__item">
      <div className="item-head">
        <span className="price">{price}</span>
        <div className="company-logo">
          <img src={logoSrc} alt="" />
        </div>
      </div>
      <div className="flight-info">
        {segments.map((item, index) => (
          <Segment key={`${item}_${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}

TicketItem.propTypes = {
  price: PropTypes.string,
  logoSrc: PropTypes.string,
  segments: PropTypes.array,
};

export default TicketItem;
