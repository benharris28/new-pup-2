import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import NutritionData from '../../BackupData/NutritionData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import NutritionDesktop from '../../Components/NutritionDesktop/NutritionDesktop'
import food_image from '../../Assets/food_image.png'
import { Layout, Content, Button, Row, Col, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Nutrition extends React.Component {
    state = {
        format: '',
        windowSize: '',
        food: NutritionData.categories[0].products
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

    render() {
        const { Content } = Layout;
        console.log(this.state.food)
        const width = window.addEventListener('resize', this.handleResize);
        const fullWidth = global.window.innerWidth;
        console.log(fullWidth)
        console.log(this.state.windowSize)
        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <div className="guide-banner-image dark-yellow" />

                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
                                </Button>
                            </Link>

                        </div>

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h1>Everything you need to know about dog food</h1>

                        </div>

                    </div>
                    <div className="content-section white">


                        <div className="checklist-page content center">
                            <div className="checklist-page-section-intro">
                                <h3>There's more than one way to buy dog food</h3>
                                <h5>Dog food comes in all shapes in sizes. It's not just about a huge bag of dry food anymore...</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                     
                                                <img className="food-image" src={food_image} alt="food stock" />
                                           
                                            <h4>Gently Cooked</h4>
                                            <h5>Human grade ingredients that are cooked, portioned, and flash frozen to stay fresh</h5>
                                        </div>
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />
                                            
                                            <h4>Raw</h4>
                                            <h5>Meat, bone, fruits, and veggies that are ground down and left raw to preserve all nutrient values</h5>
                                        </div>
                    
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />    
                                            <h4>Canned</h4>
                                            <h5>Food is cooked until 70% of the moisture (water) is removed to maintain shelf stability</h5>
                                        </div>
                                    </Col>

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />
                                            <h4>Kibble</h4>
                                            <h5>Food is is cooked until most moisture is removed to maintain shelf-stability</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </div>


                    <div className="content-section green">
                        <div className="checklist-page content center">
                            <div className="checklist-page-section-intro">
                                <h3>What to look for in dog food</h3>
                            </div>

                            <div className="what-to-look-for-container">
                                <Row gutter={[40, 24]}>
                                    <Col className="gutter-row" sm={24} md={12} lg={6}>
                                        <div className="what-to-look-for">
                                            <div className="what-to-look-for-icon">

                                            </div>
                                            <div className="what-to-look-for-content">
                                                <h4>Fresher is better</h4>
                                                <h5>The more food is cooked (processed), the less nutrients are preserved </h5>
                                            </div>

                                        </div>
                                    </Col>

                                    <Col className="gutter-row" sm={24} md={12} lg={6}>
                                        <div className="what-to-look-for">
                                            <div className="what-to-look-for-icon">

                                            </div>
                                            <div className="what-to-look-for-content">
                                                <h4>We prefer "gently cooked" to "raw"</h4>
                                                <h5>While cooking does remove some of the nutrients, our experts prefer gentle cooking to raw where these is some risk of contamination</h5>
                                            </div>

                                        </div>

                                    </Col>

                                    <Col className="gutter-row" sm={24} md={12} lg={6}>
                                        <div className="what-to-look-for">
                                            <div className="what-to-look-for-icon">

                                            </div>
                                            <div className="what-to-look-for-content">
                                                <h4>No artificial flavors or preservatives</h4>
                                                <h5>Chemicals such as Butylated hydroxyanisole and ethoxyquin are no-no's</h5>
                                            </div>

                                        </div>

                                    </Col>

                                    <Col className="gutter-row" sm={24} md={12} lg={6}>
                                        <div className="what-to-look-for">
                                            <div className="what-to-look-for-icon">

                                            </div>
                                            <div className="what-to-look-for-content">
                                                <h4>Animal protein is first or second ingredient</h4>
                                                <h5>Look for whole ingredients and words you recognize!</h5>
                                            </div>

                                        </div>

                                    </Col>

                                </Row>





                            </div>
                            <div className="nutrition-section-outro">
                                <Alert message="Important: some added vitamins and minerals are not only ok, they are essential! Calcium and other essential minerals will usually appear as their compound names. Don't fear if you see items like dicalcium phosphate or zinc glutonate on the ingredient list" type="info" showIcon />
                                
                            </div>

                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <div className="grain-content">
                                        <h4>What's the deal with grain free?</h4>
                                        <h5>Grain free foods are marketed based on debunked food science. Our experts don't recommend grain free foods. Grains are an important part of your dog's diet!</h5>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <img className="food-image" src={food_image} alt="food stock" />
                                </Col>
                            </Row>
                            
                        </div>
                    </div>

                    <div className="content-section yellow">
                        <div className="checklist-page content">
                            <h4>Should I get a food subscription?</h4>
                            <div className="picker">
                                <Row justify="space-between">
                                    <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("subscription")} className="picker-button" type="primary">Subscription</Button></Col>
                                    <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("pickup")} className="picker-button" type="primary">Pick Up</Button></Col>
                                </Row>

                            </div>
                            <div className="format-detail">
                                {this.state.format === "subscription"
                                    ? <h5>Pay a monthly fee and have the food you need delivered to your home</h5>
                                    : <h5>Pickup your pup's food from your local store when you need it</h5>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="content">

                            {fullWidth < 700
                                ? <NutritionMobile food={this.state.food} />
                                : <NutritionDesktop food={this.state.food} />
                            }

                        </div>
                    </div>

                    <div className="next-section-button">
                        <Link to='/vet'>
                            <Button>
                                Up Next: Find a local vet
                                    </Button>
                        </Link>

                    </div>
                    

                </Layout>
            </div>
        )
    }
}

export default Nutrition;