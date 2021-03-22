import React from 'react';
import PropTypes from 'prop-types';
import "./PostList.css"
import { Link } from 'react-router-dom';

PostList.propTypes = {
    posts: PropTypes.array
};

PostList.defaultProps = {
    posts: [],
}

const x = "/Product/";

function PostList(props) {
    const { posts, clickProduct } = props;

    function handleProductDetails(post) {
        if (clickProduct) {
            clickProduct(post);
        }
    }
    return (
        <div className="container">
            <div class="row">
                {posts.map(post => (

                    <div key={post.id} className="post-list col-6">
                        <Link className="" to={x + post.id} onClick={() => handleProductDetails(post)}>
                            <div class=""><img src={post.imageUrl} alt="" /></div>
                            <div class="bg-light" align="center"><p>{post.title}</p></div>
                        </Link>
                    </div>

                ))}
            </div>
        </div >
    );
}


export default PostList;
