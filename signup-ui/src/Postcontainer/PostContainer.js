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
                        <CommentSection />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer