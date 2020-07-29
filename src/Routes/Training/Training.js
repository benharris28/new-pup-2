import React from 'react';
import { Link } from 'react-router-dom'
import Trainers from '../../BackupData/Trainers'
import ApiContext from '../../ApiContext';
import MarkCompleteStandAlone from '../../Components/MarkCompleteStandAlone/MarkCompleteStandAlone'
import { Layout, Content, Button, Alert, Card, Avatar, Row, Col } from 'antd';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


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

                    <div className="guide-banner">

                        <div className="guide-banner-image" />

                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
                                </Button>
                            </Link>

                        </div>

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h3>Puppy Socialization</h3>

                        </div>

                    </div>
                    <div className="content-section white">
                    <div className="checklist-page content center">
                        <div className="checklist-page-section-intro">
                                <h3>Let's socialize your pup!</h3>
                                <h5>It's a scary world for new puppies - loud noises, lots of humans, vet visits, and other dogs! Puppy classes are extremely important to prepare your dog for this crazy world!</h5>
                            </div>
                    </div>
                    </div>

                    <div className="content-section green">
                        <div className="checklist-page content center">
                            <div className="checklist-page-alert">
                                <ExclamationCircleOutlined className="checklist-icon" />
                                <h3>Heads up!</h3>
                                <h5>Experts recommend completing socialization before Russell is 12 weeks old (July 12th)</h5>
                            </div>

                        </div>
                    </div>

                    <div className="content-section white">


                        <div className="checklist-page content center">
                            <div className="checklist-page-section-intro">
                                <h3>Why should I sign up for puppy class?</h3>
                                <h5>Puppy classes teach new pups vital skills to help them adapt and develop</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >
                                    {points.map(point =>

                                    <Col
                                        className="gutter-row" sm={24} md={12} lg={6}>
                                        <div className="nutrition-type-item">
                                            <div className="food-type-image-box">

                                            </div>
                                            <h4>{point.title}</h4>
                                            
                                        </div>
                                    </Col>
                                    )}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="content-section green">
                        <div className="checklist-page content center">
                        <div>
                            <h3>Here are some recommended puppy classes near you</h3>
                            {trainers.map(trainer =>
                                <Card className="trainer-card" key={trainer.trainer_id} type="inner" title={trainer.name} extra={<a target='_blank' rel="noopener noreferrer" href={`${trainer.link}`}>Site</a>}>
                                    <p>{trainer.blurb}</p>
                                    <p>{trainer.address}</p>
                                </Card>
                            )}

                        </div>

                        </div>
                    </div>
                    <div className="next-section-button">
                        <Link to='/guide'>
                            <Button>
                                Up Next: 24 Hour Guide
                                    </Button>
                        </Link>

                    </div>


                   
                </Layout>


            </div>
        )
    }
}

export default Training;