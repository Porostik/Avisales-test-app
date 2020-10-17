import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import { setFilter, setAllFilters } from '../actions/filters';
import { useDispatch, useSelector } from 'react-redux';
import { enableFilters } from '../services/filtersProps';

function TransferFilter() {
  const dispatch = useDispatch();

  const { activeTransfers } = useSelector(({ filters }) => ({
    activeTransfers: filters.transfers,
  }));

  const onFilterClick = React.useCallback((filterProp) => {
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
  });

  return (
    <div className="transfer-filter">
      <h2 className="filter-title">Количество пересадок</h2>
      {enableFilters.map((item, index) => (
        <div
          className={classNames('option-item', {
            active:
              activeTransfers.includes(item.prop) ||
              activeTransfers.length === enableFilters.length - 1,
          })}
          key={`${item}_${index}`}
          onClick={() => onFilterClick(item.prop)}>
          <div className="checkbox">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TransferFilter;
