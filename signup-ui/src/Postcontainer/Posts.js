import React from 'react'
import axios from 'axios'
import CommentSection from './CommentSection'

class Posts extends React.Component {
    state={

        singleComment: {}, //singlePost
        comments: [],
        commentItem: {
            comment: '',
            name: ''},

            post_id: this.props.posts.id ,

        isUpdating: false

    }

    componentDidMount() {
        this.getSinglePost(this.props.posts.id)
    }





    getSinglePost = (id) => {
        axios
        .get(`https://disney-parents.herokuapp.com/posts/${id}/comments`, {
            headers: {authorization: localStorage.getItem('jwt')}})
        .then(res => {
            
            this.setState({
                singleComment: res.data,
              comments: res.data.comments.map(item => 
                Object.assign({ isUpdating: false }, item))
            })
            // console.log(typeof res.data)
            // console.log(res.data.constructor === Array)
            // console.log(res.data)
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
          commentItem: this.state.comments.find(commentItem => commentItem.id === id),
          isUpdating: true
        });
        console.log(this.state.commentItem)
      };


      updateItem = (e, id) => {
          
          const newObject = {
              post_id: this.state.post_id,
              name: 'MYNAME',
              comment: this.state.commentItem,
          }

          
          e.preventDefault()

        axios
        .put(`https://disney-parents.herokuapp.com/comments/${id}`, newObject)

        .then(res => {
            console.log(res.data)
            this.setState({
                // singleComment: { comments: res.data },
                commentItem: {
                    comment: '',
                    name: '',
                },
                    post_id: this.props.posts.id ,
                    isUpdating: false
            })
            window.location.reload()
            
            console.log()
        })
        .catch(err => console.log(err))

      }

      changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value}) }
      
    //   changeHandlerCommentItem = (e) => {
    //   this.setState({[e.target.name]["comment"]: e.target.value}) }
//============================================================================

     commentLoop = () => {
         
        //  console.log(this.state.singleComment.comments.constructor === Array)
        //  console.log(this.state.singleComment)
        //  console.log(Object.keys(this.state.singleComment))
        //  if (this.state.singleComment.comments){
        //     console.log(this.state.singleComment.comments.constructor === Array)
             
            const { name, id } = this.props.posts;


         return this.state.comments.map(item => {
            return(
            
            <div>
            <p>{name}</p>
            <p>{item.comment}</p>
            <button onClick={e => this.deleteComment(e, item.id)} >Delete Comment</button>
            <button onClick={e => this.populateForm(e, item.id)} >Edit Comment</button>
            {this.state.isUpdating ? <button onClick={(e) => this.updateItem(e, item.id)} >UPDATE</button> : null}
            {this.state.isUpdating ? <input name="commentItem" onChange={this.changeHandler} value={this.state.commentItem.comment}/> : null}
            </div>
            )
         })
     }




     deleteComment = (e, id) => {
        e.preventDefault();
        axios
        .delete(`https://disney-parents.herokuapp.com/comments/${id}`)
        .then(res => {console.log(res)
                this.props.getItem()    })
        .catch(err => err.data)
    }



    render() {

        console.log(this.state.singleComment)

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