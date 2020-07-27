import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import NutritionData from '../../BackupData/NutritionData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import NutritionDesktop from '../../Components/NutritionDesktop/NutritionDesktop'
import { Layout, Content, Carousel, Card, Button, Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Nutrition extends React.Component {
    state = {
        format: '',
        food: NutritionData.categories[0].products
    }
    
    setFormat = (format) => {
        this.setState({
            format: format
        })
    }
    
    render() {
        const { Content } = Layout;
        console.log(this.state.food)
        const fullWidth = global.window.innerWidth;
        console.log(fullWidth)
        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <div className="guide-banner-image" />

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
                            <h3>The Gear You Need</h3>

                        </div>

                    </div>
                    <div className="nutrition-types">
                        <h4>There's more than one way to buy dog food</h4>
                        <div>
                            <div>
                                <h4>Gently Cooked</h4>
                                <h5>Human grade ingredients that are cooked, portioned, and flash frozen to stay fresh</h5>
                            </div>

                            <div>
                                <h4>Raw</h4>
                                <h5>Meat, bone, and fruits/vegetables that are ground down and left raw to preserve all nutrient values</h5>
                            </div>
                            
                            <div>
                                <h4>Kibble</h4>
                                <h5>Food is is cooked until most moisture is removed to maintain shelf-stability</h5>
                            </div>
                           
                        </div>
                    </div>
                    <div className="nutrition-formats green">
                        <h4>What's the deal with grain free?</h4>
                        <h5>Grain free foods are marketed based on debunked food science. Our experts don't recommend grain free foods. Grains are an important part of your dog's diet!</h5>
                    </div>

                    <div className="nutrition-formats blue">
                       <h4>Should I get a food subscription?</h4>
                        <div className="picker">
                            <Row justify="space-between">
                                <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("subscription")} className="picker-button" type="primary">Subscription</Button></Col>
                                <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("pickup")}className="picker-button" type="primary">Pick Up</Button></Col>
                            </Row>
                    
                        </div>
                        <div className="format-detail">
                            {this.state.format === "subscription"  
                            ? <h5>Pay a monthly fee and have the food you need delivered to your home</h5>
                            : <h5>Pickup your pup's food from your local store when you need it</h5>
                            }
                        </div>
                    </div>
                    
                    {fullWidth < 700 
                        ?  <NutritionMobile food={this.state.food}/> 
                        : <NutritionDesktop food={this.state.food}/>
                    }
                   
                    <div className="next-section-button">
                            <Link to='/vet'>
                                <Button>
                                    Up Next: Find a local vet
                                    </Button>
                            </Link>

                        </div>
                    <Content
                        className="page-content">

                            

                    </Content>

                </Layout>
            </div>
        )
    }
}

export default Nutrition;