import React from 'react';
import ContentLoader from 'react-content-loader';

function TicketLoader() {
  return (
    <div className="tickets-list__item">
      <ContentLoader
        speed={2}
        width={505}
        height={144}
        viewBox="0 0 505 144"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="9" rx="0" ry="0" width="95" height="28" />
        <rect x="344" y="9" rx="0" ry="0" width="98" height="33" />
        <rect x="1" y="65" rx="0" ry="0" width="92" height="11" />
        <rect x="1" y="80" rx="0" ry="0" width="92" height="19" />
        <rect x="0" y="106" rx="0" ry="0" width="92" height="11" />
        <rect x="0" y="121" rx="0" ry="0" width="92" height="19" />
        <rect x="172" y="65" rx="0" ry="0" width="87" height="11" />
        <rect x="172" y="80" rx="0" ry="0" width="87" height="19" />
        <rect x="171" y="106" rx="0" ry="0" width="87" height="11" />
        <rect x="171" y="121" rx="0" ry="0" width="87" height="19" />
        <rect x="327" y="65" rx="0" ry="0" width="127" height="11" />
        <rect x="327" y="80" rx="0" ry="0" width="127" height="19" />
        <rect x="327" y="106" rx="0" ry="0" width="127" height="11" />
        <rect x="326" y="122" rx="0" ry="0" width="127" height="19" />
      </ContentLoader>
    </div>
  );
}

export default TicketLoader;
