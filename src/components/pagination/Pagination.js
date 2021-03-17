import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

Pagination.propTypes = {
    Pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div className="container">
            <div className="btn-group button">
                <button disabled={_page <= 1}
                    onClick={() => handlePageChange(_page - 1)}
                    type="button" className="btn btn-info"
                >Prev</button>

                <button disabled={_page >= totalPages}
                    onClick={() => handlePageChange(_page + 1)}
                    type="button" className="btn btn-info"
                >Next</button>
            </div>
        </div>
    );
}

export default Pagination;