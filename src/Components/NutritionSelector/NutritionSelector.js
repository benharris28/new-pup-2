import React from 'react';
import ApiContext from '../../ApiContext';
import { Layout, Row, Col, Card, Button, Collapse } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import Slider from "react-slick";

class NutritionSelector extends React.Component {
    static contextType = ApiContext;
    
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      
      next() {
        this.slider.slickNext();
  
      }
      previous() {
        this.slider.slickPrev();
      }

    state = {
        food: this.props.food,
        tab: this.props.choice,
        currentItem: this.props.food[0].type,
       
        

    }

    
   
       
    

   




    render() {
        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
        const { Panel } = Collapse;
        const { food } = this.state

        
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 0,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,

            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        };

   
        console.log(this.state.tab)
        console.log(this.props.choice)



        const { Content } = Layout;

        const { Meta } = Card;

        
     

        return (
            


                   

                        <div className="food-card white">
                         
                
                         
                         
                           
                            <Slider ref={c => (this.slider = c)} {...settings}>

                            
                            
                                {food.map(foodCard => 
                            <div className="nutrition-desktop">

                            
                              
                                  
                             
                                <div className="nutrition-selector-container">
                                    <div className="selector-toggle">

                                   
                                <div className="selector-menu">
                                <LeftCircleOutlined className="selector-icon" onClick={this.previous}/>
                                {foodCard.type}
                         <RightCircleOutlined className="selector-icon" onClick={this.next} />
                             
                            
                             

                             
                            </div>

                                <div className="nutrition-image-box">
                                    <img
                                        className="food-card-image"
                                        alt="example"
                                        src={foodCard.image} />
                                </div>
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

                                    <Collapse  ghost className="nutrition-collapse">
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
                            )}
                            </Slider>
                        </div>
                    

                 

                
        );
    }


}

export default NutritionSelector;