import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Content, Button, Row, Col } from 'antd';
import CallToActionMobile from '../../Components/CallToActionMobile/CallToActionMobile'
import CallToAction from '../../Components/CallToAction/CallToAction'
import gear_list_screenshot from '../../Assets/gear_list_screenshot.png'
import food_screenshot from '../../Assets/food_screenshot.png'
import food_scroll from '../../Assets/food_scroll.MOV'
import russ_headshot from '../../Assets/russ_headshot.png'
import gear_collection from '../../Assets/gear_collection.png'
import vet_checklist from '../../Assets/vet_checklist.png'
import dog_food_checklist from '../../Assets/dog_food_checklist.png'
import crate_landing_page from '../../Assets/crate_landing_page.png'
import guide_checklist from '../../Assets/guide_checklist.png'

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
            <div>
                <div className="hero">
                    <div className="container">
                        <div className="title-centre">
                            <h1 className="display-heading">
                                Bringing home a doggo?
                            </h1>
                            <div className="hero-details">
                            From a step-by-step guide of what you need, to expert picks of food, to a customized surivival guide, we've got your back.
                        </div>
                        <div className="button-wrapper">
                            <Button className="banner-button">
                                Start Now
                            </Button>
                        </div>

                        </div>
                        
                    </div>
                    
                </div>
                
               

                <div className="section white">
                    <div className="main-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0 }}>
                                <div className="container align-center">
                                    <div className="row-content-intro">
                                        <h2>Expert recommended products</h2>
                                        <p className="paragraph">We'll tell you only what you need and exactly where to find it</p>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                                     
                                    </div>





                                </div>
                                
                            </Col>
                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 12 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                <div className="portrait-image-container align-center">
                                    <img className="grid-image" src={crate_landing_page} alt="dog crate" />
                                    <div className="bg-element bg-yellow">
                                        
                                        </div>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="section white">
                    <div className="main-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0 }}>
                                <div className="container align-center">
                                    <div className="row-content-intro">
                                        <h2>There are thousands of dog foods </h2>
                                        <h4>We'll narrow it down to 2</h4>
                                        <p className="paragraph">Our team of experts have done the research and made your choice really. really easy</p>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>
                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 12 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                <div className="portrait-image-container align-center">
                                    <img className="grid-image" src={dog_food_checklist} alt="dog food" />
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>


                <div className="section white">
                    <div className="main-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0 }}>
                                <div className="container align-center">
                                    <div className="row-content-intro">
                                        <h2>We'll show the you closest vets to you</h2>
                                        <p className="paragraph">All "vetted" by our team of experts</p>

                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>
                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 12 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                <div className="portrait-image-container align-center">
                                    <img className="grid-image" src={vet_checklist} alt="vet tools" />
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>


                <div className="section white">
                    <div className="main-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0 }}>
                                <div className="container align-center">
                                    <div className="row-content-intro">
                                        <h2>We'll help you navigate the first 24 hours with doggo</h2>
                                        <p className="paragraph">House training, pup's first meal, training. We've got you covered.</p>

                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
            </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>
                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 12 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                <div className="portrait-image-container align-center">
                                    <img className="stock-image" src={guide_checklist} alt="compass" />
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="cta-section dark-purple">
                    <div className="cta">
                        <div className="cta-content">
                            <div>
                            <h3 className="large-heading cta-heading">Start your new doggo journey</h3>
                            </div>
                            
                            <div className="cta-button-container">
                                <Link to='/checklist'>
                                    <Button className="cta-button large">
                                        Start Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>















            </div>




        )
    }
}

export default LandingPage;