import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from '../postList/PostList';
import Pagination from '../pagination/Pagination';
import queryString from 'query-string'
import PostFiltersForm from '../postFiltersForm/PostFiltersForm';
import ProductDetails from '../productDetails/ProductDetails';

Product.propTypes = {

};



function Product(props) {

    const [postList, setPostList] = useState([]);
    const [product, setProduct] = useState(null);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        // title_like: '',
    })


    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?' + paramsString.toString();
                // console.log(requestUrl);
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON });

                const { data, pagination } = responseJSON;

                setPostList(data);
                setPagination(pagination);

            } catch (error) {
                console.log("failed to fetch post list", error.message);
            }
        }

        fetchPostList();
    }, [filters])


    function handlePageChange(newPage) {
        console.log('New page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }
    function handFiltersChange(newFilters) {
        console.log("new filters: ", newFilters);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    }

    function showProductDetails(prod) {
        // console.log(typeof (prod));
        // console.log(prod);
        setProduct(prod);
        // console.log(product.id);
    }

    function showProducts() {
        return (
            <div>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <PostFiltersForm onSubmit={handFiltersChange} />
                    </div>
                </div>
                <PostList
                    posts={postList}
                    clickProduct={showProductDetails}
                />
                <Pagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </div>
        )
    }

    return (

        < div >
            {
                product ? <ProductDetails posts={product} /> : showProducts()
            }
        </div >
    );
}

export default Product;