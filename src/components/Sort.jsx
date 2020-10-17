import React from 'react';
import classNames from 'class-names';
import PropTypes from 'prop-types';

function Sort({ enableSort, onChangeSort, activeSort }) {
  const onSortClick = (sort) => {
    if (activeSort === sort) {
      onChangeSort(null);
      return;
    }
    onChangeSort(sort);
  };

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
}

Sort.propTypes = {
  enableSort: PropTypes.array,
  onChangeSort: PropTypes.func,
  activeSort: PropTypes.string,
};

export default Sort;
