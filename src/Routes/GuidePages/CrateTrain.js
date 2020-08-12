import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'

class CrateTrain extends React.Component {
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

                        <div className="grid-container">


                            <Row justify="space-around" >
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide'>
                                        <Button className="survival-guide-header-button">Guide Home</Button>
                                    </Link>

                                </Col>
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide/prepare-home'>
                                        <Button className="survival-guide-header-button">Getting Ready</Button>
                                    </Link>

                                </Col>
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide/pickup-pup'>
                                        <Button className="survival-guide-header-button">Pick Up Pup</Button>
                                    </Link>

                                </Col>
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide/pup-home'>
                                        <Button className="survival-guide-header-button">Pup is home!</Button>
                                    </Link>

                                </Col>
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide/meal-time'>
                                        <Button className="survival-guide-header-button">First meal</Button>
                                    </Link>

                                </Col>
                                <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                    <Link to='/guide/crate-train'>
                                        <Button className="survival-guide-header-button selected">House training</Button>
                                    </Link>

                                </Col>





                            </Row>
                        </div>
                    </div>

                    <div className="content-section blue">
                        <div className="checklist-page content">

                            <div className="section-count">Section 5</div>
                            <h3>Housetraining Doggo</h3>
                            <h5>Let's talk about teaching doggo to love his crate. Here's what to expect. As usual, check the FAQ at the bottom for extra help!</h5>


                        </div>
                    </div>

                    <div className="content-section black font-white">
                        <div className="checklist-page content">
                            <h2 className="font-white">What to expect</h2>
                            <div className="grid-container">

                                <Row className="survival-guide-steps-row font-white" justify="space-around">
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps font-white">
                                            <div className="survival-guide-steps_num">
                                                1
                                    </div>
                                            <h3>It's going to be an adjustment</h3>
                                            <h5 className="font-white">Your doggo may not warm to his crate right away and will likely cry a lot his few first nights</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                2
                                    </div>
                                            <h3>Stay focused!</h3>
                                            <h5 className="font-white">Letting your dogggo out of the crate when they cry will disrupt your progress</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                3
                                    </div>
                                            <h3>Trust us</h3>
                                            <h5 className="font-white">This short term struggle will be very beneficial in the long run to raising a secure doggo</h5>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>




                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }}>
                                    <div className="grain-content">
                                        <h2>What is crate training?</h2>
                                        <h5>Your doggo's crate is a safe and secure environment. The "training" part is teaching them to make it their home</h5>
                                        




                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }}>
                                    <div className="grain-content">
                                        <h2>Familiarize your doggo with their crate</h2>
                                        <h5>Your doggo's crate is a safe and secure environment. The "training" part is teaching them to make it their home</h5>
                                        




                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }}>
                                    <div className="grain-content">
                                        <h2>The first night</h2>
                                        <h5>Your doggo's crate is a safe and secure environment. The "training" part is teaching them to make it their home</h5>
                                        




                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                   

                    

                    <div className="content-section dark-yellow">
                        <div className="checklist-page content">
                            <div>
                                <img className="pro-tip-icon black-border" src={light_bulb} alt="light bulb icon" />
                            </div>
                            <h2 className="font-black">Pro Tip</h2>
                            <h3 className="font-black">Take doggo out for a bathroom break immediately after they finish eating or drinking</h3>
                            <h5 className="font-black">Prevent accidents by being proactive. Most puppies will be or poo immediately after eating and drinking</h5>
                            
                        </div>
                    </div>

                 

                    














                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <h2 style={{ marginBottom: 0 }}>FAQ</h2>
                            <h4 className="font-purple">Feeding Doggo</h4>
                            <Collapse defaultActiveKey={['1']} className="survival-guide-faq" ghost>
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
                            <h4>You're reaching pro status!</h4>
                            <h5>In the next section we talk about house training doggo</h5>
                        </div>
                        <Link to='/guide/crate-train'>
                            <Button>
                                Step 5: House training!
                                    </Button>
                        </Link>

                    </div>



                </Layout>

            </div>
        )
    }
}

export default CrateTrain;