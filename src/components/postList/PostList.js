import React from 'react';
import PropTypes from 'prop-types';
import "./PostList.css"

PostList.propTypes = {
    posts: PropTypes.array
};

PostList.defaultProps = {
    posts: [],
}

function PostList(props) {
    const { posts } = props;
    return (
        <div className="container">
            <div class="row">
                {posts.map(post => (
                    <div key={post.id} className="post-list col-6">
                        <div class=""><img src={post.imageUrl} alt="" /></div>
                        <div class="bg-light" align="center"><p>{post.title}</p></div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default PostList;
