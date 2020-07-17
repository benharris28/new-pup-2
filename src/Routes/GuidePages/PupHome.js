import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button } from 'antd';
import { LeftOutlined, RightOutlined, BulbOutlined, ToolOutlined, ClearOutlined } from '@ant-design/icons';


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

                    <div className="guide-progress">
                        <h6>Survival Guide</h6>

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
                        
                        <div className="icon-box">
                            <ClearOutlined  className="prepare-home-icon" />
                        </div>

                        <div>
                            <h4>Hide any items that can be chewed</h4>
                            <p>Dogs will chew anything - including your furniture! Make sure to hide small itmems that can be swallowed and anything that you don't want your pup getting into</p>
                        </div>
                       
                        <div className="icon-box">
                            <ToolOutlined className="prepare-home-icon" />
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
     
            </div>
        )
    }
}

export default PupHome;