import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col, Table } from 'antd';
import { InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined, CloseOutlined, BulbOutlined } from '@ant-design/icons';
import MealTable from '../../Components/MealTable/MealTable'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'
import puppy_pee_outside_2 from '../../Assets/puppy_pee_outside_2.jpg'
import dog_inside from '../../Assets/dog_inside.jpg'
import dog_pee_rug from '../../Assets/dog_pee_rug.jpg'

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
                  
                    <div className="content-section light-grey">
                    <div className="content-container">

                    <div className="title-centre">
                    <div className="selections coral">
                            Step 4 of 5
                        </div>
                            <h6 className="display-heading-intro font-coral">Survival Guide</h6>
                            <h1 className="display-heading">
                                Feeding your doggo
                            </h1>
                            <div className="hero-details">
                            Everything you need to know about what, how, when, and how much to feed
                        </div>
                          
                       

                        </div>
                      
                        </div>
                        </div>

                        <div className="content-section low-padding coral">
                    <div className="content-container">
                     
                        <div className="topics-container">
                            <div className="topic-item">
                                Feeding schedules
                            </div>
                            <div className="topic-item">
                                Portioning
                            </div>
                            <div className="topic-item"> 
                                Feeding Strategies
                            </div>
                        </div>
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


                    <div className="content-section">
                    <div className="content-container">
                    <div className="title-centre">
                            <div className="guide-heading">
                                Restrictions
                            </div>
                            <h1 className="display-heading">
                                Don't forget!
                            </h1>
                            <div className="hero-details">
                            There are important details to know before you go anywhere
                        </div>
                          
                       

                        </div>
                        <div className="column-container">
                        <div className="text-column-three">
                            <InfoCircleOutlined className="column-item-icon font-coral" />
                            <h4>Know the risks</h4>
                            <p>Puppies are vulnerable to canine distemper and parvovirus. It takes two sets of vaccinations to immunize your pup againt these and other diseases which are found in the outside world.</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>No walks!</h4>
                            <p>Your pup will get their first set of vaccinations at your first wellness visit and will get a second 2 - 4 weeks after that</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>No dog parks!</h4>
                            <p>Please do not bring your dog to a dog park until they are licensed, complete puppy classes, and most importantly, get their rabbies vaccination</p>
                        </div>

                    </div>
                   

                    </div>
                </div>


                <div className="content-section">
                    <div className="content-container">
                    <div className="title-centre">
                    <div className="guide-heading">
                                Meal Schedule
                            </div>
                            <h1 className="display-heading">
                                When should I feed my doggo?
                            </h1>
                            <div className="hero-details">
                            Puppies who are 8 - 12 weeks old need 3 - 4 meals per day. All puppies are different, but start by feeding 3 meals per day. Check out the sample schedule below
                        </div>
                       
                     
                       

                        </div>
                        <div className="table-container">
                            <MealTable />
                        </div>

                      
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