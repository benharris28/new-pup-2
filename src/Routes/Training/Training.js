import React from 'react';
import { Link } from 'react-router-dom'
import Trainers from '../../BackupData/Trainers'
import ApiContext from '../../ApiContext';
import MarkCompleteStandAlone from '../../Components/MarkCompleteStandAlone/MarkCompleteStandAlone'
import stock_image from '../../Assets/stock_image.png';
import { Layout, Content, Button, Alert, Card, Avatar, Row, Col } from 'antd';
import { UserOutlined, ExclamationCircleOutlined, CalendarOutlined } from '@ant-design/icons';


class Training extends React.Component {

    static contextType = ApiContext;

    state = {
        trainers: Trainers.trainers
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { Content } = Layout;
        const { trainers } = this.state;

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        const points = [
            {
                number: 1,
                title: 'Accept handling from humans, groomers, and vets'
            },
            {
                number: 2,
                title: 'Prevent fear, anxiety, and depression'
            },
            {
                number: 3,
                title: 'Practice being left alone / housetrained'
            },
            {
                number: 4,
                title: 'Learn how to play appropriately with other dogs'
            },



        ]

        return (
            <div>
                  <div className="hero light-purple">
                      
                      <div className="container">
                          <div className="selections">
                              Step 4
                          </div>
                          <div className="title-centre">
                              <h1 className="display-heading">
                                  Puppy Class for {activeDoggo}!
                              </h1>
                              <div className="hero-details">
                              This list is customized for {activeDoggo}. This is everything they will need. As long as you have an item from each category, you'll be ready. 
                          </div>
  
  
                          </div>
  
                      </div>
                      <div className="time-tracker-container">
                          <div className="checklist-icon-box">
                              <CalendarOutlined className="checklist-icon font-white" />
                          </div>
                          <div className="time-tracker">
                              <h5 className="font-black">Experts recommend completing socialization before {activeDoggo} is 12 weeks old <span className="complete-by-date">({completeByDates.training})</span></h5>
                          </div>
                      </div>
                      </div>
                
                <Layout>


                    <div className="content-section white">
                        <div className="content-container">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                        <h2>Let's socialize your doggo!</h2>
                                        <h5>It's a scary world for new puppies - loud noises, lots of humans, vet visits, and other dogs! Puppy classes are extremely important to prepare your dog for this crazy world!</h5>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <img className="stock-image" src={stock_image} alt="stock" />
                                </Col>
                            </Row>

                        </div>
                    </div>


              
                    <div className="content-section white font-white center">
                        <div className="content-container">

                    <div className="title-centre">
                                <h1 className="display-heading">Do I really need puppy classes?</h1>
                               
                            </div>
                        
                
                            <div className="grid-container">
                         
                            <Row style={{ marginBottom: 20}}>
                                
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    1
                                </div>
                                <div className="checklist-step-content">
                                    <h4>Go through each section</h4>
                                    <p>We break down puppyhood into 5 easy sections</p>
                                </div>
                                </div>
                                
                                </Col>
                         
                                
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    2
                                </div>
                                <div className="checklist-step-content">
                                <h4>Pay attention to dates</h4>
                                <p>We'll tell you when to complete each section by to make sure you're ready</p>
                                </div>
                                </div>
                                
                                </Col>
                       
                        
                                
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    3
                                </div>
                                <div className="checklist-step-content">
                                    <h4>Don't forget the guide</h4>
                                    <p>The last step is a complete guide to your first 24 hours with pup</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            
                            
                        </div>
                        </div>
                    </div>


                    <div className="content-section white">


                        <div className="checklist-page content">
                            <div className="checklist-page-section-intro">
                                <h2>Do I really need puppy classes?</h2>
                                <h5>Yes! Puppy classes teach new pups vital skills to help them adapt and develop</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >
                                    {points.map(point =>

                                        <Col
                                            className="gutter-row" xs={24} sm={24} md={12} lg={12}>

                                            <Row>
                                                <Col style={{ maxWidth: 30 }} className="gutter-row" xs={12} sm={12} md={12} lg={12}>
                                                    <div className="survival-guide-steps">
                                                        {point.number}
                                                    </div>
                                                </Col>
                                                <Col style={{ width: 200 }} className="gutter-row" xs={12} sm={12} md={12} lg={12}>
                                                    <div>
                                                        <h5>{point.title}</h5>
                                                    </div>
                                                </Col>
                                            </Row>






                                        </Col>
                                    )}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="checklist-page content center">
                            <div className="trainer-container">
                                <h2>Here are some recommended puppy classes near you</h2>
                                <Row className="gear-row"
                                    style={{ margin: 0 }}
                                    gutter={[16, 24]}
                                    justify="space-around"
                                >





                                    {trainers.map(trainer =>
                                        <Col
                                            className="gutter-row" xs={24} sm={24} md={12} lg={12}
                                            style={{ margin: 0 }}>
                                            <Card className="trainer-card" key={trainer.trainer_id} type="inner" title={trainer.name} >
                                                <div className="trainer-card-content">
                                                    <p>{trainer.blurb}</p>
                                                    <p>{trainer.address}</p>
                                                </div>
                                                <div className="trainer-card-button-container">
                                                    <a target='_blank' rel="noopener noreferrer" href={`${trainer.link}`}>
                                                        <Button>
                                                            Go to site
                                                </Button>
                                                    </a>
                                                </div>

                                            </Card>
                                        </Col>
                                    )}
                                </Row>
                            </div>



                        </div>
                    </div>
                    <div className="next-section-button dark-purple">
                        <div className="next-section-button-content">
                            <h4 className="font-white">You're doing awesome!</h4>
                            <h5 className="font-white">Picked your puppy class? Let's keep this momentum going!</h5>
                            <Link to='/guide'>
                                <Button>
                                    Up Next: 24 Hour Guide
                                    </Button>
                            </Link>
                        </div>


                    </div>



                </Layout>


            </div>
        )
    }
}

export default Training;