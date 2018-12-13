import React from 'react';

const SearchBox = ({ searchfield, onSearchChange }) => {
  return (
    <div className='pa2'>
      <input type='search' 
      placeholder='search list' 
      className='ps3 ba b--green bg-lightest-blue'
      onChange={onSearchChange}/>
      <hr />
    </div>
  )
}

export default SearchBox;