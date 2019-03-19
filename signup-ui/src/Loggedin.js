import React, { Component } from 'react';
import PostContainer from './Postcontainer/PostContainer'
import SearchBar from './Postcontainer/SearchBar'
import axios from 'axios'


class Loggedin extends Component {
  constructor(props) {
    super(props);
    this.state = {

        postData: [],
        filteredPosts: [],
        searchInput: ''
      
    };
  }

  

  componentDidMount() {
    axios
    .get('https://disney-parents.herokuapp.com/posts', {headers: {authorization: localStorage.getItem('jwt')}})
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

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
}

searchHandler = e => {
  this.changeHandler(e)
  this.setState((prevState) => {
    const filteredPostArray = prevState.postData.filter(post => post.location.includes(prevState.searchInput))
    return {filteredPosts: filteredPostArray }
  })
}



render() {

  return (
<div className="container">
      
    
    <SearchBar searchInput={this.state.searchInput} searchHandler={this.searchHandler}/>
    <PostContainer dummyData={this.state.postData}
    postData={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.postData}
    />

</div>)
}
}

export default Loggedin