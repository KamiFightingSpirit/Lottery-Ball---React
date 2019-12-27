import React, {Component} from 'react';
import './LotteryBall.css';


class LotteryBall extends Component {
    
    render(){ 
        return(
            <div>
                <div className="lotteryBall">{this.props.num}</div>
            </div>
        )
    }
}


export default LotteryBall;