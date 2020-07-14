import React from 'react';
import { Link } from 'react-router-dom'
import Trainers from '../../BackupData/Trainers'
import ApiContext from '../../ApiContext';
import MarkCompleteStandAlone from '../../Components/MarkCompleteStandAlone/MarkCompleteStandAlone'
import { Layout, Content, Button, Alert, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Training extends React.Component {

    static contextType = ApiContext;

    state = {
        trainers: Trainers.trainers
    }
    render() {
        const { Content } = Layout;
        const { trainers } = this.state;

        const points = [
            {
                image: null,
                title: 'Accept handling from humans, groomers, and vets'
            },
            {
                image: null,
                title: 'Prevent fear, anxiety, and depression'
            },
            {
                image: null,
                title: 'Practice being left alone / housetrained'
            },
            {
                image: null,
                title: 'Learn how to play appropriately with other dogs'
            },

            

        ]

        return (
            <div>
                <Layout>
                    <Content
                        //style={{ padding: '0 50px' }}
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

                        <div className="page-intro">
                            <h1>Let's socialize your pup</h1>
                        </div>
                        <div>
                            It's a scary world for new puppies - loud noises, lots of humans, vet visits, and other dogs! Puppy classes are extremely important to prepare your dog for this crazy world!
                        </div>
                        
                        <div className="training-detail">
                            <h4>What you'll learn</h4>
                            <div className="training-learning-points">
                                {points.map(point => 
                                    <div className="training-action">
                                        <Avatar className="training-avatar" size={50} icon={<UserOutlined />} />
                                        <div className="training-content">
                                        <h6>{point.title}</h6>
                                        </div>
                                        
                                    </div>
                            )}
                            
                            </div>

                        </div>
                        <div>
                            <h4>Here are some recommended puppy classes near you</h4>
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