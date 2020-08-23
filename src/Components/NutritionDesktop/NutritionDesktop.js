import React from 'react';
import ApiContext from '../../ApiContext';
import { Layout, Row, Col, Card, Button, Collapse } from 'antd';

class NutritionDesktop extends React.Component {
    static contextType = ApiContext;


    state = {
        food: this.props.food,
        tab: this.props.choice,
        

    }
   
    setTab = (selectedTab) => {
        this.setState({
            tab: selectedTab
        })
    }




    render() {
        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
        const { Panel } = Collapse;
        const foodCard = this.state.food[this.state.tab]
   
        console.log(this.state.tab)



        const { Content } = Layout;

        const { Meta } = Card;

        
     

        return (
            


                   

                        <div className="food-card">
                        <div className="tab-menu">
                                <Button className="banner-button" onClick={() => this.setTab("0")}>Gently Cooked</Button>
                                <Button className="banner-button" onClick={() => this.setTab("1")}>Kibble</Button>
                                
                                
                            </div>
                             

                            <div className="nutrition-desktop">

                                <div className="nutrition-image-box">
                                    <img
                                        className="food-card-image"
                                        alt="example"
                                        src={foodCard.image} />
                                </div>

                                <div
                                    key={foodCard.id}



                                    className="food-card"

                                >

                                    <div className="food-card-content">
                                        <h5>{foodCard.brand}</h5>
                                        <h6>{foodCard.product}</h6>
                                        <p>{foodCard.description_text}</p>

                                        <h5>What we like</h5>
                                        <p>{foodCard.what_we_like}</p>

                                        <h5>Key Ingredients</h5>
                                        <p>{foodCard.key_ingredients}</p>

                                    </div>

                                    <Collapse defaultActiveKey={['1']} ghost className="nutrition-collapse">
                                        <Panel header="Cost Estimator" key="1">
                                            <p>Estimated cost per month - Puppy: ${foodCard.cost_per_lb * 10}</p>
                                            <p>{activeDoggo}'s estimated cost per month: ${foodCard.cost_per_lb * 70}</p>
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

                                </div>
                            </div>
                        </div>
                    

                 

                
        );
    }


}

export default NutritionDesktop;