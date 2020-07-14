import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Card, Button, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
                        //style={{ padding: '0 50px' }}
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
                            <div className="food-expert">
                                <Avatar className="food-avatar" size={64} icon={<UserOutlined />} />
                                <div>
                                    <h5>Meet Jane, vetinary nutritionist</h5>
                                    <p>Nutrition is amongst the most important choice you can make for health and lifespan of your pup. Foods that are fresh and don't contain preservatives / additives tend to be healthiest</p>
                                    <p>I tend to avoid recommending raw food for it's higher risk of contamination</p>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="food_picker">
                        <h4>Jane's Food Recommendations</h4>
                        <p>I have a recommendation for every budget level</p>
                        
                        <Carousel 
                            afterChange={this.onChange}
                            >
                            {food.map(foodCard => 
                            <div>
                                <Card
                                    hoverable
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
                                            <p>Russell's estimated cost per month: ${foodCard.cost_small_dog}</p>
                                        </div> 
                                    
                                    <div className="card_purchase_button">
                                        <a target='_blank' rel="noopener noreferrer" href={`${foodCard.canada_link}`}>
                                            <Button 
                                                type="primary">
                                                    Buy now
                                            </Button>
                                        </a>
                                    </div> 

                                </Card>
                            </div>
                            )}
                            
                        </Carousel>
                        </div>
                        
                        <div className="more-info">
                            <p>Want to learn more about nutrition and it's impact on your pet's health? Click here</p>
                        </div>

                        <div className="next-section-button">
                                <Link to='/vet'>
                                    <Button>
                                        Up Next: Find a local vet
                                    </Button>               
                                </Link>

                            </div>                   

                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Food;