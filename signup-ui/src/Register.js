import React from 'react'
import axios from 'axios'

class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    signIn = (e) => {
        e.preventDefault();
        axios
        .post('https://disney-parents.herokuapp.com/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token);
            // this.props.history.push('/login')
        })
        .catch(err => {
            console.log("REGISTER ERROR")
        })
    }

    render() {
        return(
            <div>

                
                <p>Register</p>

                <p>Username:</p>
                
                <input 
                type="text"
                value={this.state.username}
                onChange={this.handleChanges}
                name='username'
                />
                <p>Password:</p>
                <input 
                type="text"
                value={this.state.password}
                onChange={this.handleChanges}
                name='password'
                />
                <button onClick={this.signIn}> Sign in </button>

            </div>
        )
    }

}

export default Register