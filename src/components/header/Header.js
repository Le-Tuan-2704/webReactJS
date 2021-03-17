import React from 'react'
import './Header.css'

function Header() {
    return (
        <div class="header">
            <div class="container-fluid bg-primary first">
                <div class="container d-flex ">
                    <nav class="navbar navbar-expand-sm mr-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white"><i class="far fa-comment"></i> 0969.63.2018</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white"><i class="far fa-envelope"></i> sale@bigweb.com.vn</a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="navbar navbar-expand-sm">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Giới thiệu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Email doanh nghiệp</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Khách hàng</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Kiến thức</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="container-fluid second">
                <div class="container d-flex justify-content-around">
                    <nav class="navbar navbar-expand-sm navbar-light ">
                        <ul class="navbar-nav ">
                            <li class="nav-item active"><a class="nav-link" href="#" title="">Trang chủ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" title="">Thiết kế web</a></li>
                            <li class="navbar-nav"><a class="nav-link" href="#" title="">Quảng cáo Google</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" title="">Dịch vụ SEO</a></li>
                            <li class="nav-item"><a class="nav-link" href="#" title="">Digital Marketing</a></li>
                            <li class="nav-item"><a class="nav-link" href="" title="">Hosting</a></li>
                            <li class="nav-item"><a class="nav-link" href="" title="">Tên miền</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;