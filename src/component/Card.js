import React from 'react';

const Card = (robot) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <h1>Robo Friends - Hello</h1>
      <img src='https://robohash.org/test?200x200' alt='robots'/>
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
}

export default Card;