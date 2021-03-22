import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css'
ProductDetails.propTypes = {

};

function ProductDetails(props) {
    const { posts } = props;

    return (
        <div className="container">
            <div className="img">
                <div className="title">
                    <h2>{posts.title}</h2>
                    <h4>{posts.author}</h4>
                </div>
                <img src={posts.imageUrl}></img>
            </div>
            {/* {JSON.stringify(posts)} */}
            <div className="text">
                <p>{posts.description}</p>
            </div>

        </div>
    );
}

export default ProductDetails;