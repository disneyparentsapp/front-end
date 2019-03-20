import React from 'react'
import CommentSection from '../Postcontainer/CommentSection'
import Posts from '../Postcontainer/Posts'

const PostContainer = (props) => {

    
    

    return (
        <div>
            {props.postData.map((item) => {
                return (
                    <div>
                        <Posts posts={item} />
                        
                        <button onClick={e => props.deleteCard(e, item.id)}> Delete </button>
                        <button> Edit </button>

                        <CommentSection />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer