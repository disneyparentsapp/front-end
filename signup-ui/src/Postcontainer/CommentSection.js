import React from 'react'


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        comment: ''    
        
        }}
    
    

    render() {
    return (
        <form>
            <input 
            placeholder="Add a comment..."
            value={this.state.comment}
            

            />
        </form>
    )
}
}

export default CommentSection