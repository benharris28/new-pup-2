import React from 'react'
import { Link } from 'react-router-dom';
import Russ_car from '../../Assets/Russ_car.JPG'
import { Layout, Content, Button, Row, Col, Collapse } from 'antd';
import stock_image from '../../Assets/stock_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'

class PickUpPup extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
     }
    
    render() {
        const { Content } = Layout;
        const { Panel } = Collapse;

        return (
            <div>
                <Layout className="white">
                <div className="survival-guide-header">
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>



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

                


                    <div className="content-section dark-green">
                    <div className="checklist-page content">
                       
                        <div className="section-count">Section 2</div>
                            <h3>The big day is here!</h3>
                            <h5>Get ready! Your life will change forever today in the best way possible! Get excited and don't forget a few handy tips</h5>
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

                    <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <h2>FAQ - Picking up pup</h2>
                        <Collapse accordion className="survival-guide-faq">
                            <Panel header="Question 1 question" key="1">
                                <p>Question 1</p>
                            </Panel>
                            <Panel header="Question 2 question" key="2">
                                <p>Question 2</p>
                            </Panel>
                            <Panel header="Question 3 question" key="3">
                                <p>Question 3</p>
                            </Panel>

                        </Collapse>
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