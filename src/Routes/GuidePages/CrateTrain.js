import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { WarningOutlined, InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'
import puppy_in_crate from '../../Assets/puppy_in_crate.jpg'
import puppy_pee_outside_2 from '../../Assets/puppy_pee_outside_2.jpg'
import dog_inside from '../../Assets/dog_inside.jpg'
import GuideFooter from '../../Components/GuideFooter/GuideFooter'



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
                    <div className="content-section light-grey">
                        <div className="content-container">

                            <div className="title-centre">
                                <div className="guide-page-count">
                                    Step 5 of 5
                        </div>
                                <h6 className="display-heading-intro font-coral">Survival Guide</h6>
                                <h1 className="display-heading">
                                    Your first night with doggo
                            </h1>
                                <div className="hero-details">
                                    It's a huge adjustment for your new pup. We'll help you get through it
                        </div>



                            </div>

                        </div>
                    </div>

                    <div className="content-section low-padding light-coral">
                        <div className="content-container">

                            <div className="topics-container">
                                <div className="topic-item">
                                    Crate Training
                            </div>
                                <div className="topic-item">
                                    Sleep Routines
                            </div>
                                <div className="topic-item">
                                    Calm Strategies
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    Crates
                            </div>
                                <h1 className="display-heading">
                                    Crate Training
                            </h1>
                                <div className="hero-details">
                                    Crate's are an important aspect of positive reinforcement training. They are also an extremely important tool to help your puppy establish a safe space in your home
                        </div>





                            </div>
                            <div className="image-box">
                                <img className="full-image" src={puppy_in_crate} alt="puppy in a dog crate" />
                            </div>

                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    Crate Training
                            </div>
                                <h1 className="display-heading">
                                    What is crate training?
                            </h1>








                            </div>

                            <div className="column-container">
                                <div className="text-column">
                                    <h4>A safe place in your home</h4>
                                    <p>Your doggo's crate is a safe and secure environment. The "training" part is teaching them to make it their home</p>
                                </div>
                                <div className="text-column">
                                    <h4>Housetraining</h4>
                                    <p>Crate training also helps with house training. Your doggo will not want to pee or poo in their crate. Crates also help your dog avoid destructive behaviours such as chewing or eating unwanted items when left to their own devices</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="content-section">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    Sizing
                            </div>
                                <h1 className="display-heading">
                                    Finding the right crate
                            </h1>
                                <div className="hero-details">
                                    A properly-sized crate is essential to successful training experience
                        </div>





                            </div>


                        </div>
                    </div>










                  


                    <div className="content-section white">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    Introduce crate
                            </div>
                                <h1 className="display-heading">
                                    Introducing the crate to your doggo
                            </h1>
                                <div className="hero-details">
                                    Crate's are an important aspect of positive reinforcement training. They are also an extremely important tool to help your puppy establish a safe space in your home
                        </div>





                            </div>

                            <div className="grid-container">
                                <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                                    <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                        <div className="grid-content">
                                            <div className="grid-title">
                                                <h3>Use treats to create a positive association with the crate</h3>
                                            </div>

                                            <div className="list-item-container">
                                                <div className="icon-list">
                                                    <CheckOutlined className="column-item-icon font-coral" />
                                                </div>
                                                <span className="do-list-text">Try placing toys, a treat, or a KONG filled with peanut butter in the crate to convince your doggo to hang out in the crate</span>
                                            </div>
                                            <div className="list-item-container">
                                                <div className="icon-list">
                                                    <CheckOutlined className="column-item-icon font-coral" />
                                                </div>
                                                <span className="do-list-text">Build up to a few minutes in the crate, and then progressing to closing the door. Continue to praise your pup and offer treats. Eventually, you can build up to moving out of site for a brief moment</span>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                        <div className="grid-image-container">
                                            <img className="grid-image" src={puppy_pee_outside_2} alt="puppy peeing in grass" />
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                            <div className="grid-container">
                                <Row style={{ margin: 0 }} gutter={[100, 24]} justify="space-evenly">
                                    <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                        <div className="grid-content">
                                            <div className="grid-title">
                                                <h3>Start slow, build up</h3>
                                            </div>

                                            <div className="list-item-container">
                                                <div className="icon-list">
                                                    <CheckOutlined className="column-item-icon font-coral" />
                                                </div>
                                                <span className="do-list-text">Start with your doggo in their crate for a few seconds with the door open. Make sure your pup can see you. Give them treats and praise just for being in their crate</span>
                                            </div>
                                            <div className="list-item-container">
                                                <div className="icon-list">
                                                    <CheckOutlined className="column-item-icon font-coral" />
                                                </div>
                                                <span className="do-list-text">Build up to a few minutes in the crate, and then progressing to closing the door. Continue to praise your pup and offer treats. Eventually, you can build up to moving out of site for a brief moment</span>
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


                        </div>
                    </div>

                    <div className="content-section white">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    Time limit
                            </div>
                                <h1 className="display-heading">How much time can doggo spend in the crate?</h1>
                                <div className="hero-details">
                                    Puppies do not want to pee or poo in their crate, and will go great lengths to avoid it. Altough, puppies can't control their bladders very well, and should be let out for potty breaks often
                        </div>
                            </div>


                            <div className="column-container">
                                <div className="text-column">
                                    <h4>Daytime</h4>
                                    <p>As a general rule, a puppy should only be left in a crate for 1 hour for every month of age. Therefore, if your puppy is 4 months old, you can leave the pup for 4 hours maximum</p>
                                </div>
                                <div className="text-column">
                                    <h4>Nightime</h4>
                                    <p>You can break the 1 hours per month rule at night while your puppy is sleeping. Make sure you monitor your puppy closely. If they awake and its been longer than 2 hours, take them out for a potty break.</p>
                                </div>

                            </div>









                        </div>
                    </div>


                    <div className="content-section white">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    First Night
                            </div>
                                <h1 className="display-heading">Doggo's first night</h1>
                                <div className="hero-details">
                                    It's a big adjustment for your doggo to move away from their breeder / shelter environment to your home. They will adjust! Here are some tips on how to help them
                        </div>
                            </div>


                            <div className="column-container">
                                <div className="text-column-three">
                                    <InfoCircleOutlined className="column-item-icon font-coral" />
                                    <h4>Your doggo is going to cry</h4>
                                    <p>Your pup's world has been turned upside down. They will be in a brand new place with strangers they don't recognize. Your pup will cry and whine, and it will be heart-wrenching.</p>
                                </div>
                                <div className="text-column-three">
                                    <ExclamationCircleOutlined className="column-item-icon font-coral" />
                                    <h4>Be Strong!</h4>
                                    <p>This will be the hardest part! It's important that you don't let them out of the crate when they cry. That reinforces that crying leads to exiting the crate. Instead, wait until they are calm before letting them out of the crate. The best way to help your doggo adjust is to let them settle in their crate</p>
                                </div>
                                <div className="text-column-three">
                                    <ExclamationCircleOutlined className="column-item-icon font-coral" />
                                    <h4>Wait for calm</h4>
                                    <p>Even if its just a second or two, wait for your pup to calm down before taking them out of the crate to prevent the association between crying and being let out</p>
                                </div>
                                <div className="text-column-three">
                                    <ExclamationCircleOutlined className="column-item-icon font-coral" />
                                    <h4>Bathroom breaks</h4>
                                    <p>Your doggo can't go the whole night without bathroom breaks. If they are sleeping, there's no need to wake them. If they wake up and its been a few hours, take them out. Always wait until they are calm before taking them out</p>
                                </div>
                                <div className="text-column-three">
                                    <ExclamationCircleOutlined className="column-item-icon font-coral" />
                                    <h4>Accidents</h4>
                                    <p>If you suspect your pup had an accident in the crate, take them out for a bathroom break and change their bedding / towel before putting them back in</p>
                                </div>



                            </div>









                        </div>
                    </div>


                    <div className="faq-section">
                        <div className="content-container">
                            <div className="title-centre">
                                <div className="guide-heading">
                                    FAQ
                            </div>
                                <h1 className="display-heading">
                                    Have more questions?
                            </h1>




                            </div>

                            <Collapse className="survival-guide-faq" ghost>
                                <Panel header="Is crate training cruel?" key="1">
                                    <p>If used properly, positive-reinforcement trainers agree that crates are positive for puppies. Crates provide a safe space for doggos</p>
                                </Panel>
                                <Panel header="Question 2" key="2">
                                    <p>Answer 2</p>
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
                                        <h2 className="font-white">You've completed the new puppy survival guide!</h2>
                                        <h5 className="font-white">You're ready to go! If you have more questions, check out our doggo resources</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/blog'>
                                            <Button className="button-cta">
                                                Doggo Resources
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <GuideFooter articles={[4, 5, 1]} />



























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