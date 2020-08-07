import React from 'react';
import { Link } from 'react-router-dom'
import PrepareHome from '../GuidePages/PrepareHome'
import { Layout, Content, Steps, Button, Avatar, Row, Col} from 'antd';
import { CaretRightOutlined, UserOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'





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
          <div className="survival-guide-banner">

            <div className="survival-guide-banner-image white" />

            <div className="back-to-checklist-button-test">
              <Link to='/checklist'>
                <Button
                  type="primary">
                  Back to Checklist
                </Button>
              </Link>

            </div>

            <div className="survival-guide-banner-title">
              <h5 className="survival-guide-title">Doggo Survival Guide</h5>
              <h1>Your guide to the first 24 hours with pup</h1>

            </div>

          </div>

          <div className="content-section purple">
                        <div className="checklist-page content">
                            <div className="checklist-page-alert font-white">
                               
                                <h3>It's going to be ok!</h3>
                                <h5>We're going to walk you through everything you'll need to do during your first 24 hours. We'll go step by step and give you only the info you absolutely need</h5>
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
                    
                        <div className="next-section-button">
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