import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { MyContext } from './Context';
import Stage1 from './component/Stage_1';
import Stage2 from './component/Stage_2';

class App extends Component {

  static contextType = MyContext;

  render(){
    return (
      <div className='wrapper'>
        <div className='center-wrapper'>
          <h1>
            Who is paying billl???
            </h1>
            {
              this.context.state.stage === 1 ?
              <Stage1/>
              :
              <Stage2/>
            }
        </div>
      </div>
    );
  }
  
}

export default App;
