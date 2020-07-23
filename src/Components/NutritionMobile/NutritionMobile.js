import React from 'react';
import { Link } from 'react-router-dom'
import FoodData from '../../BackupData/FoodData'
import { Layout, Content, Carousel, Row, Col, Card, Button} from 'antd';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';

class NutritionMobile extends React.Component {
    
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }

  state = {
    food: FoodData.food,
    tab: 0

  }
  next() {
    this.carousel.next();
    this.setState({
        tab: this.state.tab + 1
    })
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

        const { Content } = Layout;
        const { food } = this.state;
        const foodOne = food[0];
        const foodTwo = food[1];
        const { Meta } = Card;

    return (
      <div className="carousel-container">
        <div className="carousel-intro">
            <h4>Let's pick a food for Russell</h4>
            <h5>We've narrowed it down to three options! All are great choices for Russell and appropriate for his age and health status</h5>
        </div>
        <div className="carousel-title">
            <Row className="carousel-control">
                <Col flex={2}><LeftOutlined onClick={this.previous} /></Col>
                <Col flex={6}><h4>Fresh-Cooked</h4></Col>
                <Col flex={2}><RightOutlined onClick={this.next} /></Col>
            </Row>
            
            
        </div>

        
        <Carousel className="carousel" ref={node => (this.carousel = node)} {...props}>
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
    );
  }
         
     
}

export default NutritionMobile;