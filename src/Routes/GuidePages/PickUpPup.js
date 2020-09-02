import React from 'react'
import { Link } from 'react-router-dom';
import Russ_car from '../../Assets/Russ_car.JPG'
import { Layout, Content, Button, Row, Col, Collapse } from 'antd';
import stock_image from '../../Assets/stock_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import GuideFooter from '../../Components/GuideFooter/GuideFooter'

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

                
                <div className="hero light-purple">
                    <div className="container">
                    <div className="selections">
                            Prepare your home
                        </div>
                        
                        <div className="title-centre image-title">
                            <h1 className="display-heading">
                                Preparing your home for Doggo
                            </h1>
                            <div className="hero-details">
                            It's time to puppy-proof your home. We'll explain how to make your home safe and inviting for pup, and to set up a safe place for him to sleep
                        </div>
                       

                        </div>
                        
                    </div>
                 
                    
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

                    <div className="faq-section">
                        <div className="content-container">
                            <div className="title-wrap">
                                <h2 className="content-h2" style={{ marginBottom: 0 }}>Have more questions about getting your home ready?</h2>
                                <h4 className="font-purple">We've got your answers</h4>
                            </div>
                           
                            <Collapse defaultActiveKey={['1']} className="survival-guide-faq" ghost>
                                <Panel header="Should I get a food subscription?" key="1">
                                    <p>Subscriptions are great if you have chosen a food and want the same quantity delivered to your home regularly. If you're not sold, you can purchaes as needed</p>
                                </Panel>
                                <Panel header="What's the deal with grain free foods?" key="2">
                                    <p>Grain free foods are marketed based on debunked food science. Our experts don't recommend grain free foods. Grains are an important part of your dog's diet!</p>
                                </Panel>
                                <Panel header="Question 3 question" key="3">
                                    <p>Question 3</p>
                                </Panel>

                            </Collapse>
                        </div>
                    </div>
             
              

                <div className="next-section white">
                        <div className="container-2">
                            <div className="cta-banner-dark">
                                <div className="cta-container">
                                    <div className="next-section-content">
                                        <h2 className="font-white">Ready for the big pickup?</h2>
                                        <h5 className="font-white">In the next section we talk about your first few hours with pup! Let's go!</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/guide/pup-home'>
                                            <Button className="button-cta">
                                            Step 3: Pup is home. Help!
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <GuideFooter articles={[3,4,5]}/>

              

                

                   
                </Layout>
            </div>
        )
    }
}

export default PickUpPup;