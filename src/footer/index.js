import React from "react";

const Footer = (props) => {
    return (
        <footer className="site-footer bg-dark">
            <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                    <p>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer
