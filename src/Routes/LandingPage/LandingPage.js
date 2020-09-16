import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Content, Button, Row, Col } from 'antd';
import OneClickSlider from '../../Components/OneClickSlider/OneClickSlider'
import OneClickProductTiles from '../../Components/OneClickProductTiles/OneClickProductTiles'

import russ_puppy_no_background from '../../Assets/russ_puppy_no_background.png'
import dog_empty_bowl from '../../Assets/dog_empty_bowl.jpg'
import dog_groom from '../../Assets/dog_groom.jpg'
import { WarningOutlined, InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined } from '@ant-design/icons';


class LandingPage extends React.Component {
    state = {
        windowSize: '',

    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    handleResize = () => {
        this.setState({
            windowSize: window.innerWidth
        })
    }

    render() {
        const { windowSize } = this.state;
        const width = window.addEventListener('resize', this.handleResize);

        return (
            <div className="white">
                 <div className="content-section light-grey">
                    <div className="content-container">

                    <div className="title-centre">
                    
                         
                            <h1 className="display-heading">
                                Doggo
                            </h1>
                            <div className="hero-details">
                            Everything you need for your best friend - in one place
                        </div>
                          
                       

                        </div>
                      
                        </div>
                        </div>

                        <div className="content-section low-padding light-coral">
                    <div className="content-container">
                     
                        <div className="topics-container">
                            <div className="topic-item">
                                Gear Shop
                            </div>
                            <div className="topic-item">
                                Food Shop
                            </div>
                            <div className="topic-item"> 
                                Vet Finder
                            </div>
                            <div className="topic-item"> 
                                Learn
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="content-section low-padding white">
                        <div className="content-container">
                            <div className="title-left">
                            <h6 className="display-heading-intro font-coral">Gear Shop</h6>
                               
                                <h1 className="landing-heading">
                                    Outfit your doggo in one-click 
                            </h1>
                             





                            </div>
                       
                        <OneClickSlider />
                       
                        </div>
                    </div>

                    <div className="no-padding-section light-grey">
                    <div className="content-container">
                
                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                 
                                        
                                    <div className="title-left">
                                    <h6 className="display-heading-intro font-coral">New Puppy</h6>
                            <h3 className="display-sub-heading">
                                New Puppy Guide
                            </h3>
                           
                            <div className="hero-details">
                            Bringing home a new pup? Start our step-by-step guide to outfit your dog, find them great food, the best vet and puppy classes in your area, and an interactive survival guide!
                          
                       

                        </div>
                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                       

                        </div>
                                    
                                       
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0, textAlign: "center" }}>
                                    <div className="grid-image-container" style={{ padding: 0}}>
                                    <img style={{ width: 300 }} className="grid-image" src={russ_puppy_no_background} alt="puppy sitting on command" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                        </div>
                </div>


                
               
                <div className="content-section low-padding white">
                    <div className="content-container">
                    
                        <div className="grid-container" style={{ marginTop: 0}}>
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 10, order: 1 }} lg={{ span: 8, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                 
                                        
                                    <div className="title-left">
                    
                            <h6 className="display-heading-intro font-coral">Nutrition</h6>
                            <h1 className="display-sub-heading">
                                Food Advisor
                            </h1>
                           
                            <div className="hero-details">
                            Use our dog food advisor tool to find the healthiest food for your doggo
                        </div>
                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                       

                        </div>
                                    
                                       
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 14, order: 2 }} lg={{ span: 16, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image-langing-page" src={dog_empty_bowl} alt="puppy sitting on command" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                        </div>
                </div>

                <div className="content-section low-padding white">
                    <div className="content-container">
                    
                        <div className="grid-container" style={{ marginTop: 0}}>
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 10, order: 2 }} lg={{ span: 8, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                 
                                        
                                    <div className="title-left">
                    
                            <h6 className="display-heading-intro font-coral">Professionals</h6>
                            <h1 className="display-sub-heading">
                                Find trainers, groomers, and vets in your area
                            </h1>
                           
                            <div className="hero-details">
                            We did the work to find the highest rated professionals in your area
                        </div>
                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                       

                        </div>
                                    
                                       
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 14, order: 1 }} lg={{ span: 16, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image" src={dog_groom} alt="puppy sitting on command" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                        </div>
                </div>

                
        


               


                














            </div>




        )
    }
}

export default LandingPage;