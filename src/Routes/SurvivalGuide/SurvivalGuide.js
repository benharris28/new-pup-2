import React from 'react';
import { Link } from 'react-router-dom'
import PrepareHome from '../GuidePages/PrepareHome'
import { Layout, Content, Steps, Button, Avatar, Row, Col} from 'antd';
import { CaretRightOutlined, UserOutlined, HomeOutlined, CarOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'
import dog_trick from '../../Assets/dog_trick.png'
import dog_in_car from '../../Assets/dog_in_car.jpg'
import clean_up from '../../Assets/clean_up.jpg'
import dog_eating from '../../Assets/dog_eating.jpg'
import dog_pee from '../../Assets/dog_pee.png'







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
        image: <img className="guide-item-image" src={clean_up} alt="dog running" />,
        step: 'Step 1',
        title: 'Get your home ready for Russell',
        description: 'Time to hide all those small objects!',
        link: '/guide/prepare-home'
      },
      {
        image: <img className="guide-item-image" src={dog_in_car} alt="stock" />,
        step: 'Step 2',
        title: 'Pick up Russell',
        description: 'The adventure begins!',
        link: '/guide/pickup-pup'

      },
      {
        image: <img className="guide-item-image" src={dog_trick} alt="man giving high five to dog" />,
        step: 'Step 3',
        title: 'Teach Russell a few tricks',
        description: 'It is easier thank you think!',
        link: '/guide/pup-home'
      },
      {
        image: <img className="guide-item-image" src={dog_eating} alt="dog next to food bowl" />,
        step: 'Step 4',
        title: 'Give Russell his first meal',
        description: 'We will lay out an easy feeding schedule and answer all your questions',
        link: '/guide/meal-time'
      },
      {
        image: <img className="guide-item-image" src={dog_pee} alt="dog peeing on fire hydrant" />,
        step: 'Step 5',
        title: 'Housetrain Russell',
        description: 'We will walk you through the easiest way to teach your doggo to pee outside',
        link: '/guide/crate-train'
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
                                <h2>Survival Guide Categories</h2>
                            </div>
                            <div className="category-section">
                         
                            <div className="product-loop">

                                 {points.map(point =>
                                    <div className="guide-item">
                                        <div role="listitem" className="shop-product-item-container">
                                            <Link to='/checklist'>
                                                <div className="guide-list-item">
                                                    <div className="guide-item-image-box">
                                                        {point.image}
                                                    </div>
                                                    <div className="guide-overview-content">
                                                      
                                                        <h4 className="feature-heading">{point.title}</h4>
                                                        <p className="newsfeed-item-detail">{point.description}</p>
                                                    </div>
                                                    <div className="guide-item-button-box">
                                                        <Button className="guide-item-button">
                                                            Start
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                 )}
                           
                            
                                 
                                  
                             

                            </div>
                            </div>
                            </div>
                            </div>

   
          

          
        </Layout>
      </div>
    );
  }
}

export default SurvivalGuide;