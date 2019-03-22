import React from 'react'
import CommentSection from '../Postcontainer/CommentSection'
import Posts from '../Postcontainer/Posts'

const PostContainer = (props) => {

    
    

    return (
        <div >
            {props.postData.map((item) => {
                return (
                    <div className="SinglePost">
                        <Posts getItem={props.getItem} posts={item} />
                        
                        <button className="DELETE1" onClick={e => props.deleteCard(e, item.id)}> Delete Post</button>
                        

                        
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer