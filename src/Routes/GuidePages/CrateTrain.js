import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { WarningOutlined, CheckOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import schedule_image from '../../Assets/schedule_image.png'
import light_bulb from '../../Assets/light_bulb.png'
import puppy_in_crate from '../../Assets/puppy_in_crate.jpg'
import puppy_pee_outside_2 from '../../Assets/puppy_pee_outside_2.jpg'


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
                            Step 4 of 5
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
                        <div className="content-container">
                        <div className="title-centre">
                    <div className="guide-heading">
                                Introduce crate
                            </div>
                            <h1 className="display-heading">
                                Crate Training
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
                                    <img className="grid-image" src={puppy_pee_outside_2} alt="puppy peeing in grass" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>

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
                          
                        <div>
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