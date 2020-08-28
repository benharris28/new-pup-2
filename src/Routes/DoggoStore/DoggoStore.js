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


import { Layout, Button, Row, Col, Collapse, Card, Badge } from 'antd';

class DoggoStore extends React.Component {
    static contextType = ApiContext;

    state = {
        format: '',
        choice: 0
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
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

    setTab = (choice) => {
        this.setState({
            choice: choice
        })
    }

    render() {

        console.log(this.state.food)
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



                    <div className="content-section white">


                        <div className="content-container">
                            <div className="title-wrapper">
                                <h2>Russell's Doggo Shop</h2>
                            </div>
                            <div className="category-section">
                            <div className="title-wrapper">
                                <h2>Subscriptions</h2>
                                <h5>Russell is subscribed to the following products</h5>
                            </div>
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

                            <div className="category-section">
                            <div className="title-wrapper">
                                <h2>Gear</h2>
                                <h5>Here are our recommended products for a medium-size goldendoodle like Russell</h5>
                            </div>
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























                </Layout>
            </div>
        )
    }
}

export default DoggoStore;