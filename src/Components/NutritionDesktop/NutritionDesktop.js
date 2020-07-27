import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Row, Col, Card, Button, Collapse } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class NutritionDesktop extends React.Component {



    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
        this.card = React.createRef();
    }

    state = {
        food: this.props.food,
        tab: 1,
        

    }
    next() {
        this.carousel.next();
    }

    previous() {
        this.carousel.prev();
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
                    <div className="left-arrow">
                        <LeftOutlined onClick={this.previous} />
                    </div>




                   

                        <div className="food-card">
                            <div className="food-card-title">
                                <h4>{foodCard.type}</h4>
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
                        <RightOutlined onClick={this.next} />
                    </div>

                </div>



            </div>
        );
    }


}

export default NutritionDesktop;