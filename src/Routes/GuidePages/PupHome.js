import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col } from 'antd';
import { InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined, CloseOutlined, BulbOutlined } from '@ant-design/icons';
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_pee from '../../Assets/dog_pee.png'
import pup_sleep from '../../Assets/pup_sleep.png'
import light_bulb from '../../Assets/light_bulb.png'
import puppy_pee_outside_2 from '../../Assets/puppy_pee_outside_2.jpg'
import dog_inside from '../../Assets/dog_inside.jpg'
import dog_pee_rug from '../../Assets/dog_pee_rug.jpg'
import puppy_sit_treat from '../../Assets/puppy_sit_treat.jpg'
import GuideFooter from '../../Components/GuideFooter/GuideFooter'

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
                  

                 


                    <div className="content-section light-grey">
                    <div className="content-container">

                    <div className="title-centre">
                    <div className="selections coral">
                            Step 3 of 5
                        </div>
                            <h6 className="display-heading-intro font-coral">Survival Guide</h6>
                            <h1 className="display-heading">
                                Your first few hours with pup
                            </h1>
                            <div className="hero-details">
                            There are important details to know before you go anywhere
                        </div>
                          
                       

                        </div>
                      
                        </div>
                        </div>

                        <div className="content-section low-padding coral">
                    <div className="content-container">
                     
                        <div className="topics-container">
                            <div className="topic-item">
                                Restrictions for new pups
                            </div>
                            <div className="topic-item">
                                Housetraining (potty training)
                            </div>
                            <div className="topic-item"> 
                                Obedience Training
                            </div>
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
                                Housetraining
                            </div>
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
                                        <h3>Accidents Happen!</h3>
                                        </div>
                                        
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CloseOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Don’t punish your dog for having an accident inside. Instead, clean it up immediately with anti-urine spray</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">If your dog is peeing inside, pick them up and carry them out to proper spot. Praise them if they finish peeing in the right spot</span>
                                        </div>
                                        
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image" src={dog_pee_rug} alt="puppy next to soiled rug" />
                                    </div>
                                    
                                </Col>
                            </Row>
                        </div>

                       
                       
                   

                    </div>
                </div>

                <div className="cta-section-decoration">
                <div className="content-container">
                    <div className="cta-decoration light-blue">
                
                    <div className="cta-2-container">
                        <div className="cta-icon-container">
                        <BulbOutlined className="cta-icon font-coral" />
                        </div>
                        <div className="cta-2-content">
                            <h3>Pro Tip</h3>
                            <p>Pups have accidents when they wander unattended. When pup is awake, keep them tethered to you as you move about your house. Wherever you go, pup goes.</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="content-section">
                    <div className="content-container">
                    <div className="title-centre">
                    <div className="guide-heading">
                                Obedience
                            </div>
                            <h1 className="display-heading">
                                Extra Credit: Teach your doggo to "sit"
                            </h1>
                           
                            <div className="hero-details">
                            It's not as hard as it sounds!
                        </div>
                       

                        </div>
                        <div className="grid-container">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} justify="space-evenly">
                        <Col className="gutter-row" xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                 
                                        
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Use pup's food as a treat reward</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">Hold the treat up to their nose and lift your hand slightly upward. The pup will naturally lower their bum to the ground. When they do, give them the treat and praise!</span>
                                        </div>
                                        <div className="list-item-container">
                                            <div className="icon-list">
                                                <CheckOutlined className="column-item-icon font-coral" />
                                            </div>
                                            <span className="do-list-text">As pup gets the hang of it, you can add the command "sit" as you bring the treat to their nose</span>
                                        </div>
                                    
                                       
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }} style={{ padding: 0 }}>
                                    <div className="grid-image-container">
                                    <img className="grid-image" src={puppy_sit_treat} alt="puppy sitting on command" />
                                    </div>
                                    
                                </Col>
                            </Row>
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
                                <Panel header="Question 1" key="1">
                                    <p>Answer 1</p>
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
                                        <h2 className="font-white">You're almost there!</h2>
                                        <h5 className="font-white">In the next section we'll walk you through feeding your new doggo</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/guide/meal-time'>
                                            <Button className="button-cta">
                                            Step 4: Feeding Doggo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <GuideFooter articles={[4,5,1]}/>

                       
                        

                       
                       
                   

                 






     

                  












                    




                </Layout>

            </div>
        )
    }
}

export default PupHome;