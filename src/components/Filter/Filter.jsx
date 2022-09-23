import React from 'react';

const Filter = ({ filter, filterState }) => {
  return (
    <>
      <label>
        Find contacts by name{' '}
        <input
          onChange={filterState}
          name="filter"
          type="text"
          value={filter}
        />{' '}
      </label>
    </>
  );
};

export default Filter;
