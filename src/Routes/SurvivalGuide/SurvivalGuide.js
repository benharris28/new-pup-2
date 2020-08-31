import React from 'react';
import { Link } from 'react-router-dom'
import PrepareHome from '../GuidePages/PrepareHome'
import { Layout, Content, Steps, Button, Avatar, Row, Col} from 'antd';
import { CaretRightOutlined, UserOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'






class SurvivalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }




  render() {
    const { current } = this.state;
    const { Content } = Layout;

    const points = [
      {
        image: <img className="food-image" src={food_image} alt="stock" />,
        step: 'Step 1',
        title: 'Get your home ready for Russell'
      },
      {
        image: <img className="food-image" src={food_image} alt="stock" />,
        step: 'Step 2',
        title: 'Pick up Russell'
      },
      {
        image: <img className="food-image" src={food_image} alt="stock" />,
        step: 'Step 3',
        title: 'Teach Russell a few tricks'
      },
      {
        image: <img className="food-image" src={food_image} alt="stock" />,
        step: 'Step 4',
        title: 'Give Russell his first meal'
      },
      {
        image: <img className="food-image" src={food_image} alt="stock" />,
        step: 'Step 5',
        title: 'Housetrain Russell'
      },



    ]

    return (

      <div>
        <Layout className="white">
          <div className="survival-guide-header">
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },16]}>
                                
                                  

          <Col className="gutter-row" xs={24} sm={24} md={24} lg={24}>
               <div className="survival-guide-header-image">
               <img className="survival-guide-headshot" src={survival_guide_headshot} alt="headshot" />
               
               <div>
                <h5 className="survival-guide-title">Doggo Survival Guide</h5>
                <h4>Your guide to the first 24 hours with pup</h4>

               </div>
               
              </div>   
          </Col>
          </Row>
         
        <div className="grid-container">

       
        <Row justify="space-around" >
        <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide'>
                                    <Button className="survival-guide-header-button selected">Guide Home</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/prepare-home'>
                                    <Button className="survival-guide-header-button">Getting Ready</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/pickup-pup'>
                                    <Button className="survival-guide-header-button">Pick Up Pup</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/pup-home'>
                                    <Button className="survival-guide-header-button">Pup is home!</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/meal-time'>
                                    <Button className="survival-guide-header-button">First meal</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/crate-train'>
                                    <Button className="survival-guide-header-button">House training</Button>
                                </Link>

                            </Col>
       
          
         
                                                       
                                                    
            </Row>
            </div>

          </div>
                   <div className="content-section purple">
                        <div className="checklist-page content">
                            <div className="checklist-page-alert font-white">
                               
                                <h3>Surival Guide Home</h3>
                                <h5>We're going to walk you through everything you'll need to do during your first 24 hours. We'll go step by step and give you only the info you absolutely need</h5>
                            </div>

                        </div>
                    </div>

                    <div className="content-section white">
                    <div className="content-container">
                            <div className="title-wrapper">
                                <h2>Russell's Doggo Shop</h2>
                            </div>
                            <div className="category-section">
                            <div className="title-wrapper">
                                <h2>Subscriptions</h2>
                                <h5>Russell is subscribed to the following products</h5>
                            </div>
                            <div className="product-loop">
                                
                                    <div className="shop-product">
                                        <div role="listitem" className="shop-product-item-container">
                                            <Link to='/checklist'>
                                                <div className="product-item">
                                                    <div className="shop-product-image-box">
                                                        <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                    </div>
                                                    <div className="shop-product-content">
                                                      
                                                        <h4 className="feature-heading">Product 1</h4>
                                                        <p className="newsfeed-item-detail">Details about this product</p>
                                                    </div>
                                                    <div className="shop-product-button-box">
                                                        <Button className="button-cta">
                                                            Product Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                           
                            
                                 
                                    <div className="shop-product">
                                        <div role="listitem" className="shop-product-item-container">
                                            <Link to='/checklist'>
                                                <div className="product-item">
                                                    <div className="shop-product-image-box">
                                                        <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                    </div>
                                                    <div className="shop-product-content">
                                                      
                                                        <h4 className="feature-heading">Product 1</h4>
                                                        <p className="newsfeed-item-detail">Details about this product</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                             
                                    <div className="shop-product">
                                        <div role="listitem" className="shop-product-item-container">
                                            <Link to='/checklist'>
                                                <div className="product-item">
                                                    <div className="shop-product-image-box">
                                                        <img className="shop-product-image" src={dog_wellness_dash} alt="dog running" />
                                                    </div>
                                                    <div className="shop-product-content">
                                                      
                                                        <h4 className="feature-heading">Product 1</h4>
                                                        <p className="newsfeed-item-detail">Details about this product</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                            

                            </div>
                            </div>
                            </div>
                            </div>

   
          
                    <div className="checklist-page content">
                            <div className="checklist-page-section-intro">
                                <h3>Here are the steps</h3>
                                <h5>We broke it down into five easy steps in the order that you'll need to do them to be ready</h5>
                            </div>
                            <div className="nutrition-types-container">
                            
                                <Row
                                    gutter={[40, 24]}
                                >
                                  {points.map(point =>

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                                
                                                {point.image}
                                            <h5 className="survival-guide-step">{point.step}</h5>
                                            <h4>{point.title}</h4>
                                            
                                        </div>
                                    </Col>
                                    )}
                                  </Row>
                            </div>
                        </div>
                    
                        <div className="next-section-button coral">
                    <div>
                            <h4>Are you ready?</h4>
                            <h5>Let's jump right in and get your home ready for pup!</h5>
                        </div>
                        <Link to='/guide/prepare-home'>
                            <Button>
                                Step 1: Prepare your home
                                    </Button>
                        </Link>

                    </div>

          
        </Layout>
      </div>
    );
  }
}

export default SurvivalGuide;