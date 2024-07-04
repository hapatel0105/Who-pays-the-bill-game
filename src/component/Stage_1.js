import React,  { useState, useContext, useRef } from 'react';
import { Button,Form,Alert } from 'react-bootstrap';

import { MyContext } from '../Context';

const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
    const[error,setError] = useState([false,''])

const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if(validate){
        // console.log(value)
        setError([false,'']);
        context.addPlayers(value)
        textInput.current.value = ''
    } else {
        console.log('error')
    }
}
const validateInput = (value) => {
    if(value === ''){
        setError([true,'Sorry you need to write something']);
        return false;
    }
    if(value.length <= 2){
        setError([true,'Sorry you need to write atleast 3 character']);
        return false;
    }
    return true;
}
// const notify = () => toast("Wow so easy !");
console.log(context)

  return (
    <>
      <Form className='mt-4' onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control 
                className='inputtag'
                type='text'
                placeholder='Player Name'
                name="player"
                ref={textInput}
            />
        </Form.Group>
        <div className='mt-4'>
        {
                error[0] ?
                <Alert variant='danger'>
                    {error[1]}
                </Alert>
            :null}
        </div>
            

        <Button className='miami' variant='primary' type='submit'>
            Add Player
        </Button>
        {
            context.state.players && context.state.players.length > 0 ?
            <>
            <hr/>
                <div>
                    <ul className='list-group'>
                        {
                            context.state.players.map((item,idx)=>(
                                <li key={idx} className='list-group-item d-flex justify-content-between 
                                align-item-center list-group-item-action'>
                                    {item}
                                    <span className='badge badge-danger' onClick={() => context.removePlayers(idx)}
                                    >X</span>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='action_button' onClick={() => context.next()}>
                        Next
                    </div>
                </div>
            </>
            :null
        }
      </Form>
        

    </>
  );
}

export default Stage1;
