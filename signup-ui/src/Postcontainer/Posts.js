import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
    state={
        singleComment: {},

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





    //   addComment = (e) => {
    //     e.preventDefault();
    //     axios
    //       .post('https://disney-parents.herokuapp.com/comments', this.state.commentItem)
    //       .then(res => {
    //         console.log(res)
            
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };





     commentLoop = () => {
         
        //  console.log(this.state.singleComment.comments.constructor === Array)
         console.log(this.state.singleComment)
        //  console.log(Object.keys(this.state.singleComment))
         if (this.state.singleComment.comments){
            console.log(this.state.singleComment.comments.constructor === Array)
             console.log("adasd")
         return this.state.singleComment.comments.map(item => {
            return(
            
            <div>
            <p>{item.name}</p>
            <p>{item.comment}</p>
            <button onClick={e => this.deleteComment(e, item.id)} >Delete Comment</button>
            </div>
            )
         })
     }}




    //  deleteComment = (e, id) => {
    //     e.preventDefault();
    //     axios
    //     .delete(`https://disney-parents.herokuapp.com/comments/${id}`)
    //     .then(res => {console.log(res)})
    //     .catch(err => err.data)
    // }



    render() {

        // const comments = this.state.singleComment.comments;
        

    return (
        <div>

            <p>{` Username: ${this.state.singleComment.name}`}</p>
            <p>{` Location: ${this.state.singleComment.location}`}</p>
            <p>{` Number of kids: ${this.state.singleComment.kids}`}</p>
            <p>{` Time: ${this.state.singleComment.timestamp}`}</p>
            {this.commentLoop()}
            {/* {this.state.singleComment.comments ? <button onClick={e => this.deleteComment(e, this.state.singleComment.id)} >Delete Comment</button> : null} */}
            

        </div>
    )
    }

}


export default Posts