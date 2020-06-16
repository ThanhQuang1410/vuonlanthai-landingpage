import React from "react";
import OwlCarousel from "react-owl-carousel";
class Detail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data : null
        }
    }
    componentDidMount() {
        let self = this;
        fetch('https://lanthai-restapi.herokuapp.com/api/plants/getDetail?slug='+this.props.match.params.slug)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    self.setState({data: data.data,isLoading: false})
                } else {
                    self.setState({isLoading:false})
                }
            });
    }

    renderHeader = () => {
        let {data} = this.state;
        return (
            <div className="site-blocks-cover inner-page overlay" style={{backgroundImage: "url("+"https://drive.google.com/uc?export=view&id="+data.images[0]+")",backgroundPosition:"center"}}
                 data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 text-center" data-aos="fade">
                        <h1 className="text-uppercase">{data.plant}</h1>
                        <span className="caption d-block text-white">{data.description}</span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.isLoading) {
            return <p>Đang tải dữ liệu....</p>
        }
        if (!this.state.data) {
            return <p>Không có dữ liệu về loại cây này</p>
        }
        return (
            <div>
                {this.renderHeader()}
                <div className="slant-1"></div>
                <div className="site-section first-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 blog-content">
                                {
                                    this.state.data.care.map((item, index) => (
                                        <div key={index}>
                                            <h2>{item.title}</h2>
                                            <p>{item.caption}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md-4 sidebar">
                                <OwlCarousel
                                    className="col-md-12 block-13 nav-direction-white"
                                    margin={0}
                                    responsive={{
                                        0: {
                                            items: 1,
                                        }
                                    }}
                                    autoplay={true}
                                >
                                    {
                                        this.state.data.images.map((item,index) => (
                                            // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                            <p key={index}><img src={"https://drive.google.com/uc?export=view&id="+item} alt="Image" className="img-fluid"/></p>
                                        ))
                                    }
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;
