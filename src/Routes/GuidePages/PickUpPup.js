import React from 'react'
import { Link } from 'react-router-dom';
import Russ_car from '../../Assets/Russ_car.JPG'
import { Layout, Content, Button, Row, Col } from 'antd';
import stock_image from '../../Assets/stock_image.png'

class PickUpPup extends React.Component {
    render() {
        const { Content } = Layout;
        return (
            <div>
                <Layout>
                    <div className="survival-guide-banner">

                        <div className="survival-guide-banner-image white" />

                        <div className="back-to-checklist-button-test">
                            <Link to='/guide'>
                                <Button
                                    type="primary">
                                    Back to guide menu
                                </Button>
                            </Link>

                        </div>

                        <div className="survival-guide-banner-title">
                            <h5 className="survival-guide-title">Doggo Survival Guide</h5>
                            <div className="step-counter"><h6>Step 2 of 5</h6></div>
                            <h1>Pickup Pup</h1>

                        </div>

                    </div>

                    <div className="content-section dark-green">
                    <div className="checklist-page content">
                        <div className="checklist-page-alert font-black">

                            <h3>The big day is here!</h3>
                            <h5>Get ready! Your life will change forever today in the best way possible! Get excited and don't forget a few handy tips</h5>
                        </div>

                    </div>
                </div>

                <div className="content-section white">
                <div className="checklist-page content">
                            <div className="checklist-page-section-intro">
                                <h3>What you should bring</h3>
                                <h5>Don't forget these items when going to pick up Russell!</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={8} lg={8}>
                                        <div className="nutrition-type-item">
                                     
                                                <img className="stock-icon" src={stock_image} alt="food stock" />
                                           
                                            <h4>Towels</h4>
                                            <h5>Dogs can get nauseous and anxious during their first few trips in a car. Spread a few towels down to help catch / cleanup any mess</h5>
                                        </div>
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={8} lg={8}>
                                        <div className="nutrition-type-item">
                                     
                                                <img className="stock-icon" src={stock_image} alt="food stock" />
                                           
                                            <h4>A friend</h4>
                                            <h5>It will be a stressful drive home for you new pup. If possible, have a friend come with to reassure pup while you drive</h5>
                                        </div>
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={8} lg={8}>
                                        <div className="nutrition-type-item">
                                     
                                                <img className="stock-icon" src={stock_image} alt="food stock" />
                                           
                                            <h4>Russell's gear</h4>
                                            <h5>Bring Russell's leash, harness, collar, tags, and some poo bags</h5>
                                        </div>
                                    </Col>
                                   
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="next-section-button dark-yellow">
                    <div>
                            <h4>Ready for the big pickup?</h4>
                            <h5>In the next section we talk about your first few hours with pup! Let's go!</h5>
                        </div>
                        <Link to='/guide/pup-home'>
                            <Button>
                                Step 3: Pup is home. Help!
                                    </Button>
                        </Link>

                    </div>


                   
                </Layout>
            </div>
        )
    }
}

export default PickUpPup;