import React from 'react';
import { Link } from 'react-router-dom'
import Trainers from '../../BackupData/Trainers'
import ApiContext from '../../ApiContext';
import MarkCompleteStandAlone from '../../Components/MarkCompleteStandAlone/MarkCompleteStandAlone'
import stock_image from '../../Assets/stock_image.png';
import { Layout, Content, Button, Alert, Card, Avatar, Row, Col } from 'antd';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


class Training extends React.Component {

    static contextType = ApiContext;

    state = {
        trainers: Trainers.trainers
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
     }

    render() {
        const { Content } = Layout;
        const { trainers } = this.state;

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        const points = [
            {
                number: 1,
                title: 'Accept handling from humans, groomers, and vets'
            },
            {
                number: 2,
                title: 'Prevent fear, anxiety, and depression'
            },
            {
                number: 3,
                title: 'Practice being left alone / housetrained'
            },
            {
                number: 4,
                title: 'Learn how to play appropriately with other dogs'
            },



        ]

        return (
            <div>
                <Layout>

                    <div className="guide-banner">

                        <div className="guide-banner-image dark-purple" />

                       

                        <div className="guide-banner-title">
                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
                                </Button>
                            </Link>

                        </div>
                            <h5>{activeDoggo}'s Checklist</h5>
                            <h1>Puppy Classes</h1>

                        </div>

                    </div>

                    <div className="content-section white">
                        <div className="checklist-page content">
                        <Row style={{ margin: 0 }} gutter={[40, 24]} className="grain">
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} style={{ padding: 0 }}>
                                    <div className="grid-content">
                                        <h2>Let's socialize your doggo!</h2>
                                        <h5>It's a scary world for new puppies - loud noises, lots of humans, vet visits, and other dogs! Puppy classes are extremely important to prepare your dog for this crazy world!</h5>
                                    </div>
                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    <img className="stock-image" src={stock_image} alt="stock" />
                                </Col>
                            </Row>
                            
                        </div>
                    </div>
                  

                    <div className="content-section pink font-white">
                        <div className="checklist-page content center">
                            <div className="checklist-page-alert font-white">
                                <ExclamationCircleOutlined className="checklist-icon" />
                                <h3>Heads up!</h3>
                                <h5>Experts recommend completing socialization before {activeDoggo} is 12 weeks old <span className="complete-by-date">({completeByDates.training})</span></h5>
                            </div>

                        </div>
                    </div>

                   
                    <div className="content-section blue">


                        <div className="checklist-page content">
                            <div className="checklist-page-section-intro">
                                <h2>Do I really need puppy classes?</h2>
                                <h5>Yes! Puppy classes teach new pups vital skills to help them adapt and develop</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >
                                    {points.map(point =>

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        
                                            <Row>
                                                <Col style={{ maxWidth: 30 }} className="gutter-row" xs={12} sm={12} md={12} lg={12}>
                                                <div className="survival-guide-steps">
                                                    {point.number}
                                                </div>
                                                </Col>
                                                <Col style={{ width: 200}}className="gutter-row" xs={12} sm={12} md={12} lg={12}>
                                                <div>
                                                    <h5>{point.title}</h5>
                                                </div>
                                                </Col>
                                            </Row>
                                            
                                        
                                         
                                            
                                            
                                       
                                    </Col>
                                    )}
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="checklist-page content center">
                        <div className="trainer-container">
                            <h2>Here are some recommended puppy classes near you</h2>
                            {trainers.map(trainer =>
                                <Card className="trainer-card" key={trainer.trainer_id} type="inner" title={trainer.name} extra={<a target='_blank' rel="noopener noreferrer" href={`${trainer.link}`}>Site</a>}>
                                    <p>{trainer.blurb}</p>
                                    <p>{trainer.address}</p>
                                </Card>
                            )}

                        </div>

                        </div>
                    </div>
                    <div className="next-section-button dark-purple">
                        <div>
                            <h4 className="font-white">You're doing awesome!</h4>
                            <h5 className="font-white">Picked your puppy class? Let's keep this momentum going!</h5>
                        </div>
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