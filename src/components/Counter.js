import React, { Component } from 'react'
import './myStyle.css';
 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 0
        }
    }

    increase(){
        this.setState({
            number : this.state.number + 1
        },
        ()=>{
            console.log('Call back value : ' , this.state.number)
        }
        )
        console.log(this.state.number)
    }
    

    render() {
        return (
            <div>
                <h1>Number - {this.state.number}</h1>
                <button className="primary" onClick={()=> this.increase()}>Increase</button>
            </div>
        )
    }
}

export default Counter
