import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {
    Link
} from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let self = this;
        fetch('https://lanthai-restapi.herokuapp.com/api/plants')
            .then(response => response.json())
            .then(data => {
                self.setState({data: data.data})
            });
    }

    render() {
        return (
            <div>
                <div className="slide-one-item home-slider owl-carousel">

                    <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(../images/hero_2.jpg)"}}
                         data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 text-center" data-aos="fade">
                                    <h1 className="font-secondary  font-weight-bold text-uppercase">Chào mừng đến Vườn Lan Thái</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url(images/hero_1.jpg)"}}
                         data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 text-center" data-aos="fade">
                                    <h1 className="font-secondary font-weight-bold text-uppercase">Cây giống nhập từ Thái Lan</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "slant-1"/>
                <div className="site-section first-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-12 text-center" data-aos="fade">
                                <span className="caption d-block mb-2 font-secondary font-weight-bold">Dịch vụ xuất sắc</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">Hãy tin tưởng Vườn Lan </h2>
                            </div>
                        </div>
                        <div className="row border-responsive">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="">
                                <div className="text-center">
                        <span
                            className="flaticon-money-bag-with-dollar-symbol display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Giá rẻ nhất thị trường</h3>
                                    <p>Với các dòng hoa phong phú được nhập trực tiếp từ Thái Lan. Chúng tôi cam kết đem đến cho bạn những loại hoa tốt nhất với giá tốt </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 border-right" data-aos="fade-up" data-aos-delay="200">
                                <div className="text-center">
                                    <span className="flaticon-medal display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Chăm sóc khách hàng 24/7</h3>
                                    <p>Với phương châm sự hài lòng của khách hàng là trên hết. Chúng tôi luôn cố gắng đạt được sự hài lòng của bạn với từng khâu</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
                                <div className="text-center">
                                    <span className="flaticon-box display-4 d-block mb-3 text-primary"></span>
                                    <h3 className="text-uppercase h4 mb-3">Cam kết vận chuyển</h3>
                                    <p>Luôn luôn cố gắng đem sản phẩm hoa đến tay bạn nhanh nhất có thể</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-half">
                    <div className="img-bg-1" style={{backgroundImage: "url('images/img_4.jpg')"}} data-aos="fade"></div>
                    <div className="container">
                        <div className="row no-gutters align-items-stretch">
                            <div className="col-lg-5 ml-lg-auto py-5">
                            <span
                                className="caption d-block mb-2 font-secondary font-weight-bold">Dịch vụ Tuyệt vời</span>
                                <h2 className="site-section-heading text-uppercase font-secondary mb-5">Giống hoa chọn lọc</h2>
                                <p>Đảm bảo các mặt cây đều được chọn lọc kĩ lưỡng trước khi chuyển đến tay bạn.</p>

                                <p>Mặt hoa luôn được đảm bảo đẹp xuất sắc.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-half block">
                    <div data-aos="fade" className="img-bg-1 right" id="map"></div>
                    <div className="container">
                        <div className="row no-gutters align-items-stretch">
                            <div className="col-lg-5 mr-lg-auto py-5">
                            <span
                                className="caption d-block mb-2 font-secondary font-weight-bold">NHÀ VƯỜN ĐƯỢC ĐẦU TƯ BÀI BẢN</span>
                                <h2 className="site-section-heading text-uppercase font-secondary mb-5">CÁC LOẠI HOA ĐỀU ĐƯỢC CHĂM SÓC THEO QUY TRÌNH NGHIÊM NGẶT</h2>
                                <p>Bạn có thể đến trực tiếp nhà vườn chúng tôi để có thể thưởng thức và mua các loại mặt hoa</p>

                                <p>Địa chỉ nhà vườn: 62 ngõ 358 Bùi Xương Trạch, Thanh Xuân, Hà Nội</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <span
                                className="caption d-block mb-2 font-secondary font-weight-bold">CÁCH CHĂM SÓC CÂY</span>
                                <h2 className="site-section-heading text-uppercase text-center font-secondary">HÃY ĐỂ VƯỜN LAN THÁI GIÚP BẠN CHĂM SÓC CÂY MỘT CÁC TỐT NHẤT</h2>
                            </div>
                        </div>
                        {
                            this.state.data.length &&
                            <OwlCarousel
                                className="col-md-12 block-13 nav-direction-white"
                                margin={25}
                                responsive={{
                                    0: {
                                        items: 1,
                                    },
                                    600: {
                                        items: 3,
                                    }
                                }}
                            >
                                {this.state.data.map((item, index) => (
                                    <div key={index} className="media-image">
                                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                        <img src={"https://drive.google.com/uc?export=view&id="+item.images[0]} alt="Image" className="card-img-top" style={{
                                            maxHeight: "300px",
                                            objectFit: "cover"
                                        }}/>
                                        <div className="media-image-body">
                                            <h2 className="font-secondary text-uppercase">{item.plant}</h2>
                                            <p>{item.description}</p>
                                            <p>
                                                <Link to={"/chitiet/"+item.slug}>
                                                    <p className="btn btn-primary text-white px-4">Tìm hiểu thêm</p>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        }
                    </div>
                </div>


                <div className="site-section section-counter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Tổng quan về Vườn lan Thái</h2>
                                <p className="mb-5">Những con số biết nói! Hãy để chúng tôi phục vụ bạn. Sự hài lòng của bạn là mục tiêu của chúng tôi</p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="counter">
                                            <span className="caption">Số lượng khách đã mua hàng</span>
                                            <span className="number" data-number="49020">0</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="counter">
                                            <span className="caption">Số loài hoa vườn đang cung cấp</span>
                                            <span className="number" data-number="50">0</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                {/*<div className="site-section block-14 nav-direction-white">*/}

                {/*    <div className="container">*/}

                {/*        <div className="row mb-5">*/}
                {/*            <div className="col-md-12">*/}
                {/*                <h2 className="site-section-heading text-center text-uppercase">Testimonials</h2>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="nonloop-block-14 owl-carousel">*/}


                {/*            <div className="d-block block-testimony mx-auto text-center">*/}
                {/*                <div className="person w-25 mx-auto mb-4">*/}
                {/*                    <img src="images/person_1.jpg" alt="Image"*/}
                {/*                         className="img-fluid rounded-circle w-25 mx-auto"/>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <h2 className="h5 mb-4">Katie Johnson</h2>*/}
                {/*                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias*/}
                {/*                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum*/}
                {/*                        tempora ipsam!&rdquo;</blockquote>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="d-block block-testimony mx-auto text-center">*/}
                {/*                <div className="person w-25 mx-auto mb-4">*/}
                {/*                    <img src="images/person_2.jpg" alt="Image"*/}
                {/*                         className="img-fluid rounded-circle w-25 mx-auto"/>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <h2 className="h5 mb-4">Jun Mars</h2>*/}
                {/*                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias*/}
                {/*                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum*/}
                {/*                        tempora ipsam!&rdquo;</blockquote>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="d-block block-testimony mx-auto text-center">*/}
                {/*                <div className="person w-25 mx-auto mb-4">*/}
                {/*                    <img src="images/person_3.jpg" alt="Image"*/}
                {/*                         className="img-fluid rounded-circle w-25 mx-auto"/>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <h2 className="h5 mb-4">Shane Holmes</h2>*/}
                {/*                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias*/}
                {/*                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum*/}
                {/*                        tempora ipsam!&rdquo;</blockquote>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="d-block block-testimony mx-auto text-center">*/}
                {/*                <div className="person w-25 mx-auto mb-4">*/}
                {/*                    <img src="images/person_4.jpg" alt="Image"*/}
                {/*                         className="img-fluid rounded-circle w-25 mx-auto"/>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <h2 className="h5 mb-4">Mark Johnson</h2>*/}
                {/*                    <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias*/}
                {/*                        accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum*/}
                {/*                        tempora ipsam!&rdquo;</blockquote>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*    </div>*/}

                {/*</div>*/}

                {/*<div className="site-section">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row mb-5">*/}
                {/*            <div className="col-md-12" data-aos="fade">*/}
                {/*                <h2 className="site-section-heading text-center text-uppercase">Recent Blog Posts</h2>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">*/}
                {/*                <div className="media-image">*/}
                {/*                    <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>*/}
                {/*                    <div className="media-image-body">*/}
                {/*                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You*/}
                {/*                            Learn HTML & CSS in 2019?</a></h2>*/}
                {/*                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>*/}
                {/*                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>*/}
                {/*                        <p><a href="#">Read More</a></p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">*/}
                {/*                <div className="media-image">*/}
                {/*                    <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>*/}
                {/*                    <div className="media-image-body">*/}
                {/*                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You*/}
                {/*                            Learn HTML & CSS in 2019?</a></h2>*/}
                {/*                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>*/}
                {/*                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>*/}
                {/*                        <p><a href="#">Read More</a></p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">*/}
                {/*                <div className="media-image">*/}
                {/*                    <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>*/}
                {/*                    <div className="media-image-body">*/}
                {/*                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You*/}
                {/*                            Learn HTML & CSS in 2019?</a></h2>*/}
                {/*                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>*/}
                {/*                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>*/}
                {/*                        <p><a href="#">Read More</a></p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Homepage
