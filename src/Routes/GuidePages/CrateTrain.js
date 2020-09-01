import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'

class CrateTrain extends React.Component {
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
                            <h2>Is crate training cruel?</h2>
                            <h5>If used properly, positive-reinforcement trainers agree that crates are positive for puppies. Crates provide a safe space for doggos</h5>
                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0}}>
                                    <div className="grid-content">
                                        <h2>What is crate training?</h2>
                                        <h5>Your doggo's crate is a safe and secure environment. The "training" part is teaching them to make it their home</h5>
                                        <h5>Crate training also helps with house training. Your doggo will not want to pee or poo in their crate. Crates also help your dog avoid destructive behaviours such as chewing or eating unwanted items when left to their own devices</h5>
                                        




                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0}}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                

                    <div className="content-section white">
                        <div className="checklist-page content">

                            <div>
                                <div className="survival-content-group">
                                    <h2>Familiarize your doggo with their crate</h2>
                                    <h5>By using positive reinforcement, you can build a positive association with the crate</h5>
                                </div>

                                <div className="survival-content-group">
                                    <h4>Introduce the crate with treats</h4>
                                    <p>Try placing toys, a treat, or a KONG filled with peanut butter in the crate to convince your doggo to hang out in the crate</p>

                                    <p>Build up to a few minutes in the crate, and then progressing to closing the door. Continue to praise your pup and offer treats. Eventually, you can build up to moving out of site for a brief moment</p>

                                </div>

                                <div className="survival-content-group">
                                    <h4>Start slow, build up</h4>
                                    <p>Start with your doggo in their crate for a few seconds with the door open. Make sure your pup can see you. Give them treats and praise just for being in their crate</p>

                                    <p>Build up to a few minutes in the crate, and then progressing to closing the door. Continue to praise your pup and offer treats. Eventually, you can build up to moving out of site for a brief moment</p>

                                </div>

                
                            </div>
                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 1 }} style={{ paddingLeft: 0}}>
                                    <div className="survival-content">
                                        <h2>How long is too long?</h2>
                                        <h6>Puppies do not want to pee or poo in their crate, and will go great lengths to avoid it. Altough, puppies can't control their bladders very well, and should be let out for potty breaks often </h6>
                                        <h4>Daytime</h4>
                                        <p>As a general rule, a puppy should only be left in a crate for 1 hour for every month of age. Therefore, if your puppy is 4 months old, you can leave the pup for 4 hours maximum</p>
                                        
                                        <h4>Nightime</h4>
                                        <p>You can break the 1 hours per month rule at night while your puppy is sleeping. Make sure you monitor your puppy closely. If they awake and its been longer than 2 hours, take them out for a potty break.</p>




                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 2 }} style={{ paddingLeft: 0}}>
                                    <img className="food-image" src={schedule_image} alt="daily shedule" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                
                   

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            
                                    <div>
                                        <h2>The first night</h2>
                            
                                    
                               
                                 

                                    <div className="survival-content-group">
                                        <h4>Your doggo is going to cry</h4>
                                        <p>Your pup's world has been turned upside down. They will be in a brand new place with strangers they don't recognize. Your pup will cry and whine, and it will be heart-wrenching. </p>
                                        

                                       

                                    </div>

                                    <div className="survival-content-group">
                                        <h4>Be Strong</h4>
                                        <p>It's important that you don't let them out of the crate when they cry. That reinforces that crying leads to exiting the crate. Instead, wait until they are calm before letting them out of the crate</p>
                                        

                                       

                                    </div>

                                    <div className="survival-content-group">
                                        <h4>Wait for calm</h4>
                                        <p>Even if its just a second or two, wait for your pup to calm down before taking them out of the crate to prevent the association between crying and being let out</p>
                                        

                                       

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
                            <h3 className="font-black">Place a KONG filled with peanut butter in your doggo's crate (during the day)</h3>
                            <h5 className="font-black">This will keep your pup occupied as they try and get the peanut butter and will also reinforce a positive association with the crate</h5>
                            
                        </div>
                    </div>

                 

                    














                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <h2 style={{ marginBottom: 0 }}>FAQ</h2>
                            <h4 className="font-purple">Crate training</h4>
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