import React, { useContext } from 'react';
import { MyContext } from '../Context';

const Stage2 = () => {
    const context = useContext(MyContext);
  return (
    <>
      <div className='result_wrapper'>
        <h3>The Looser is:</h3>
        <div>
            {context.state.result}
        </div>
      </div>

        <div className='action_button' onClick={() => context.resetGameAgain()}>
            START AGAIN
        </div>
        <div className='action_button btn_2' onClick={() => context.getNewLooser()}>
            GET NEW LOOSER
        </div>
    </>
  );
}

export default Stage2;
