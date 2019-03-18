import React from 'react';
import Register from './Register'
import { Route } from 'react-router-dom'
import Login from './Login'

const authenticate = App => (Login) =>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state={
                user:'',
                loggedin: false
            }
        }

        componentDidMount(){
            if(localStorage.getItem('user')){
                this.setState({
                    loggedin: true
                })
            } else {this.setState({loggedin:false})
            }
        }

        render() {

                // return <Route path="/login" render={() => <Login/>} />
                return(
                    <div>

                <Route path='/register' render={ props => (
                    <Register {...props} />
                ) } />

                <Route path='/login' render={ props => (
                    <Login {...props} />
                ) } /> 
                </div>
                )
            
        }

    }
    export default authenticate