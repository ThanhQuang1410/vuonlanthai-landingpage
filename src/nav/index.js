import React from "react";
import {
    Link
} from "react-router-dom";
import logo from "../assests/transparent.png"
const Nav = (props) => {
    return (
        <div>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>


            <div className="site-navbar-wrap js-site-navbar bg-white">

                <div className="container">
                    <div className="site-navbar bg-light">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <h2 className="mb-0 site-logo">
                                    <Link to="/">
                                        <span className="font-weight-bold text-uppercase">
                                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                            <img src={logo} alt="Image" style={{width:"60px",height:"auto"}}/>
                                        </span>
                                    </Link>
                                </h2>
                            </div>
                            <div className="col-10">
                                <nav className="site-navigation text-right" role="navigation">
                                    <div className="container">
                                        <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                            <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                                                <span className="icon-menu h3"/>
                                            </a>
                                        </div>

                                        <ul className="site-menu js-clone-nav d-none d-lg-block">
                                            <li className="active">
                                                <Link to="/">
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li><a href="https://www.facebook.com/vuonlanthai1/" target={"blank"}>liên hệ</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Nav
