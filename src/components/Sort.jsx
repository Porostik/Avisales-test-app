import React from 'react';
import classNames from 'class-names';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { enableSort } from '../services/filtersProps.js';
import { setSort } from '../actions/filters';

const Sort = React.memo(function () {
  const dispatch = useDispatch();

  const { activeSort } = useSelector(({ filters }) => ({
    activeSort: filters.sort,
  }));

  const onSortClick = React.useCallback((sort) => {
    dispatch(setSort(sort));
  });

  return (
    <div className="sort">
      {enableSort.map((item, index) => (
        <div
          className={classNames('sort__item', { active: activeSort === item.prop })}
          key={`${item}_${index}`}
          onClick={() => onSortClick(item.prop)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});

Sort.propTypes = {
  enableSort: PropTypes.array,
  onChangeSort: PropTypes.func,
  activeSort: PropTypes.string,
};

export default Sort;
