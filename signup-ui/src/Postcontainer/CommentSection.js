import React from 'react'
import axios from 'axios'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
            name: '',
            comment: '',
            post_id: this.props.item.id 
        }}
    
  


        //   componentDidMount() {
            
        //     let commentItem = {...this.state.commentItem}
        //     commentItem.post_id = Number(this.props.match.params.id);
        //     this.setState({commentItem})
        // }

            
    //===========================================
          addComment = (e) => {
            e.preventDefault();
            
            axios
              .post('https://disney-parents.herokuapp.com/comments', {name: this.state.name ,comment: this.state.comment, post_id: this.state.post_id})
              .then(res => {
                console.log(res)
                this.props.getItem()
              })
              .catch(err => {
                console.log(err);
              });
          };
    //==========================================

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

//======================================================================


      editComment = (e) => {
        e.preventDefault();
        const edits = {name: this.state.name ,comment: this.state.comment, post_id: this.state.post_id}

        axios 
        .put('https://disney-parents.herokuapp.com/comments', edits)
        .then( res => {
            this.setState( { name: '' ,comment: '', post_id: this.state.post_id } )
        })
        .catch(err => {console.log("EDIT ERROR")})

      }


    render() {
        
    return (
        <form onSubmit={this.addComment}>

            <input 
            placeholder="Add a name..."
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
            />
            <input 
            placeholder="Add a comment..."
            value={this.state.comment}
            onChange={this.changeHandler}
            name="comment"
            />
            
            <button>Done</button> <button> Edit </button>
        </form>
    )
}
}

export default CommentSection