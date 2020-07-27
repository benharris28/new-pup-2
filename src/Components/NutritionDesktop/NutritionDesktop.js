import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Row, Col, Card, Button, Collapse } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class NutritionDesktop extends React.Component {



    state = {
        food: this.props.food,
        tab: 1,
        

    }
   
    setFormat = () => {

    }




    render() {
        const { Panel } = Collapse;
        const foodCard = this.state.food[this.state.tab]
        console.log(this.state.title)



        const { Content } = Layout;

        const { Meta } = Card;

        
        console.log(this.state.title)

        return (
            <div className="carousel-container">
                <div className="carousel-intro">
                    <h4>Let's pick a food for Russell</h4>
                    <h5>We've narrowed it down to three options! All are great choices for Russell and appropriate for his age and health status</h5>
                </div>


                <div className="carousel-test">
                    




                   

                        <div className="food-card">
                                <div className="picker">
                                    <Row justify="space-between">
                                        <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("subscription")} className="picker-button" type="primary">{this.state.food[0].type}</Button></Col>
                                        <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("pickup")}className="picker-button" type="primary">{this.state.food[1].type}</Button></Col>
                                    </Row>
                            
                                </div>

                            <div className="nutrition-desktop">

                                <div>
                                    <img
                                        className="food-card-image"
                                        alt="example"
                                        src={foodCard.image} />
                                </div>

                                <Card
                                    key={foodCard.id}



                                    className="food-card"

                                >

                                    <div className="food-card-content">
                                        <h5>{foodCard.brand}</h5>
                                        <p>{foodCard.product}</p>
                                        <p>{foodCard.description_text}</p>

                                        <h5>What we like</h5>
                                        <p>{foodCard.what_we_like}</p>

                                        <h5>Key Ingredients</h5>
                                        <p>{foodCard.key_ingredients}</p>

                                    </div>

                                    <Collapse defaultActiveKey={['1']} ghost className="nutrition-collapse">
                                        <Panel header="Cost Estimator" key="1">
                                            <p>Estimated cost per month - Puppy: ${foodCard.cost_per_lb * 10}</p>
                                            <p>Russell's estimated cost per month: ${foodCard.cost_per_lb * 70}</p>
                                        </Panel>
                                        <Panel header="Nutrition Detail" key="2">
                                            <p>{foodCard.full_ingredients}</p>
                                        </Panel>

                                    </Collapse>

                                    <div className="card_purchase_button">
                                        <a target='_blank' rel="noopener noreferrer" href={`${foodCard.canada_link}`}>
                                            <Button
                                                type="primary">
                                                {foodCard.purchase_text}
                                            </Button>
                                        </a>
                                    </div>

                                </Card>
                            </div>
                        </div>
                    

                    <div className="right-arrow">
                        
                    </div>

                </div>



            </div>
        );
    }


}

export default NutritionDesktop;