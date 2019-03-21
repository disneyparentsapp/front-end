import React, { Component } from 'react';
import PostContainer from './Postcontainer/PostContainer'
import SearchBar from './Postcontainer/SearchBar'
import axios from 'axios'
import { Route } from 'react-router-dom'
import AddCard from './AddCard'


class Loggedin extends Component {
  constructor(props) {
     super(props);
    this.state = {

       
      
    };
  }


  
  deleteCard = (e, id) => {
    e.preventDefault();
    axios 
    .delete(`https://disney-parents.herokuapp.com/posts/${id}`)
    .then(res => {
      console.log(res)
      this.props.getItem()
    })
    .catch(err => err.data)
  }




  // changeHandler = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // }



  // searchHandler = e => {
  //   this.changeHandler(e)
  //   this.setState((prevState) => {
  //     const filteredPostArray = prevState.postData.filter(post => post.location.includes(prevState.searchInput))
  //     return {filteredPosts: filteredPostArray }
  //   })
  // }



  forms = e => {
    e.preventDefault()
    {this.props.history.push('/form')}
  }



  render() {

    return (
  <div className="container">
        
        <Route exact path="/form" component={AddCard} exact/>
      <SearchBar searchInput={this.props.searchInput} searchHandler={this.props.searchHandler}/>
      
      <button
      onClick={this.forms}
      > Create </button>


      <PostContainer getItem={this.props.getItem} deleteCard={this.deleteCard} dummyData={this.props.postData}
      postData={this.props.filteredPosts.length > 0 ? this.props.filteredPosts : this.props.postData}
      />

      
      {/* <Route exact path="/form" component={AddCard} exact/> */}

  </div>)
  }
  }

export default Loggedin