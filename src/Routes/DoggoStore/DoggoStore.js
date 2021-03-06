import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import canned_food_square from '../../Assets/canned_food_square.png'
import dog_hero_nutrition from '../../Assets/dog_hero_nutrition.png'
import dog_gear_dash from '../../Assets/dog_gear_dash.png'
import tom_sawyer_square from '../../Assets/tom_sawyer_square.png'
import dog_vet_dash from '../../Assets/dog_vet_dash.png'
import dog_train_dash_background from '../../Assets/dog_train_dash_background.png'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'
import dog_supplement_newsfeed from '../../Assets/dog_supplement_newsfeed.png'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import GearScenesSlider from '../../Components/GearScenesSlider/GearScenesSlider'


import { Layout, Button, Row, Col, Collapse, Card, Checkbox } from 'antd';

class DoggoStore extends React.Component {
    static contextType = ApiContext;

    state = {
        format: '',
        choice: 0,
        windowSize: '',
        dogType: 'Adult'
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        this.handleResize()
    }

    setFormat = (format) => {
        this.setState({
            format: format
        })
    }


    handleResize = () => {
        this.setState({
            windowSize: window.innerWidth
        })
    }

    setDogType = (type) => {
        this.setState({
            dogType: type
        })
    }

    

    render() {

        console.log(this.state)
        const width = window.addEventListener('resize', this.handleResize);
        const fullWidth = global.window.innerWidth;
        console.log(fullWidth)
        console.log(this.state.windowSize)
        const { Panel } = Collapse;

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
        const { Meta } = Card;





        return (
            <div>
                <Layout className="white">

                    <div className="content-section light-grey">
                        <div className="content-container">

                            <div className="title-centre">


                                <h1 className="display-heading">
                                    Doggo Shop
                            </h1>
                                <div className="hero-details">
                                    Everything you need for your best friend - in one place
                        </div>



                            </div>

                        </div>
                    </div>
                    <div className="border white">

                    </div>

                       <div className="content-section light-grey low-padding">


                        <div className="content-container">
                            <div className="filter-title center">
                                Shopping for:
                            </div>
                            <div className="filter-loop">
        
                            <div className={this.state.dogType === "Puppy" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => this.setDogType("Puppy")}>
                                <div className="dog-type-filter-label">
                                    <div class="dog-type-filter-input" type="radio" name="puppy" />

                            
                                    <div className="dog-type-filter-name">Puppy</div>
                                </div>
                            </div>
                            <div className={this.state.dogType === "Adult" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => this.setDogType("Adult")}>
                                <label className="dog-type-filter-label">
                                    <input class="dog-type-filter-input" type="radio" name="puppy" />

                            
                                    <div className="dog-type-filter-name">Adult</div>
                                </label>
                            </div>
                            <div className={this.state.dogType === "Senior" ? "dog-type-filter-card selected" : "dog-type-filter-card"} onClick={() => this.setDogType("Senior")}>
                                <label className="dog-type-filter-label">
                                    <input class="dog-type-filter-input" type="radio" name="puppy" />

                            
                                    <div className="dog-type-filter-name">Senior</div>
                                </label>
                            </div>
 

                            </div>
                          
                            
                        </div>
                        </div>


                    <div className="content-section white">


                        <div className="content-container">
                            <div className="title-center">
                                <h2 className="display-heading">Snapshots</h2>
                                <div className="hero-details">
                                    Stop searching product-by-product. Check out our expert-assembled bundles of everything your doggo will need for each part of their day
                        </div>
                            </div>
                            <div>
                                <GearScenesSlider />
                            </div>
                            </div>
                            </div>
                         

                        
                        <div className="content-section white">


                            <div className="content-container">
                                <div className="title-left">
                                    <h1 className="display-heading">
                                        Full Doggo Store
                            </h1>
                                    <div className="hero-details">
                                        Everything you need for your best friend - in one place
                        </div>
                                </div>
                                { this.state.windowSize < 1000 && 
                                    <div className="category-mobile-filter">
                                        <h3 className="filter-title">All Products</h3>
                                        <div className="mobile-filter-button-container">
                                            <Button
                                                >
                                                Filters
                                            </Button>
                                        </div>
                                    </div>
                                }
                                <div className="filter-container">

                                

                                <div className="shop-container">
                                    { (this.state.windowSize > 1000 || this.state.windowSize === 1000) &&
                                    <div className="category-loop">
                                        <div className="category-item">
                                            Leashes
                            </div>
                                        <div className="category-item">
                                            Collars
                            </div>
                                        <div className="category-item">
                                            Harnesses
                            </div>

                                        <div className="category-item">
                                            Grooming Supplies
                            </div>
                                        <div className="category-item">
                                            Mealtime
                            </div>
                                        <div className="category-item">
                                            Beds and Crates
                            </div>
                                        <div className="category-item">
                                            Toys
                            </div>
                                        <div className="category-item">
                                            Apparel
                            </div>
                                        <div className="category-item">
                                            Everyday essentials
                            </div>
                                    </div>
                                }

                                    <div className="product-loop">

                                        <div className="shop-product">
                                            <div role="listitem" className="shop-product-item-container">
                                                <Link to='/checklist'>
                                                    <div className="product-item">
                                                        <div className="shop-product-image-box">
                                                            <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                        </div>
                                                        <div className="shop-product-content">

                                                            <h4 className="feature-heading">Product 1</h4>
                                                            <p className="newsfeed-item-detail">Details about this product</p>
                                                        </div>
                                                        <div className="shop-product-button-box">
                                                            <Button className="button-cta">
                                                                Product Details
                                                        </Button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>



                                        <div className="shop-product">
                                            <div role="listitem" className="shop-product-item-container">
                                                <Link to='/checklist'>
                                                    <div className="product-item">
                                                        <div className="shop-product-image-box">
                                                            <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                        </div>
                                                        <div className="shop-product-content">

                                                            <h4 className="feature-heading">Product 1</h4>
                                                            <p className="newsfeed-item-detail">Details about this product</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="shop-product">
                                            <div role="listitem" className="shop-product-item-container">
                                                <Link to='/checklist'>
                                                    <div className="product-item">
                                                        <div className="shop-product-image-box">
                                                            <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                        </div>
                                                        <div className="shop-product-content">

                                                            <h4 className="feature-heading">Product 1</h4>
                                                            <p className="newsfeed-item-detail">Details about this product</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                </div>
                            </div>






                        </div>
                   























                </Layout>
            </div>
        )
    }
}

export default DoggoStore;