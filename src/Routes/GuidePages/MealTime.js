import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'

class MealTime extends React.Component {
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

                    <div className="content-section dark-yellow">
                        <div className="checklist-page content">

                            <div className="section-count">Section 4</div>
                            <h3>Doggo's first meal at home</h3>
                            <h5>We're going to walk you through feeding. Here's what to expect. As usual, check the FAQ at the bottom for extra help!</h5>


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
                                            <h3>Use the same food</h3>
                                            <h5 className="font-white">Start by feeding the same food they have been eating at the breeder or shelter</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                2
                                    </div>
                                            <h3>Expect picky eating</h3>
                                            <h5 className="font-white">Your doggo's world has been flipped upside down. It may impact their appetite</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                3
                                    </div>
                                            <h3>Use your crate</h3>
                                            <h5 className="font-white">Your crate is a safe space. Try feeding them in or near it</h5>
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
                                        <h2>When should I feed my doggo?</h2>
                                        <h5>Puppies who are 8 - 12 weeks old need 3 - 4 meals per day. All puppies are different, but start by feeding 3 meals per day. Breakfast should be after the first morning bathroom break when you have started your day (not 4 am). Lunch can be around noon, and dinner around 6 pm.</h5>
                                        <h4>Check out this handy schedule</h4>




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
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
                                    <div className="grain-content">
                                        <h2>How much should I feed?</h2>
                                        <h6>Start by checking the label, which will give guidance for either cups per day or calories per day.</h6>
                                        <h4>Monitor your doggo</h4>
                                        <h6>Every doggo is different, and activity level, metabolism, and other factors will influence weight. If your doggo's belly starts to sag, try feeding less food per day </h6>


                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content">

                            <div>
                                <div className="survival-content-group">
                                    <h2>How to feed</h2>
                                    <h5>Most puppies transition from wet food to solids at around 8 weeks. When you first get your doggo, they will likely have just started the transition</h5>
                                </div>
                                <div className="survival-content-group">
                                    <h4>Mix kibble with water</h4>
                                    <p>If your pup is starting on kibble, add water to their food bowl and let it soak into the kibble until its soft. Keep this up for a few weeks until your pup gets the hang of it</p>

                                    <p>After a few weeks, start to reduce the amount of water mixed into each meal until you are serving dry food</p>

                                </div>

                                <div className="survival-content-group">

                                    <h4>Stick to a schedule</h4>
                                    <p>As your doggo gets used to their food, feed at the same times each day. Leave the food out only for 10 - 15 minutes. While it may be tempting, don't offer your doggo their food at other times (including some of your own food)</p>
                                </div>

                                <div className="survival-content-group">

                                    <h4>Try using the crate</h4>
                                    <p>Eating new food in a new environment will be intimidating for your doggo. Try putting the food bowl in or next to the crate to help create a safe environment for doggo.</p>
                                </div>
                            </div>
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

export default MealTime;