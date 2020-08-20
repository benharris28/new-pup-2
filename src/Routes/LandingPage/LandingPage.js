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
                <div className="grid-halves-section">
                    <div className="grid-section-half bg-primary-4">
                        <div className="container">
                            <div className="grid-text-content">
                                <h1 className="display-heading-1">Bringing home a doggo?</h1>
                                <p className="text-large">Test content test content test content</p>
                                <Button className="menu-button signup">
                                    Test
                                </Button>
                            </div>
                        </div>
                        </div>
                        <div className="grid-section-half pg-primary-3">
                            <img src={russ_headshot} alt="vet" className="top-layer" />
                            <div class="interface-screenshot-decoration bg-primary-5 round-bottom-right"></div>
                        </div>
                        
                        </div>
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
                    <div className="checklist-page content grain-free row-reverse">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0}}>
                                <div className="grid-content">
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
                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 12}} lg={{ span: 12, order: 2 }} style={{ padding: 0}}>

                                <img className="grid-image" src={crate_landing_page} alt="dog crate" />
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="content-section blue">
                    <div className="checklist-page content grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                            <Col className="gutter-row" xs={24} sm={24} md={{span: 12, paddingRight: 20}} lg={{span: 12, paddingRight: 20}}>

                                <img className="grid-image" src={dog_food_checklist} alt="dog food" />
                            </Col>

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={{span: 12, paddingLeft: 20}}>
                                <div className="grid-content">
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
                    <div className="checklist-page content grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">


                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }}>
                                <div className="grid-content">
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

                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }}>
                                <img className="grid-image" src={vet_checklist} alt="vet tools" />

                            </Col>

                        </Row>

                    </div>
                </div>

                <div className="content-section purple">
                    <div className="checklist-page content grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">


                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }}>
                                <div className="grid-content">
                                    <div className="row-content-intro">
                                        <h2>We'll help you navigate the first 24 hours with doggo</h2>
                                        <h5>House training, pup's first meal, training. We've got you covered.</h5>
                                        <Link to='/checklist'>
                                            <Button className="banner-button">
                                                Start now
                                    </Button>
                                        </Link>
                                    </div>





                                </div>

                            </Col>

                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }}>

                                <img className="stock-image" src={guide_checklist} alt="compass" />
                            </Col>

                        </Row>

                    </div>
                </div>













            </div>




        )
    }
}

export default LandingPage;