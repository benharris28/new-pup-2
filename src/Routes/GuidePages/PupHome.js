import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_pee from '../../Assets/dog_pee.png'
import pup_sleep from '../../Assets/pup_sleep.png'
import light_bulb from '../../Assets/light_bulb.png'
import puppy_pee_outside from '../../Assets/puppy_pee_outside.jpg'
import dog_inside from '../../Assets/dog_inside.jpg'

class PupHome extends React.Component {
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

                    <div className="content-section grey">
                        <div className="checklist-page content">

                            <div className="section-count">Section 3</div>
                            <h3>Your first hours with pup</h3>
                            <h5>Chaos - but fun! Here's what to expect. As usual, check the FAQ at the bottom for extra help!</h5>


                        </div>
                    </div>

                    <div className="content-section purple font-white">
                        <div className="checklist-page content">
                            <h2 className="font-white">What to expect</h2>
                            <div className="grid-container">

                                <Row className="survival-guide-steps-row font-white" justify="space-around">
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps font-white">
                                            <div className="survival-guide-steps_num">
                                                1
                                    </div>
                                            <h3>Stop!</h3>
                                            <h5 className="font-white">Your pup can't go anywhere until they are vaccinated</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                2
                                    </div>
                                            <h3>Pee breaks</h3>
                                            <h5 className="font-white">Take your pup out to pee every 45 mins (or immediately after eating/drinking or waking up from a nap)</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                3
                                    </div>
                                            <h3>ZZZ's</h3>
                                            <h5 className="font-white">Your pup is going to nap - a lot!</h5>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
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

                <div className="content-section light-grey">
                    <div className="content-container">
                    <div className="title-centre">
                            <h1 className="display-heading">
                                House (potty) training your doggo
                            </h1>
                            <div className="hero-details">
                            Pee on your rug is no fun. You can teach your doggo to relieve themeselves outside in a few simple steps
                        </div>
                       

                        </div>
                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                        <div className="grid-title">
                                        <h3>Set your doggo up for success</h3>
                                        </div>
                                        
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Use one pee spot everytime so your doggo can mark it</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out after every meal and after drinking water</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out after waking up from a nap</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out once per hour or if you see them sniffing around (looking for a place to pee)</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">If you live in a building, carry them to the elevator (to avoid accidents in the hall or waiting for elevator)</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image" src={puppy_pee_outside} alt="puppy peeing against a tree" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>
                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[100, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                        <div className="grid-content">
                                        <div className="grid-title">
                                        <h3>Praise a job well done!</h3>
                                        </div>
                                        
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Reinforce the behaviour you want. If your pup is rewarded, they are more likely to repeat that behaviour </span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Praise the pup “good dog” and offer treats if they relieve themselves in the right spot</span>
                                        </div>
                                      
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                <div className="grid-image-container">
                                    <img className="grid-image" src={dog_inside} alt="puppy inside" />
                                </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                        <div className="grid-title">
                                        <h3>Set your doggo up for success</h3>
                                        </div>
                                        
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Use one pee spot everytime so your doggo can mark it</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out after every meal and after drinking water</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out after waking up from a nap</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Take pup out once per hour or if you see them sniffing around (looking for a place to pee)</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">If you live in a building, carry them to the elevator (to avoid accidents in the hall or waiting for elevator)</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image" src={puppy_pee_outside} alt="puppy peeing against a tree" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>

                       
                       
                   

                    </div>
                </div>



                    <div className="content-section blue">
                        <div className="checklist-page content space grain-free">
                            <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={12}>
                                    <div className="grain-content">
                                        <h2>Potty Time</h2>
                                        <h5>House training begins the moment you get home</h5>

                                        <div className="content-group">





                                            <p>General rule: take your pup out to relieve themselves every 45 mins or immediately after waking up from sleep/nap or eating/drinking</p>

                                            <h5>Praise a job well done!</h5>
                                            <p>If your pup pees / poos outside, praise them ("Good boy / girl!") and offer them a treat</p>
                                            <p>Praise / treats reinforces the positive behaviour and they will associate going to the bathroom outside with a reward!</p>

                                            <h5>Accidents Happen!</h5>
                                            <p>Don't punish your pup for having an accident!</p>
                                            <p>If you catch them beginning to pee, lift them up and bring them outside to finish</p>
                                            <p>Clean up all accidents throroughly with pee cleaner. Dog's have amazing noses and will pee there again!</p>





                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={12}>
                                    <img className="food-image" src={dog_pee} alt="dog peeing on fire hydrant" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                    <div className="content-section black">
                        <div className="checklist-page content">
                            <div>
                                <img className="pro-tip-icon" src={light_bulb} alt="light bulb icon" />
                            </div>
                            <h2 className="font-white">Pro Tip</h2>
                            <h3 className="font-white">Keep your pup tethered to you </h3>
                            <h5 className="font-white">Don't let pup out of your sight. If you see them sniffing around or sneaking off, take them out to relieve themselves</h5>
                            <h5 className="font-white">When pup is awake, keep them tethered to you as you move about your house. Wherever you go, pup goes. </h5>
                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <div className="grain-content">
                                        <h2>Napping</h2>
                                        <h5>Your pup will be napping constantly - that's normal!</h5>


                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <img className="food-image" src={pup_sleep} alt="puppy sleeping" />
                                </Col>
                            </Row>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <Row gutter={[40, 24]} className="grain">



                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <div className="grain-content">
                                        <h2>Teach pup to sit</h2>
                                        <div className="trick-list">
                                            <ul>
                                                <li><h5>Use pup's food as a treat reward</h5></li>
                                                <li><h5>Hold the treat up to their nose and lift your hand slightly upward. The pup will naturally lower their bum to the ground. When they do, give them the treat and praise!</h5></li>
                                                <li><h5>As pup gets the hang of it, you can add the command "sit" as you bring the treat to their nose</h5></li>
                                            </ul>
                                            
                                        

                                      
                                        </div>

                                    </div>

                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <img className="food-image" src={pup_sleep} alt="puppy sleeping" />
                                </Col>
                            </Row>

                        </div>

                    </div>















                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                            <h2 style={{marginBottom: 0}}>FAQ</h2>
                            <h4 className="font-purple">Pup's first few hours</h4>
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
                            <h4>Getting the hang of it?</h4>
                            <h5>In the next section we talk about pup's first meal in your home</h5>
                        </div>
                        <Link to='/guide/meal-time'>
                            <Button>
                                Step 4: Meal Time!
                                    </Button>
                        </Link>

                    </div>



                </Layout>

            </div>
        )
    }
}

export default PupHome;