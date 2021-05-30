import React from 'react'
import PropTypes from 'prop-type'

function Post({id, title, deletePost}){
    return(
        <div className="Post">
            <button className="Post__delete" onClick={() => deletePost(id)}>X</button>
            <div className="Post__title">
                {title}
            </div>
            <img className="Post__image" src={'https://source.unsplash.com/random?sig=${id}'}/>
        </div>
    );
}

// Post.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.String.isRequired
// }

export default Post;