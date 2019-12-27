import React, { Component } from 'react';
import LotteryBall from './LotteryBall.js';
import './LotteryMain.css';

class LotteryMain extends Component {
    static defaultProps = {
        title : "Lottery",
        maxBalls : 6,
        maxNum : 40,
    }
    constructor(props){
        super(props);
        this.state = {
            nums : Array.from({ length: this.props.maxBalls }),
        };
    this.numGen = this.numGen.bind(this);
    }
    //trying to generate an array of numbers -- have to remember that state is
    // not mutable, so need to create new array and return
    //generate an array of numbers
    
    numGen(){
        let nums=[];       
        for(let i=0; i < this.props.maxBalls; i++) {
            nums.push(Math.floor(Math.random() * this.props.maxNum)+1);
        }        
        this.setState({nums : nums});          
    }
    
    render(){
       return(
            <div className="lotteryMain">              
                <h1>{this.props.title}</h1>
                <div className="lotteryBallContainer">{this.state.nums.map((elem,index) => <LotteryBall key={index} num={elem} />)}</div>               
                <button onClick={this.numGen}>New Lottery Numbers!</button>               
            </div>
        )
    }
}


export default LotteryMain;