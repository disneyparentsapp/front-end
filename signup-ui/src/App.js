import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Loggedin from './Loggedin'
import authenticate from './Authenticate'
import Register from './Register'
import Login from './Login'
import AddCard from './AddCard'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

        postData: [],
        filteredPosts: [],
        searchInput: '',
        
      
    }};

    componentDidMount() {
      this.getItem()
    }



    


    


    addItem = (e, item) => {
      e.preventDefault();
      axios
        .post('https://disney-parents.herokuapp.com/posts', item)
        .then(res => {
          this.setState({
            postData: res.data
          });
          this.getItem()
          this.props.history.push('/home');
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    getItem = () => {
      axios
      .get(`https://disney-parents.herokuapp.com/posts/`, {headers: {authorization: localStorage.getItem('jwt')}})
      .then(res => {
          this.setState({
            postData: res.data
          })
      })
      .catch(err => {
          console.log("MOUNTING ERROR")
          console.log(err)
      })

    }

  render() {
    return (
      <div className="App">
      
      
      <Switch><Route exact path="/" component={Register} exact/></Switch>
      <Switch><Route exact path="/login" component={Login} exact/></Switch>
      <Route exact path="/home" component={props => <Loggedin {...props}  getItem={this.getItem}  postData={this.state.postData} searchInput={this.state.searchInput} filteredPosts={this.state.filteredPosts}/>} exact/>
      <Route exact path="/form" render={props => (<AddCard {...props} addItem={this.addItem} />)} exact/>
      </div>
      
    );
  }
}

export default App
