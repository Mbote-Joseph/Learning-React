import React, { Component } from 'react'

 class Test extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: "Joseph Mbote"
         }
     }
     handleClick(name){
         this.setState({
             name : name
         })
     }
     
    render() {
        return (
            <div>
                <h1> Hello ,{this.state.name}</h1>
                <button onClick={()=>this.handleClick("Joseph Mbote")}>Jose</button>
                <button onClick={()=>this.handleClick("Ali Kiwaka")}>Ali</button>
            </div>
        )
    }
}

export default Test
