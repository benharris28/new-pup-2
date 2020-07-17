import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';


class PupHome extends React.Component {
    render() {
        const { Content } = Layout;
        return (
            <div>
                <Layout>
                    <Content
                        //style={{ padding: '0 40px' }}
                        className="page-content">

                        <               div className="back-to-checklist-button">
                            <Link to='/guide'>
                                <Button
                                    type="primary">
                                    Back to Guide Menu
                                    </Button>
                            </Link>

                        </div>


                        <div>
                            <h3>My pup is home: Help me!</h3>
                            <div>
                                Quick overview
                    <ul>
                                    <li>Your pup can't go anywhere until they're vaccinated</li>
                                    <li>Take your pup out to pee every 45 mins (or immediately after eating/drinking or waking up from a nap)</li>
                                    <li>Your pup is going to sleep a lot!</li>

                                </ul>
                            </div>
                            </div>
                            </Content>
                            <Content
                        //style={{ padding: '0 40px' }}
                        className="guide-page-content">
                            <div className="guide-content-one">
                                <div className="icon-box">
                                    <WarningOutlined className="prepare-home-icon" />
                                </div>
                                <div>
                                    <h4>Hold your horses! (err...puppies)</h4>
                                    <h5>Your pup isn't vaccinated yet! What can you do?</h5>
                                    <h6>No walks!</h6>
                                    <p>Your pup will get their first set of vaccinations on ...</p>

                                    <p>Keep your pup confined to your yard or in a contained area away from other pets and pet urine / feces. These could make your pet very sick!</p>

                                    <h6>No dog parks!</h6>
                                    <p>Please do not bring your dog to a dog park until they are licensed, complete puppy classes, and most importantly, get their rabbies vaccination</p>

                                </div>
                            </div>

                            <div className="guide-content-two">
                                <div className="icon-box">
                                    <WarningOutlined className="prepare-home-icon" />
                                </div>
                                <div>
                                    <h4>Potty time!</h4>
                                    
                                    <p>Potty training begins the minute you get home! It's all about teaching pup to their business outside - not on your floor!</p>

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

                            <div className="guide-content-three">
                                <div className="icon-box">
                                    <WarningOutlined className="prepare-home-icon" />
                                </div>
                                <div>
                                    <h4>Napping</h4>
                                    
                                    <p>Your pup will be napping constantly - that's normal!</p>

                           

                                </div>
                            </div>





                     
                        <div className="next-section-button">
                            <Link to='/food'>
                                <Button>
                                    Up Next: Pick up pup
                                    </Button>
                            </Link>


                        </div>
                    </Content>
                </Layout>

            </div>
        )
    }
}

export default PupHome;