import React from 'react'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Row, Col, Collapse } from 'antd';
import { LeftOutlined, RightOutlined, BulbOutlined, ToolOutlined, ClearOutlined } from '@ant-design/icons';
import food_image from '../../Assets/food_image.png'
import survival_guide_headshot from '../../Assets/survival_guide_headshot.png'



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

                    <div className="grid-container">


                        <Row justify="space-around" >
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide'>
                                    <Button className="survival-guide-header-button">Guide Home</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/prepare-home'>
                                    <Button className="survival-guide-header-button selected">Getting Ready</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/pickup-pup'>
                                    <Button className="survival-guide-header-button">Pick Up Pup</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/pup-home'>
                                    <Button className="survival-guide-header-button">Pup is home!</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/meal-time'>
                                    <Button className="survival-guide-header-button">First meal</Button>
                                </Link>

                            </Col>
                            <Col className="survival-guide-banner-col" xs={8} sm={8} md={4} lg={4} xl={4}>
                                <Link to='/guide/crate-train'>
                                    <Button className="survival-guide-header-button">House training</Button>
                                </Link>

                            </Col>





                        </Row>
                    </div>
                </div>


                <div className="content-section blue">
                    <div className="checklist-page content">

                        <div className="section-count">Section 1</div>
                        <h3>Getting ready for pup</h3>
                        <h5>It's time to puppy-proof your home. We'll explain how to make your home safe and inviting for pup, and to set up a safe place for him to sleep</h5>


                    </div>
                </div>

                <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <Row gutter={[40, 24]} className="grain">
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <h2>How to puppy proof</h2>
                                    <div className="content-group">
                                        <h5>Hide any items that can be chewed or swallowed</h5>

                                        <p>Socks, baby toys, toilet paper. Your pup will be an expert at getting into anything. Make sure everything is put away where pup can't access it</p>
                                    </div>

                                    <div className="content-group">
                                        <h5>Put away anything that can be knocked over easily</h5>

                                        <p>Think heavy things that would hurt pup if toppled over</p>
                                    </div>

                                    <div className="content-group">
                                        <h5>Safely store medications, cleaning supplies, etc</h5>

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



                <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                            <Col className="video-link" xs={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={24}>

                                <YouTube videoId="n6MHdWFnU7E" opts={opts} onReady={this._onReady} />
                            </Col>

                            <Col className="gutter-row" xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={24} lg={24}>
                                <div className="row-content-intro">
                                    <h2>Set up your crate</h2>
                                    <h5>Watch this video for instructions on how to set up your crate</h5>
                                </div>
                            </Col>


                        </Row>
                        <div>


                            <h4>Wait! This crate looks like a jail cell!</h4>
                            <p>Force-free dog trainers agree that crates are important for puppies. While they make look like a jail, they actually provide a safe, enclosed space mimicking a den which they are used to</p>
                            <h4>Ever notice how dogs tend to find small, enclosed spaces to nap or sleep?</h4>
                            <p>Dogs need small spaces to feel safe. During a stressful time like moving to a forever home, a crate becomes a safe haven for your dog</p>




                        </div>

                    </div>
                </div>

                <div className="content-section light-purple">
                    <div className="checklist-page content space grain-free">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">

                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                <div className="grain-content">
                                    <div className="row-content-intro">
                                        <h3>Pro Tip</h3>
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
                <div className="content-section white">
                    <div className="checklist-page content space grain-free">
                        <h2>FAQ</h2>
                        <Collapse accordion className="survival-guide-faq">
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