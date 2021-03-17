import React from 'react';
import PropTypes from 'prop-types';

NavbarContent.propTypes = {

};

function NavbarContent(props) {
    return (
        <div>
            <nav class="navbar bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Trang Chủ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Giới Thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tác Phẩm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tác Giả</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Liên Hệ</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default NavbarContent;