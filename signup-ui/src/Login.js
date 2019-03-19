import React from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import Loggedin from './Loggedin'



class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value });

    signIn = (e) => {
        e.preventDefault();
        axios
        .post('https://disney-parents.herokuapp.com/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            console.log("asds");
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/home')
        })
        .catch(err => {
            console.log("LOGIN ERROR")
        })
    }

    render() {
        return(
            <div>

                
      <div className="signin">
      <Link to='/login' >SIGN IN</Link><p> or </p><Link to='/' >REGISTER</Link>
      </div>

      
      <h1>Disney Parents</h1>

                <p>Login</p>

                <p>Username:</p>
                
                <input 
                type="text"
                value={this.state.username}
                onChange={this.handleChanges}
                name="username"
                />
                <p>Password:</p>
                <input 
                type="text"
                value={this.state.password}
                onChange={this.handleChanges}
                name="password"
                />
                <button onClick={this.signIn}> Sign in </button>

                

            </div>
        )
    }

}

export default Login