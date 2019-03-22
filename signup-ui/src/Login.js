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
            <div className="loginPage">
                <img className="disneyIMG"src='https://wallpaperplay.com/walls/full/b/a/7/144244.jpg'/>
                
      <div className="signin">
      <Link to='/login' >SIGN IN</Link><Link to='/' >REGISTER</Link>
      </div>
                

                <div className="loginContainer">
      
        <img className="DisneyLogo" src='https://voxdjs.com/wp-content/uploads/2018/08/disney-logo.png'/>

                
                <h2>Login</h2>

                <p>Username:</p>
                
                <input 
                type="text"
                value={this.state.username}
                onChange={this.handleChanges}
                name="username"
                />


                <p>Password:</p>
                <input 
                type="password"
                value={this.state.password}
                onChange={this.handleChanges}
                name="password"
                />
                <button className="signBTN"  onClick={this.signIn}> Sign in </button>
                
                <Link to='/' >Dont have an account?</Link>
                </div>


            
            </div>
        )
    }

}

export default Login