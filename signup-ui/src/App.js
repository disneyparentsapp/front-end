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

    changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
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


    searchHandler = e => {
      this.changeHandler(e)
      this.setState((prevState) => {
        const filteredPostArray = prevState.postData.filter(post => post.location.includes(prevState.searchInput))
        return {filteredPosts: filteredPostArray }
      })
    }



  render() {
    console.log(this.state.postData)
    return (
      <div className="App">
      
      
      <Switch><Route exact path="/" component={Register} exact/></Switch>
      <Switch><Route path="/login" component={Login} exact/></Switch>
      <Route path="/home" component={props => <Loggedin {...props}  searchHandler={this.searchHandler}  getItem={this.getItem}  postData={this.state.postData} searchInput={this.state.searchInput} filteredPosts={this.state.filteredPosts}/>} />
      <Route path="/form" render={props => (<AddCard getItem={this.getItem} {...props} addItem={this.addItem} />)} exact/>
      </div>
      
    );
  }
}

export default App
