import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             firstname: '',
             lastname: '',
             email: '',
             password: '',
             comment :'',
             gender:'Male'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleFirstnameChange = event => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastnameChange = event => {
        this.setState({
            lastname: event.target.value
        })
    }
    
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit= event=>{
        alert(`${this.state.username} ${this.state.email} ${this.state.password} ${this.state.comment} ${this.state.gender}`)
        event.preventDefault()
    }
    render() {

        //You can destructor the states here as shown.
        
        // const {username,email,password,comment,gender}= this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <div>
                   <label>Username</label>
                   <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                   <label>First name</label>
                   <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange }/>
                </div>
                <div>
                   <label>Last name</label>
                   <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange}/>
                </div>
                <div>
                   <label>Email</label>
                   <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div>
                   <label>Password</label>
                   <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <div>
                   <label>Comment</label>
                   <textarea type="text" value={this.state.comment} onChange={this.handleCommentChange}/>
                </div>
                <div>
                   <label>Gender</label>
                   <select value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </Form>
        )
    }
}

export default Form
