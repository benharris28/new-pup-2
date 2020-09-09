import React from 'react'
import Slider from "react-slick";
import ruffwear_harness from '../../Assets/ruffwear_harness.png'
import ruffwear_2 from '../../Assets/ruffwear_2.png'
import ruffwear_3 from '../../Assets/ruffwear_3.png'
import { Link } from 'react-router-dom'
import harness_example from '../../Assets/harness_example.png'
import leash_example from '../../Assets/leash_example.png'
import collar_example from '../../Assets/collar_example.png'
import ruffwear_walking_scene from '../../Assets/ruffwear_walking_scene.png'

class GearSceneSlider extends React.Component {
    state = {
        selectedGroup: 1,
        tilesOpen: false,
        slideIndex: 0,
        updateCount: 0,
        currentSlide: ''
    }


    showProducts = (category) => {
        this.setState({
            selectedGroup: category,
            tilesOpen: true
        })

       
    }

    hideProducts = (category) => {
        this.setState({
          
            tilesOpen: false
        })

       
    }

    updateSlide = (value) => {
        this.setState({
            currentSlide: value
        })
    }

    handleOpenTiles = () => {
        const { tilesOpen } = this.state
        if (tilesOpen === false) {
            return (
                <div>
                    Show Products
                </div>
            )
        }

        if (tilesOpen === true) {
            return (
                <div>
                    Hide Products
                </div>
            )
        }
    }

    render() {

        const { tilesOpen, currentSlide } = this.state;
        

        var settings = {
            dots: true,
            infinite: true,
            speed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            afterChange: () =>
            this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
        

            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
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
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        };

        const allProducts = [
            {
                product_group: 1,
                product_group_image: <img className="slide-image" src={ruffwear_walking_scene} />,
                products:
                [
                    {
                        id: 1,
                        thumbnail: <img className="product-thumbnail" src={harness_example} alt="dog harness" />,
                        product_title: 'Front Range Dog Harness',
                        product_price: '$39.95',
                        link: 'https://ruffwear.com/products/front-range-everyday-dog-harness?utm_source=stamped&utm_medium=organic&utm_campaign=widget&utm_content=WidgetInstagramFeed'
                    },
                    {
                        id: 2,
                        thumbnail: <img className="product-thumbnail" src={collar_example} alt="dog collar" />,
                        product_title: 'Front Range Dog Collar',
                        product_price: '$14.95',
                        link: '/checklist'
                    },
                    {
                        id: 3,
                        thumbnail: <img className="product-thumbnail" src={leash_example} alt="dog leash" />,
                        product_title: 'Front Range Dog Leash',
                        product_price: '$19.95',
                        link: '/checklist'
                    }

                ]
            },
            {
                product_group: 2,
                product_group_image: <img className="slide-image" src={ruffwear_2} />,
                products:
                [
                    {
                        id: 4,
                        thumbnail: <img className="product-thumbnail" src={harness_example} alt="dog harness" />,
                        product_title: 'Front Range Dog Harness 2',
                        product_price: '$39.95',
                        link: 'https://ruffwear.com/products/front-range-everyday-dog-harness?utm_source=stamped&utm_medium=organic&utm_campaign=widget&utm_content=WidgetInstagramFeed'
                    },
                    {
                        id: 5,
                        thumbnail: <img className="product-thumbnail" src={collar_example} alt="dog collar" />,
                        product_title: 'Front Range Dog Collar 2',
                        product_price: '$14.95',
                        link: '/checklist'
                    },
                    {
                        id: 6,
                        thumbnail: <img className="product-thumbnail" src={leash_example} alt="dog leash" />,
                        product_title: 'Front Range Dog Leash 2',
                        product_price: '$19.95',
                        link: '/checklist'
                    }

                ]
            },
            {
                product_group: 3,
                product_group_image: <img className="slide-image" src={ruffwear_3} />,
                products:
                [
                    {
                        id: 7,
                        thumbnail: <img className="product-thumbnail" src={harness_example} alt="dog harness" />,
                        product_title: 'Front Range Dog Harness 2',
                        product_price: '$39.95',
                        link: 'https://ruffwear.com/products/front-range-everyday-dog-harness?utm_source=stamped&utm_medium=organic&utm_campaign=widget&utm_content=WidgetInstagramFeed'
                    },
                    {
                        id: 8,
                        thumbnail: <img className="product-thumbnail" src={collar_example} alt="dog collar" />,
                        product_title: 'Front Range Dog Collar 2',
                        product_price: '$14.95',
                        link: '/checklist'
                    },
                    {
                        id: 9,
                        thumbnail: <img className="product-thumbnail" src={leash_example} alt="dog leash" />,
                        product_title: 'Front Range Dog Leash 2',
                        product_price: '$19.95',
                        link: '/checklist'
                    }

                ]
            },

            
        ];

        console.log(allProducts)

        const selectedProductGroup = allProducts.filter(product => product.product_group == this.state.selectedGroup)
        const selectedProducts = selectedProductGroup[0].products
        console.log(selectedProducts)
        console.log(this.state.currentSlide)
        

       


        return (
            <div>
                <div className="slider-container">
                    <div className="slider-title-container">
                        <div className={currentSlide === 0 ? "slider-title focus" : "slider-title"} onClick={() => this.slider.slickGoTo(0)}>
                            Walk
                        </div>
                        <div className={currentSlide === 1 ? "slider-title focus" : "slider-title"} onClick={() => this.slider.slickGoTo(1)}>
                            Play
                        </div>
                        <div className={currentSlide === 2 ? "slider-title focus" : "slider-title"} onClick={() => this.slider.slickGoTo(2)}>
                            Home
                        </div>
                        <div className={currentSlide === 3 ? "slider-title focus" : "slider-title"} onClick={() => this.slider.slickGoTo(3)}>
                            Mealtime
                        </div>
                    </div>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {allProducts.map(category => 
                        <div className="slide-container">
                           {category.product_group_image}
                            {this.state.tilesOpen === false &&
                            <div
                                className="show-products"
                                onClick={() => this.showProducts(`${category.product_group}`)}>
                                <p>Show products</p>
                            </div>
                            }
                            {this.state.tilesOpen &&
                            <div
                            className="show-products"
                            onClick={() => this.hideProducts()}>
                            <p>Hide products</p>
                            </div>
                            
                            }
                        </div>
                        )}
                       
                      

                    </Slider>
                </div>

                {this.state.tilesOpen &&
                <div className="one-click-product-container">
                    
                    <div className="product-loop">
                    {selectedProducts.map(product =>
                        <div className="product-tile">
                            <Link to='/checklist'>
                                <div className="product-tile-container">
                                    <div className="product-tile-image-box">
                                        {product.thumbnail}
                                    </div>
                                    <div className="product-tile-content">
                                        <h6 className="product-tile-title">{product.product_title}</h6>
                                        <p className="product-tile-price">{product.product_price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                         )}
                        </div>
                   
                    </div>
                }
                      
                    </div>
               
           
        );
    }
}


export default GearSceneSlider;