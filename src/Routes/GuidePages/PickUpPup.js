import React from 'react'
import { Link } from 'react-router-dom';
import Russ_car from '../../Assets/Russ_car.JPG'
import { Layout, Content, Button, Row, Col, Collapse } from 'antd';
import { CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import stock_image from '../../Assets/stock_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_car_window from '../../Assets/dog_car_window.jpg'
import puppy_pee_outside from '../../Assets/puppy_pee_outside.jpg'
import dog_inside from '../../Assets/dog_inside.jpg'
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
                <div className="content-section light-grey">
                        <div className="content-container">

                            <div className="title-centre">
                                <div className="guide-page-count">
                                    Step 2 of 5
                        </div>
                                <h6 className="display-heading-intro font-coral">Survival Guide</h6>
                                <h1 className="display-heading">
                                    Picking up your new puppy
                            </h1>
                                <div className="hero-details">
                                We'll make sure you're prepared for this big journey!
                        </div>



                            </div>

                        </div>
                    </div>

                    <div className="content-section low-padding light-coral">
                        <div className="content-container">

                            <div className="topics-container">
                                <div className="topic-item">
                                    What do bring
                            </div>
                                <div className="topic-item">
                                    Pickup Tips
                            </div>
                                <div className="topic-item">
                                    Introducing pup to your home
                            </div>
                            </div>
                        </div>
                    </div>

               
                
               

                <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
                            <h1 className="display-heading">
                                It's time for pickup!
                            </h1>
                          
                       

                        </div>
                    <div className="image-box">
                        <img className="full-image" src={dog_car_window} alt="dog in car with head out window" />
                    </div>

                    </div>
                </div>

                <div className="cta-section-no-decoration">
                    <div className="cta-no-decoration-container">
                        <div className="cta-no-decoration-border-box">
                        <div className="cta-no-decoration-content">
                        <div className="title-centre">
                            <ExclamationCircleOutlined className="icon-header font-coral" />
                            <h1 className="display-heading">
                                Don't forget time off!
                            </h1>
                          
                       

                        </div>
                            <p>Your doggo will need constant care over the first few days. Plan ahead by arranging for time off work</p>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
                            <h1 className="display-heading">
                                What you should bring
                            </h1>
                          
                       

                        </div>
                        <div className="column-container">
                        <div className="text-column-three">
                            <CheckOutlined className="column-item-icon font-coral" />
                            <h4>A Towel</h4>
                            <p>Dogs can get nauseous and anxious during their first few trips in a car. Spread a few towels down to help catch / cleanup any mess</p>
                        </div>
                        <div className="text-column-three">
                            <CheckOutlined className="column-item-icon font-coral" />
                            <h4>A friend</h4>
                            <p>It will be a stressful drive home for you new pup. Your pup will need be held securely while driving. If possible, have a friend come with to reassure pup while you drive. If not, bring the pup's crate</p>
                        </div>
                        <div className="text-column-three">
                            <CheckOutlined className="column-item-icon font-coral" />
                            <h4>The Doggo's Gear</h4>
                            <p>Bring Russell's leash, harness, collar, tags, and some poo bags. Make sure you put them all on before you the breeder or shelter</p>
                        </div>

                    </div>
                   

                    </div>
                </div>

                <div className="cta-section-no-decoration">
                    <div className="cta-no-decoration-container">
                        <div className="cta-no-decoration-border-box">
                        <div className="cta-no-decoration-content">
                            <h3>This will be a stressful trip for your new doggo. Make sure to go straight home after pickup!</h3>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
                            <h1 className="display-heading">
                                Arrival at home
                            </h1>
                          
                       

                        </div>
                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                        <h3>Introduce them to the "potty area"</h3>
                                        <p>Before going inside, let the puppy relieve themselves in the designated bathroom spot. This will help form a habit</p>
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
                                        <h3>Introduce them to their home</h3>
                                        <p>Let them sniff around and get comfortable with their new surroundings. It is recommended to keep them on leash even inside to prevent accidents</p>
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

                <div className="cta-section-no-decoration">
                    <div className="cta-no-decoration-container">
                        <div className="cta-no-decoration-border-box">
                        <div className="cta-no-decoration-content">
                            <h3>Make sure your home is quiet and calm for your new doggo. Try to avoid "welcome home" parties!</h3>
                        </div>
                        </div>
                    </div>

                </div>

         
        

              

                    <div className="faq-section">
                        <div className="content-container">
                            <div className="title-wrap">
                                <h2 className="content-h2" style={{ marginBottom: 0 }}>Have more questions about picking up your doggo?</h2>
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
                                        <h2 className="font-white">Good luck with the pickup!</h2>
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