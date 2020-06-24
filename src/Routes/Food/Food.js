import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Card, Button} from 'antd';

class Food extends React.Component {
    state = {
        food: FoodData.food
    }

    onChange = (a,b,c) => {
        console.log(a, b, c);
    }

    render() {
        const { Content } = Layout;
        const { food } = this.state;
        const foodOne = food[0];
        const foodTwo = food[1];

       
        const { Meta } = Card;

        return (
            <div>
                <Layout>
                    <Content
                        style={{ padding: '0 50px' }}
                        className="page-content">
                        
                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button 
                                    type="primary">
                                        Back to checklist
                                </Button>
                            </Link>
                                    
                        </div> 

                        <div>
                            <h1>Let's find the most nutritious food</h1>
                        </div>
                        
                        <div className="page-intro">
                            <h4>
                                Fresh? Raw? Grain Free?
                            </h4>
                            <h5>
                                Our resident veterinary nutritionist says that fresh food is healthiest and easiest to digest. It's also the most expensive. 
                            </h5>
                            <h5>
                                If fresh is beyond your budget, we also have 2 great other options for you!
                            </h5>
                        </div>
                        
                        <div className="food_picker">
                        <h4>Food Selector</h4>
                        <Carousel afterChange={this.onChange}>
                            <div>
                                <Card
                                    hoverable
                                    className="food-card"
                                    cover={<img 
                                        alt="example" 
                                        src={foodOne.image} />}
                                >
                                    <Meta
                                        title={foodOne.product} 
                                        description={foodOne.description_text}> 

                                    </Meta> 
                                    
                                    <div className="card_purchase_button">
                                        <a target='_blank' rel="noopener noreferrer" href={`${foodOne.canada_link}`}>
                                            <Button 
                                                type="primary">
                                                    Buy now
                                            </Button>
                                        </a>
                                    </div> 

                                </Card>
                            </div>
                            <div>
                            <Card
                                    hoverable
                                    className="food-card"
                                    cover={<img 
                                        alt="example" 
                                        src={foodTwo.image} />}
                                >
                                    <Meta
                                        title={foodTwo.product} 
                                        description={foodTwo.description_text}> 

                                    </Meta> 
                                    
                                    <div className="card_purchase_button">
                                        <a target='_blank' rel="noopener noreferrer" href={`${foodOne.canada_link}`}>
                                            <Button 
                                                type="primary">
                                                    Buy now
                                            </Button>
                                        </a>
                                    </div> 

                                </Card>
                            </div>
                            <div>
                            <h3>3</h3>
                            </div>
                            <div>
                            <h3>4</h3>
                            </div>
                        </Carousel>
                        </div>
                        <div className="more-info">
                            <p>Want to learn more about nutrition and it's impact on your pet's health? Click here</p>
                        </div>
                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Food;