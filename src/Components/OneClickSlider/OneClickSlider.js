import React from 'react'
import Slider from "react-slick";
import ruffwear_harness from '../../Assets/ruffwear_harness.png'
import ruffwear_2 from '../../Assets/ruffwear_2.png'
import ruffwear_3 from '../../Assets/ruffwear_3.png'

class OneClickSlider extends React.Component {
    
            render() {
                var settings = {
                  dots: true,
                  infinite: true,
                  speed: 0,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 0,
                
                  responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          initialSlide: 1,
                          infinite: true,
                          dots: true
                        }
                      },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 700,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                };
                return (
                  <div>
                    <div className="slider-title-container">
                        <div className="slider-title focus">
                            Trail
                        </div>
                        <div className="slider-title">
                            Play
                        </div>
                        <div className="slider-title">
                            Home
                        </div>
                    </div>
                    <Slider {...settings}>
                      <div className="slide-container">
                        <img className="slide-image" src={ruffwear_harness} />
                        <div className="show-products">
                            <p>Show products</p>
                        </div>
                      </div>
                      <div className="slide-container">
                      <img className="slide-image" src={ruffwear_2} />
                      <div className="show-products">
                            <p>Show products</p>
                        </div>
                      </div>
                      <div className="slide-container">
                      <img className="slide-image" src={ruffwear_3} />
                      <div className="show-products">
                            <p>Show products</p>
                        </div>
                      </div>
                     
                    </Slider>
                  </div>
                );
              }
            }
   

export default OneClickSlider;