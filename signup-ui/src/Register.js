import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            this.props.history.push('/login')
        })
        .catch(err => {
            console.log("REGISTER ERROR")
        })
    }

    render() {
        return(
            <div className="loginPage">

                {/* <Link to='/login' >SIGN IN</Link><Link to='/' >REGISTER</Link> */}
            
                <img className="disneyIMG"src='https://wallpaperplay.com/walls/full/b/a/7/144244.jpg'/>

                <div className="signin">
      <Link to='/login' >SIGN IN</Link><Link to='/' >REGISTER</Link>
      </div>


      <div className="loginContainer">
      
      <img className="DisneyLogo" src='https://voxdjs.com/wp-content/uploads/2018/08/disney-logo.png'/>

                <h2>Register</h2>

                <p>Create Username:</p>
                
                <input 
                placeholder="Username.."
                type="text"
                value={this.state.username}
                onChange={this.handleChanges}
                name='username'
                />
                <p>Create Password:</p>
                <input 
                placeholder="Password.."
                type="password"
                value={this.state.password}
                onChange={this.handleChanges}
                name='password'
                />
                
                <p>Email:</p>
                <input 
                placeholder="Email.."
                />
                
                <button className="signBTN" onClick={this.signIn}> Register </button>

                <Link to='/login' >Already have an account?</Link>
            </div>
            </div>
        )
    }

}

export default Register