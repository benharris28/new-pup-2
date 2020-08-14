import React from 'react';
import ApiContext from '../../ApiContext';
import { Layout, Row, Col, Card, Button, Collapse } from 'antd';

class NutritionDesktop extends React.Component {
    static contextType = ApiContext;


    state = {
        food: this.props.food,
        tab: 0,
        

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
        console.log(this.state.title)



        const { Content } = Layout;

        const { Meta } = Card;

        
        console.log(this.state.title)

        return (
            <div className="carousel-container">
                <div className="carousel-intro">
                    <h2>Let's pick a food for {activeDoggo}</h2>
                    <h5>We've narrowed it down to two options! All are great choices for {activeDoggo} and appropriate for his age and health status</h5>
                </div>


                <div className="carousel-test">
                    




                   

                        <div className="food-card">
                                <div className="picker" style={{ marginTop: 0 }}>
                                    <Row justify="space-between">
                                        <Col className="format-picker" span={11}><Button onClick={() => this.setTab("0")} className={this.state.tab == 0 ? "picker-button checked" : "picker-button"} type="primary">Option 1: <h5>{this.state.food[0].type}</h5></Button></Col>
                                        <Col className="format-picker" span={11}><Button onClick={() => this.setTab("1")} className="picker-button" type="primary">Option 2: <h5>{this.state.food[1].type}</h5></Button></Col>
                                    </Row>
                            
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
                    

                 

                </div>



            </div>
        );
    }


}

export default NutritionDesktop;