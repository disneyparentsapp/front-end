import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
    state={
        singleComment: {}
    }

    componentDidMount() {
        this.getSinglePost(this.props.posts.id)
    }

    getSinglePost = (id) => {
        axios
        .get(`https://disney-parents.herokuapp.com/posts/${id}/comments`, {headers: {authorization: localStorage.getItem('jwt')}})
        .then(res => {
            
            this.setState({
              singleComment: res.data
            })
            console.log(typeof res.data)
            console.log(res.data.constructor === Array)
            console.log(res.data)
        })
        .catch(err => {
            console.log("MOUNTING ERROR")
            console.log(err)
        })
  
      }  

     commentLoop = () => {
         
        //  console.log(this.state.singleComment.comments.constructor === Array)
         console.log(this.state.singleComment)
        //  console.log(Object.keys(this.state.singleComment))
         if (this.state.singleComment.comments){
            console.log(this.state.singleComment.comments.constructor === Array)
             console.log("adasd")
         return this.state.singleComment.comments.map(item => {
            return (item.comment) 
               
         })
     }}


    render() {

        // const comments = this.state.singleComment.comments;
        

    return (
        <div>

            <p>{` Username: ${this.state.singleComment.name}`}</p>
            <p>{` Location: ${this.state.singleComment.location}`}</p>
            <p>{` Number of kids: ${this.state.singleComment.kids}`}</p>
            <p>{` Time: ${this.state.singleComment.timestamp}`}</p>
            {this.commentLoop()}
            

        </div>
    )
    }

}


export default Posts