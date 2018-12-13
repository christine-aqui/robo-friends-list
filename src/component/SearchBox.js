import React from 'react';

const SearchBox = ({ searchfield, onSearchChange }) => {
  return (
    <div className='pa2'>
      <input type='search'
      placeholder='Search'
      className='ps3 ba b--green bg-lightest-blue w5'
      onChange={onSearchChange}/>
    </div>
  )
}

export default SearchBox;