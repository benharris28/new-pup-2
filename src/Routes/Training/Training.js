import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Button, Alert, Card } from 'antd';

class Training extends React.Component {
    render() {
        const { Content } = Layout;

        return (
            <div>
                <Layout>
                    <Content
                        style={{ padding: '0 50px' }}
                        className="page-content">
                        
                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button 
                                    type="primary">
                                        Back to checklist
                                </Button>
                            </Link>
                                    
                        </div>

                        <div className="alert-box">
                            <Alert
                                message="Heads Up!"
                                description="Experts recommend completing socialization before Russell is 12 weeks old (July 12th)"
                                type="warning"
                                showIcon
                                closable
                                /> 
                        </div>

                        <div>
                            <h1>Let's socialize your pup</h1>
                        </div>
                        <div>
                            Not just about play - socializing your puppy is amongst the most important steps to raising a well-adjusted pup who is not fearful and plays well with humans and other dogs
                        </div>
                        
                        <div>
                            <h5>Here are some recommended socialization classes near you</h5>
                            
                                <Card type="inner" title="When Hounds Fly" extra={<a href="#">More</a>}>
                                    Inner Card content
                                </Card>
                        </div>
                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Training;