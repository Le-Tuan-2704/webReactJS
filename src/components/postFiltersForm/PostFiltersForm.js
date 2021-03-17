import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './PostFiltersForm.css'

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 1000);


    }

    return (
        <div className="search">
            <form>
                <div className=" d-flex justify-content-around">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                    <button type="submit" className="btn btn-light"><i class="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    );
}

export default PostFiltersForm;