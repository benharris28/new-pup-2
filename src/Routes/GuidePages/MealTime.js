import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Collapse, Row, Col, Table } from 'antd';
import { InfoCircleOutlined, ExclamationCircleOutlined, CheckOutlined, CloseOutlined, BulbOutlined } from '@ant-design/icons';
import GuideFooter from '../../Components/GuideFooter/GuideFooter'
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
                    <div className="guide-page-count">
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

                        <div className="content-section low-padding light-coral">
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

                <div className="content-section">
                    <div className="content-container">
                    <div className="title-centre">
                            <div className="guide-heading">
                                Portioning
                            </div>
                            <h1 className="display-heading">
                                How much should I feed?
                            </h1>
                            <div className="hero-details">
                            There are important details to know before you go anywhere
                        </div>
                          
                       

                        </div>
                        <div className="column-container">
                        <div className="text-column-three">
                            <InfoCircleOutlined className="column-item-icon font-coral" />
                            <h4>Check the label</h4>
                            <p>Start by checking the label, which will give guidance for either cups per day or calories per day. Make sure you divide the cups or calories per day by the number of meals you are feeding! (eg if the lable says 1 cup per day, you would feed 1/3 cup per meal if you feed three meals</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>Monitor your doggo</h4>
                            <p>Every doggo is different, and activity level, metabolism, and other factors will influence weight. If your doggo's belly starts to sag, try feeding less food per day</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>Talk to your vet</h4>
                            <p>Your vet will examine your pup and advise if you should be feeding more or less food</p>
                        </div>

                    </div>
                   

                    </div>
                </div>

                <div className="content-section">
                    <div className="content-container">
                    <div className="title-centre">
                            <div className="guide-heading">
                                Feeding
                            </div>
                            <h1 className="display-heading">
                                How to feed your doggo
                            </h1>
                            <div className="hero-details">
                            Most puppies transition from wet food to solids at around 8 weeks. When you first get your doggo, they will likely have just started the transition
                        </div>
                          
                       

                        </div>
                        <div className="column-container">
                        <div className="text-column-three">
                            <InfoCircleOutlined className="column-item-icon font-coral" />
                            <h4>Mix kibble with water</h4>
                            <p>If your pup is starting on kibble, add water to their food bowl and let it soak into the kibble until its soft. Keep this up for a few weeks until your pup gets the hang of it</p>
                            <p>After a few weeks, start to reduce the amount of water mixed into each meal until you are serving dry food</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>Stick to a schedule</h4>
                            <p>As your doggo gets used to their food, feed at the same times each day. Leave the food out only for 10 - 15 minutes. While it may be tempting, don't offer your doggo their food at other times (including some of your own food)</p>
                        </div>
                        <div className="text-column-three">
                            <ExclamationCircleOutlined className="column-item-icon font-coral" />
                            <h4>Try using the crate</h4>
                            <p>Eating new food in a new environment will be intimidating for your doggo. Try putting the food bowl in or next to the crate to help create a safe environment for doggo.</p>
                        </div>

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
                            <h4>Take doggo out for a bathroom break immediately after they finish eating or drinking</h4>
                            <p>Prevent accidents by being proactive. Most puppies will be or poo immediately after eating and drinking</p>
                        </div>
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
                                        <h5 className="font-white">In the next section we'll walk you through the first night with doggo</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/guide/crate-train'>
                                            <Button className="button-cta">
                                            Step 5: Your first night
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

export default MealTime;