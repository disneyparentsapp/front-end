import React from 'react'


const Posts = (props) => {

    return (
        <div>

            <p>{` Username: ${props.posts.name}`}</p>
            <p>{` Location: ${props.posts.location}`}</p>
            <p>{` Number of kids: ${props.posts.kids}`}</p>
            <p>{` Time: ${props.posts.timestamp}`}</p>


        </div>
    )


}

export default Posts