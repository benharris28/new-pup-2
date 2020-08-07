import React from 'react'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { Layout, Content, Button } from 'antd';
import { LeftOutlined, RightOutlined, BulbOutlined, ToolOutlined, ClearOutlined } from '@ant-design/icons';


class PrepareHome extends React.Component {
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
            <Layout>
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
                
               
                <Content
                    //style={{ padding: '0 40px' }}
                    className="page-content">




                    <div>
                        <h3>Prepare your home</h3>
                        <div>
                            Task Overview
                    <ul>
                                <li>Clean up any items that can be chewed or swallowed</li>
                                <li>Set up your crate</li>
                                <li>Put out bowls and toys</li>

                            </ul>
                        </div>

                        <div className="icon-box">
                            <ClearOutlined className="prepare-home-icon" />
                        </div>

                        <div>
                            <h4>Hide any items that can be chewed</h4>
                            <p>Dogs will chew anything - including your furniture! Make sure to hide small itmems that can be swallowed and anything that you don't want your pup getting into</p>
                        </div>

                        <div className="icon-box">
                            <ToolOutlined className="prepare-home-icon" />
                        </div>
                        <h4>Set up your crate</h4>
                        <p>Choose the location of your crate. Will your puppy be sleeping in your bedroom or in another room?</p>
                        <h5>Watch this video on how to set your crate</h5>

                        <div>
                            <YouTube videoId="n6MHdWFnU7E" opts={opts} onReady={this._onReady} />
                        </div>

                        <div>
                            <div className="icon-box">
                                <BulbOutlined className="prepare-home-icon" />
                            </div>

                            <h5>Place a blanket over the crate, leaving only the front uncovered </h5>
                            <img className="page-image" src="https://www.rover.com/blog/wp-content/uploads/2020/01/61d4qnb48GL.jpg" alt="crate cover" />
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
        )
    }
}

export default PrepareHome