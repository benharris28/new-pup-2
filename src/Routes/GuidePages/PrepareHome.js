import React from 'react'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, BulbOutlined, ToolOutlined, ClearOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'



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
        const opts = {

            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <Layout className="white">
                <div className="survival-guide-banner">

                    <div className="survival-guide-banner-image white" />

                    <div className="back-to-checklist-button-test">
                        <Link to='/guide'>
                            <Button
                                type="primary">
                                Back to guide menu
                            </Button>
                        </Link>

                    </div>

                    <div className="survival-guide-banner-title">
                        <h5 className="survival-guide-title">Doggo Survival Guide</h5>
                        <div className="step-counter"><h6>Step 1 of 5</h6></div>
                        <h1>Prepare your home for pup</h1>

                    </div>

                </div>

                <div className="content-section dark-yellow">
                    <div className="checklist-page content">
                        <div className="checklist-page-alert font-black">

                            <h3>What you need to know</h3>
                            <h5>It's time to puppy-proof your home. We'll explain how to make your home safe and inviting for pup, and to set up a safe place for him to sleep</h5>
                        </div>

                    </div>
                </div>

                <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <Row gutter={[40, 24]} className="grain">
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <h4>How to puppy proof</h4>
                                    <div className="content-group">
                                        <h6>Hide any items that can be chewed or swallowed</h6>

                                        <p>Socks, baby toys, toilet paper. Your pup will be an expert at getting into anything. Make sure everything is put away where pup can't access it</p>
                                    </div>

                                    <div className="content-group">
                                        <h6>Put away anything that can be knocked over easily</h6>

                                        <p>Think heavy things that would hurt pup if toppled over</p>
                                    </div>

                                    <div className="content-group">
                                        <h6>Safely store medications, cleaning supplies, etc</h6>

                                        <p>Nothing should be kept open where pup could get it</p>
                                    </div>


                                    
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <img className="food-image" src={food_image} alt="food stock" />
                            </Col>
                        </Row>

                    </div>
                </div>

                <div className="content-section light-purple">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }}gutter={[40, 24]} className="grain">
                            <Col className="gutter-row" xs={24} sm={24} md={24} lg={12}>
                               
                                <YouTube videoId="n6MHdWFnU7E" opts={opts} onReady={this._onReady} />
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                            <div className="grain-content">
                                <div className="row-content-intro">
                                    <h4>Set up your crate</h4>
                                    <h5>Watch this video for instructions on how to set up your crate</h5>
                                </div>
                                   
                                    <h5>Wait! This crate looks like a jail cell!</h5>
                                    <p>Force-free dog trainers agree that crates are important for puppies. While they make look like a jail, they actually provide a safe, enclosed space mimicking a den which they are used to</p>
                                    <h5>Ever notice how dogs tend to find small, enclosed spaces to nap or sleep?</h5>
                                    <p>Dogs need small spaces to feel safe. During a stressful time like moving to a forever home, a crate becomes a safe haven for your dog</p>
                                 


                                    
                                </div>
                                
                            </Col>
                            
                            
                        </Row>

                    </div>
                </div>
                <div className="content-section light-purple">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }}gutter={[40, 24]} className="grain">
                            
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                            <div className="grain-content">
                                <div className="row-content-intro">
                                    <h4>Pro Tip</h4>
                                    <h5>Drape a blanket over the crate, except for the opening, to provide an extra sense of security for your pup</h5>
                                </div>
                                   
                    


            
                                </div>
                                
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={24} lg={12}>
                               
                                <img className="stock-image" src="https://www.rover.com/blog/wp-content/uploads/2020/01/61d4qnb48GL.jpg" alt="crate cover" />
                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="next-section-button dark-yellow">
                    <div>
                            <h4>Home feeling a bit safer for pup?</h4>
                            <h5>Let's get you ready to pick up Russell!</h5>
                        </div>
                        <Link to='/guide/pickup-pup'>
                            <Button>
                                Step 2: Pick up pup
                                    </Button>
                        </Link>

                    </div>
                  
            </Layout>
        )
    }
}

export default PrepareHome