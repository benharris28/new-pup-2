import React from 'react';
import ApiContext from '../../ApiContext';
import { Layout, Row, Col, Card, Button, Collapse } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';


class NutritionDesktop extends React.Component {
    static contextType = ApiContext;


    state = {
        food: this.props.food,
        tab: this.props.choice,
        kibbleClass: "banner-button unselected-button",
        cookedClass: "banner-button"
        

    }
   
    setTab = (choice) => {
        this.setState({
            tab: choice
        }, () => this.setButtons())

    }


   
       
    

    setButtons = () => {
        if (this.state.tab === 0) {
            this.setState({
                kibbleClass: "banner-button unselected-button",
                cookedClass: "banner-button"
            })
        }

        if (this.state.tab === 1) {
            this.setState({
                kibbleClass: "banner-button",
                cookedClass: "banner-button unselected-button"
            })
        }
    }
   




    render() {
        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
        const { Panel } = Collapse;
        const foodCard = this.state.food[this.state.tab]
        
   
        console.log(this.state.tab)
        console.log(this.props.choice)



        const { Content } = Layout;

        const { Meta } = Card;

        
     

        return (
            


                   

                        <div className="food-card light-grey">
                            <div className="tab-menu">
                                <Button className={this.state.cookedClass} onClick={() => this.setTab(0)} type={this.state.cookedType}>Gently Cooked</Button>
                                <Button className={this.state.kibbleClass} onClick={() => this.setTab(1)} type={this.state.kibbleType}>Kibble</Button>
                                
                                
                            </div>

                            <div className="selector-menu">
                                <LeftCircleOutlined className="selector-icon" />
                                <div className="selector-title">

                                {foodCard.type}
                                </div>

                                <RightCircleOutlined className="selector-icon"/>
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