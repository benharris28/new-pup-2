import React from 'react';
import { Link } from 'react-router-dom'
import Trainers from '../../BackupData/Trainers'
import ApiContext from '../../ApiContext';
import MarkCompleteStandAlone from '../../Components/MarkCompleteStandAlone/MarkCompleteStandAlone'
import { Layout, Content, Button, Alert, Card } from 'antd';

class Training extends React.Component {
    
    static contextType = ApiContext;
    
    state = {
        trainers: Trainers.trainers
    }
    render() {
        const { Content } = Layout;
        const { trainers } = this.state;

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
                                {trainers.map(trainer => 
                                    <Card className="trainer-card" key={trainer.trainer_id} type="inner" title={trainer.name} extra={<a target='_blank' rel="noopener noreferrer" href={`${trainer.link}`}>Site</a>}>
                                        <p>{trainer.blurb}</p>
                                        <p>{trainer.address}</p>
                                    </Card>
                                )}
                                
                        </div>
                        <MarkCompleteStandAlone />
                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Training;