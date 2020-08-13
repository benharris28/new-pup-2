import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { Layout, Content, Badge, Space, Card, Col, Row, Progress, Button } from 'antd';
import Russ_banner from '../../Assets/Russ_banner.JPG'
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import dog_crate_checklist from '../../Assets/dog_crate_checklist.png'
import dog_food_checklist from '../../Assets/dog_food_checklist.png'
import vet_checklist from '../../Assets/vet_checklist.png'
import guide_checklist from '../../Assets/guide_checklist.png'
import training_checklist from '../../Assets/training_checklist.png'

class Checklist extends React.Component {

    componentDidMount = () => {
       window.scrollTo(0, 0);
    }

    render() {
        const { Content } = Layout;
        const { Meta } = Card;

        const cardList = [
            {
                link: '/gear',
                image: <img src={dog_crate_checklist} alt="dog crate" />,
                title: 'Get the gear',
                description: "Complete by June 25th",
                alt_text: "gear to buy",
                badge_count: 5
            },
            {
                link: '/food',
                image: <img src={dog_food_checklist} alt="dog food" />,
                title: 'Find the best food',
                description: "Complete by June 25th",
                alt_text: "food to buy",
                badge_count: 5
            },
            {
                link: '/vet',
                image: <img src={vet_checklist} alt="veterinarian" />,
                title: 'Find a local vet',
                description: "Complete by June 25th",
                alt_text: "find a vet",
                badge_count: 5
            },
            {
                link: '/training',
                image: <img src={training_checklist} alt="woman and dog" />,
                title: 'Sign up for puppy classes',
                description: "Complete by June 25th",
                alt_text: "puppy socialization",
                badge_count: 1
            },
            {
                link: '/guide',
                image: <img src={guide_checklist} alt="compass" />,
                title: "Read Doggo's Survival Guide",
                description: "Your guide to the first 24 hours of puppyhood",
                alt_text: "24 hour guide",
                badge_count: 5
            },
        ]



        return (
            <div>
                <Layout className="white">
                    <div className="guide-banner">

                    <div className="guide-banner-image purple" />

                        

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h2>Advice from the pros to get 100% ready for Russell</h2>
                            <div className="show-checklist">
                                <button>Show Russell's Checklist</button>
                            </div>
                            
                        </div>
                     
                       

                    </div>
                    <div className="secondary-banner white center">
                        <div className="secondary-banner-content space">
                        <div className="checklist-icon-box">
                            <CalendarOutlined className="icon black-font" />
                        </div>
                        
                        <h5>Russell comes home in 21 days. Let's get started!</h5>
                    </div>
                    </div>
                

                    <div className="content-section blue font-white center">
                        <div className="checklist-page content">
                            <h2 className="font-white">How this works</h2>
                            <div className="grid-container">

                                <Row className="survival-guide-steps-row font-white" justify="space-around">
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps font-white">
                                            <div className="survival-guide-steps_num">
                                                1
                                    </div>
                                            <h3>Go through each section</h3>
                                            <h5 className="font-white">We break down puppyhood into 5 easy sections</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                2
                                    </div>
                                            <h3>Pay attention to dates</h3>
                                            <h5 className="font-white">We'll tell you when to complete each section by to make sure you're ready</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={8} lg={8} xl={8}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                3
                                    </div>
                                            <h3>Don't forget the guide</h3>
                                            <h5 className="font-white">The last step is a complete guide to your first 24 hours with pup</h5>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>


                    <Content

                        //style={{ padding: '0 50px' }}
                        className="page-content">

                       <div className="page-intro">
                            <h1>Checklist Todo's</h1>
                            <h5>Go through each item and mark them complete as you go!</h5>
                        </div>

                        


                        <div className="card-box">
                            <Row
                                gutter={[40, 24]} >

                                {cardList.map(card =>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={8}
                                        key={card.link}>

                                        <Link to={card.link}>
                                            <Badge count={`${card.badge_count} items todo`} offset={[-30, 0]}>
                                            <div className="gear-card-box">
                                                <Card
                                                    className="checklist-card"
                                                    hoverable
                                                    cover={card.image}

                                                >
                                                    <Meta className="card-content" title={card.title} description={card.description} />
                                                </Card>
                                            </div>
                                            </Badge>
                                        </Link>
                                    </Col>
                                )}

                            </Row>











                        </div>
                    </Content>




                </Layout>


            </div>
        )
    }
}

export default Checklist;