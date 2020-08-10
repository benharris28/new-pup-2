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
import russ_snow from '../../Assets/russ_snow.jpg'

class LandingPage extends React.Component {
    state = {
        windowSize: '',

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
                <div className="guide-banner">

                    <div className="guide-banner-image dark-yellow" />



                    <div className="guide-banner-title left">

                        <h1>Bringing home a doggo?</h1>
                        <h5 className="font-black">From a step-by-step guide of what you need, to expert picks of food, to a customized surivival guide, we've got your back.</h5>

                        <Link to='/checklist'>
                            <Button className="banner-button">
                                Start now
                            </Button>
                        </Link>

                    </div>
                </div>


                <div className="content-section white">
                    <div className="checklist-page content space grain-free row-reverse">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                        <h2>Expert recommended products</h2>
                                        <h5>We'll tell you only what you need and exactly where to find it</h5>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
                                    </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>

                                <img className="stock-image" src={gear_collection} alt="gear list" />
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="content-section dark-green">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>

                                <img className="stock-image" src={food_screenshot} alt="gear list" />
                            </Col>

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                        <h2>There are thousands of dog foods </h2>
                                        <h4 className="font-white">We'll narrow it down to 2</h4>
                                        <h5>Our team of experts have done the research and made your choice really. really easy</h5>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
                                    </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>

                        </Row>

                    </div>
                </div>


                <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">


                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                        <h2>We'll show the you closest vets to you</h2>
                                        <h5>All "vetted" by our team of experts</h5>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
                                    </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>


                            </Col>

                        </Row>

                    </div>
                </div>

                <div className="content-section dark-yellow">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">


                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                        <h2>We'll walk you through the first 24 hours with pup</h2>
                                        <h4>House training, pup's first meal, training. We've got you covered.</h4>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
                                    </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>


                            </Col>

                        </Row>

                    </div>
                </div>













            </div>




        )
    }
}

export default LandingPage;