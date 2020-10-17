import React from 'react';
import { Sort, TicketsList, TransferFilter } from './components/index';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  return (
    <div className="container">
      <div className="logo">
        <Logo />
      </div>
      <div className="main-content">
        <TransferFilter />
        <div className="content-wrap">
          <Sort />
          <TicketsList />
        </div>
      </div>
    </div>
  );
}

export default App;
