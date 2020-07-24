import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Row, Col, Card, Button, Collapse } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class NutritionMobile extends React.Component {



    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
        this.card = React.createRef();
    }

    state = {
        food: FoodData.food,
        title: '',
        tab: 0

    }
    next() {
        this.carousel.next();
    }

    previous() {
        this.carousel.prev();
    }




    render() {
        const { Panel } = Collapse;
        const { food } = this.props;
        console.log(this.state.title)


        const props = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const { Content } = Layout;

        const { Meta } = Card;

        const titles = food.map(title => title.product)
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

                    <Carousel className="carousel" ref={node => (this.carousel = node)} {...props}>
                        {food.map(foodCard =>
                            <div className="food-card">
                                <div className="food-card-title">
                                    <h4>{foodCard.type}</h4>
                                </div>
                                
                              
                                
                                <Card
                                    key={foodCard.id}
                                

                                
                                    className="food-card"
                                    cover={<img
                                        className="food-card-image"
                                        alt="example"
                                        src={foodCard.image} />}
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
                        )}
                    </Carousel>
                    <div className="right-arrow">
                        <RightOutlined onClick={this.next} />
                    </div>

                </div>



            </div>
        );
    }


}

export default NutritionMobile;