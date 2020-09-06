import React from 'react'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Row, Col, Collapse } from 'antd';
import { LeftOutlined, RightOutlined, BulbOutlined, ToolOutlined, ClearOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'
import dog_garbage from '../../Assets/dog_garbage.jpg'
import dog_in_crate_covered_test_2 from '../../Assets/dog_in_crate_covered_test_2.png'
import GuideFooter from '../../Components/GuideFooter/GuideFooter'



class PrepareHome extends React.Component {
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }



    render() {
        const { Content } = Layout;
        const { Panel } = Collapse;
      
        const opts = {

            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <Layout className="white">
                <div className="content-section light-grey">
                        <div className="content-container">

                            <div className="title-centre">
                                <div className="guide-page-count">
                                    Step 1 of 5
                        </div>
                                <h6 className="display-heading-intro font-coral">Survival Guide</h6>
                                <h1 className="display-heading">
                                    Prepare your home for a new puppy
                            </h1>
                                <div className="hero-details">
                                It's time to puppy-proof your home. We'll explain how to make your home safe and inviting for pup, and to set up a safe place for him to sleep
                        </div>



                            </div>

                        </div>
                    </div>

                    <div className="content-section low-padding light-coral">
                        <div className="content-container">

                            <div className="topics-container">
                                <div className="topic-item">
                                    Puppy proofing
                            </div>
                                <div className="topic-item">
                                    Crate Setup
                            </div>
                                <div className="topic-item">
                                    Pro Tips
                            </div>
                            </div>
                        </div>
                    </div>

              

                <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
                                <h1 className="display-heading">How to puppy proof</h1>
                               
                            </div>
                    <div className="image-box">
                        <img className="full-image" src={dog_garbage} alt="dog next to tipped over garbage can" />
                    </div>
                    <div className="title-centre">
                                <h3>Puppies can get into anything...</h3>
                               
                            </div>
                            <div className="column-loop">
                         
                        
                             <div className="item-step-container">
                             <div className="item-step-count">
                                 1
                             </div>
                             <div className="item-step-content">
                             <h5>Hide any items that can be chewed or swallowed</h5>

                                <p>Socks, baby toys, toilet paper. Your pup will be an expert at getting into anything. Make sure everything is put away where pup can't access it</p>
                               
                             </div>
                             </div>
                             
                        
                      
                             
                       
                             <div className="item-step-container">
                             <div className="item-step-count">
                                 2
                             </div>
                             <div className="item-step-content">
                             <h5>Put away anything that can be knocked over easily</h5>

                                        <p>Think heavy things that would hurt pup if toppled over</p>
                             
                             </div>
                             </div>
                             
                    
                    
                     
                    
                             <div className="item-step-container">
                             <div className="item-step-count">
                                 3
                             </div>
                             <div className="item-step-content">
                             <h5>Safely store medications, cleaning supplies, etc</h5>

                                <p>Nothing should be kept open where pup could get it</p>
                                 
                             </div>
                             </div>
                             
                 
                             <div className="item-step-container">
                             <div className="item-step-count">
                                 4
                             </div>
                             <div className="item-step-content">
                                 <h5>Invest in taller garbage cans - with lids! </h5>
                                 <p> If your garbage is not in a cupboard or closet, make sure its closed and as tall as possible</p>
                                 
                             </div>
                             </div>
                             
                     
                         
                     </div>

                    </div>
                </div>

                

              

                <div className="content-section white">
                    <div className="content-container">
                    <div className="title-centre">
                                <h1 className="display-heading">How to set up your crate</h1>
                               
                            </div>
                            <div className="video-container">
                            <YouTube videoId="n6MHdWFnU7E" opts={opts} onReady={this._onReady} />
                            </div>
                        <div>
                    <div className="column-container">
                        <div className="text-column">
                            <h4>Wait! This crate looks like a jail cell!</h4>
                            <p>Force-free dog trainers agree that crates are important for puppies. While they make look like a jail, they actually provide a safe, enclosed space mimicking a den which they are used to</p>
                        </div>
                        <div className="text-column">
                            <h4>Ever notice how dogs tend to find small, enclosed spaces to nap or sleep?</h4>
                            <p>Dogs need small spaces to feel safe. During a stressful time like moving to a forever home, a crate becomes a safe haven for your dog</p>
                        </div>

                    </div>



                           



                        </div>

                    </div>
                </div>

                <div className="content-section light-grey">
                    <div className="content-container">
                    <div className="selections">
                            Pro Tip
                        </div>
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                   
                                        <h1 className="font-blue">Crate Setup</h1>
                                        <h5 className="font-blue">Drape a blanket over the crate, except for the opening, to provide an extra sense of security for your pup</h5>
                                    </div>





                                </div>

                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={24} lg={12}>

                                <img className="stock-image" src={dog_in_crate_covered_test_2} alt="dog in crate with a cover" />
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="faq-section">
                        <div className="content-container">
                            <div className="title-wrap">
                                <h2 className="content-h2" style={{ marginBottom: 0 }}>Have more questions about getting your home ready?</h2>
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
                                        <h2 className="font-white">Next Section</h2>
                                        <h5 className="font-white">Picking up your doggo</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/guide/pickup-pup'>
                                            <Button className="button-cta">
                                                Up Next: Picking Up Your Doggo
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <GuideFooter articles={[1,2,3]}/>

               

            </Layout>
        )
    }
}

export default PrepareHome