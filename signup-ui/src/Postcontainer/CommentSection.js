import React from 'react'
import axios from 'axios'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
    commentItem: {
        comment: '',
        name: '',
        post_id: this.props.item.id }
        }}
    
        changeHandler = event => {
            this.setState({ [event.target.name]: event.target.value });
          }


        //   componentDidMount() {
            
        //     let commentItem = {...this.state.commentItem}
        //     commentItem.post_id = Number(this.props.match.params.id);
        //     this.setState({commentItem})
        // }

            
    //===========================================
          addComment = (e) => {
            e.preventDefault();
            axios
              .post('https://disney-parents.herokuapp.com/comments', this.state.commentItem)
              .then(res => {
                this.setState({
                  postData: res.data
                });
                
              })
              .catch(err => {
                console.log(err);
              });
          };
    //==========================================

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      }


    render() {
    return (
        <form onSubmit={this.addComment}>
            <input 
            placeholder="Add a comment..."
            value={this.state.comment}
            onChange={this.changeHandler}
            name="comment"
            />
            <input 
            placeholder="Add a name..."
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
            />
            <button>Done</button>
        </form>
    )
}
}

export default CommentSection