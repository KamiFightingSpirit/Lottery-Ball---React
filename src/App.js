import React, {Component} from 'react';
import LotteryMain from './Components/LotteryMain.js';
import { waitForElement } from '@testing-library/react';
import "./App.css";


class App extends Component{
  render(){
    return(
      <div className="app">
        <LotteryMain /><br />
        <LotteryMain title={"Weekly Lottery"} maxBalls={4} maxNum={15}/>
      </div>
    )
  }
}

export default App;
