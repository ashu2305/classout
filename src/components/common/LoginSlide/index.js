import React, {Component} from "react";
import BrandImage from "../../../assets/images/virtur@2x.png";
import SlideOne from "../../../assets/images/slide1@2x.png";
import SlideTwo from "../../../assets/images/slide2@2x.png";
import SlideThree from "../../../assets/images/slide3@2x.png";
import Slider from "react-slick";

class LoginSlide extends Component{
    render() {
        var settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true,
            autoplay:true
        };
        return(
            <section className="slideshow">
                <div className="logo">
                    <img src={BrandImage} alt="virtur" />
                </div>
                <div className="main-slider">
                    <Slider {...settings}>
                        <div>
                            <img src={SlideOne} alt="slide 1" />
                            <div className="caption">
                                <h2>
                                    <strong>I’m a</strong>Dance Teacher
                                </h2>
                                <p>Virtur allows me to collaborate, experiment, and
                                    test much more effectively and efficiently.</p>
                            </div>
                        </div>
                        <div>
                            <img src={SlideTwo} alt="slide 2" />
                            <div className="caption">
                                <h2><strong>I’m a</strong>Dance Teacher</h2>
                                <p>Virtur allows me to collaborate, experiment, and
                                    test much more effectively and efficiently.</p>
                            </div>
                        </div>
                        <div>
                            <img src={SlideThree} alt="slide 3" />
                            <div className="caption">
                                <h2><strong>I’m a</strong>Dance Teacher</h2>
                                <p>Virtur allows me to collaborate, experiment, and
                                    test much more effectively and efficiently.</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default LoginSlide;

