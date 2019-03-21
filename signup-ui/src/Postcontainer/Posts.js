import React from 'react'
import axios from 'axios'
import CommentSection from './CommentSection'

class Posts extends React.Component {
    state={

        singleComment: {},

        commentItem: {
            comment: '',
            name: '',
            post_id: this.props.posts.id },

        isUpdating: false

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

//======================================================================




      populateForm = (e, id) => {
        e.preventDefault();
        this.setState({
          commentItem: this.state.singleComment.comments.find(commentItem => commentItem.id === id),
          isUpdating: true
        });
        console.log(this.state.commentItem)
      };


      updateItem = () => {
        axios
        .put(`https://disney-parents.herokuapp.com/comments/${this.state.post_id}`, this.state.commentItem)
        .then(res => {
            this.setState({
                singleComment: {comments: res.data},
                commentItem: {
                    comment: '',
                    name: '',
                    post_id: this.props.posts.id },
                    isUpdating: false
            })
        })
        .catch(err => console.log("UPDATE_ERROR"))

      }

      ChangeHandler = (e) => {
      this.setState({[e.target.value]: e.target.name}) }

//============================================================================

     commentLoop = () => {
         
        //  console.log(this.state.singleComment.comments.constructor === Array)
         console.log(this.state.singleComment)
        //  console.log(Object.keys(this.state.singleComment))
         if (this.state.singleComment.comments){
            console.log(this.state.singleComment.comments.constructor === Array)
             
         return this.state.singleComment.comments.map(item => {
            return(
            
            <div>
            <p>{item.name}</p>
            <p>{item.comment}</p>
            <button onClick={e => this.deleteComment(e, item.id)} >Delete Comment</button>
            <button onClick={e => this.populateForm(e, item.id)} >Edit Comment</button>
            {this.state.isUpdating ? <button onClick={(e) => this.updateItem()} >UPDATE</button> : null}
            {this.state.isUpdating ? <input name="commentItem" onChange={this.ChangeHandler} value={this.state.commentItem.comment}/> : null}
            </div>
            )
         })
     }}




     deleteComment = (e, id) => {
        e.preventDefault();
        axios
        .delete(`https://disney-parents.herokuapp.com/comments/${id}`)
        .then(res => {console.log(res)
                this.props.getItem()    })
        .catch(err => err.data)
    }



    render() {

        const comments = this.state.singleComment.comments;
        console.log(comments)

    return (
        <div>

            <p>{` Username: ${this.state.singleComment.name}`}</p>
            <p>{` Location: ${this.state.singleComment.location}`}</p>
            <p>{` Number of kids: ${this.state.singleComment.kids}`}</p>
            <p>{` Time: ${this.state.singleComment.timestamp}`}</p>
            {this.commentLoop()}
            
            <CommentSection getItem={this.props.getItem} item={this.props.posts} commentItem={this.state.commentItem}  
            isUpdating={this.state.isUpdating}/>
        </div>
    )
    }

}


export default Posts