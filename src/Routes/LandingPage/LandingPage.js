import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Content, Button, Row, Col } from 'antd';
import CallToActionMobile from '../../Components/CallToActionMobile/CallToActionMobile'
import CallToAction from '../../Components/CallToAction/CallToAction'

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

                        <Button className="banner-button">
                            Start now
                    </Button>

                    </div>
                </div>

                <div className="landing-page-banner blue">
                    <div className="landing-page-banner-content">
                        <Row gutter={[40, 24]}>
                            <Col className="gutter-row" sm={24} md={24} lg={8}>
                                <div>
                                    Test Content 1
                        </div>
                            </Col>
                            <Col className="gutter-row" sm={24} md={24} lg={8}>
                                <div>
                                    Test Content 1
                        </div>
                            </Col>
                            <Col className="gutter-row" sm={24} md={24} lg={8}>
                                <div>
                                    Test Content 1
                        </div>
                            </Col>

                        </Row>

                    </div>
                </div>
                <div className="call-to-action-container yellow">
                    {windowSize > 900 ? <CallToAction /> : <CallToActionMobile />}

                </div>










            </div>




        )
    }
}

export default LandingPage;