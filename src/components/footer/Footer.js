import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css'
Footer.propTypes = {

};

function Footer(props) {
    return (
        <div>
            <div class="container-last-last">
                <div class="container-last-last-1">
                    <img src="https://nhanlucnganhluat.vn/uploads/images/9B3F3AB8/logo/2018-11/t%E1%BA%A3i%20xu%E1%BB%91ng.png" alt="" />
                </div>
                <div class="container-last-last-2">
                    <a>
                        <p>Home</p>
                    </a>
                    <a>
                        <p>Man</p>
                    </a>
                    <a>
                        <p>Woman</p>
                    </a>
                    <a>
                        <p>Popular</p>
                    </a>
                    <a>
                        <p>About</p>
                    </a>
                    <a>
                        <p>Blog</p>
                    </a>
                </div>
                <div class="container-last-last-2">
                    <a>
                        <p>Support</p>
                    </a>
                    <a>
                        <p>Advertisement</p>
                    </a>
                    <a>
                        <p>Online Shop</p>
                    </a>
                </div>
                <div class="container-last-last-3">
                    <div>
                        <p>Sign up for news and events</p>
                    </div>
                    <form>
                        <div class="sign">
                            <div class="inputs">
                                <input type="text" name="" id="" placeholder="Your email address" />
                            </div>
                            <div>
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                    <div class="link-icon">
                        <div><a href=""><i class="fab fa-twitter"></i></a></div>
                        <div><a href=""><i class="fab fa-facebook-f"></i></a></div>
                        <div><a href=""><i class="fab fa-google-plus-g"></i></a></div>
                        <div><a href=""><i class="far fa-user-circle"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;