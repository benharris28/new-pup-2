import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Content, Button } from 'antd';

class PickUpPup extends React.Component {
    render() {
        const { Content } = Layout;
        return (
            <div>
                <Layout>
                    <Content
                        className="page-content">
                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Guide Menu
                                    </Button>
                            </Link>

                        </div>
                        <div>
                        <h3>Time to pickup Russell!</h3>
                        <div>
                            Overview
                                <ul>
                                <li>Bring towels!</li>
                                <li>Bring a friend</li>
                                <li>Bring Russell's leash, harness, and tags</li>

                            </ul>
                        </div>
                        </div>
                        <div>
                            
                        </div>

                    </Content>
                </Layout>
            </div>
        )
    }
}

export default PickUpPup;