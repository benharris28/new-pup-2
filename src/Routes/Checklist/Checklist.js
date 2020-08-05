import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { Layout, Content, Badge, Space, Card, Col, Row, Progress, Button } from 'antd';
import Russ_banner from '../../Assets/Russ_banner.JPG'
import { ClockCircleOutlined } from '@ant-design/icons';

class Checklist extends React.Component {

    componentDidMount = () => {
        // Get data from context
    }

    render() {
        const { Content } = Layout;
        const { Meta } = Card;

        const cardList = [
            {
                link: '/gear',
                image: "https://www.rover.com/blog/wp-content/uploads/2020/01/Screen-Shot-2020-01-21-at-1.41.21-PM.png",
                title: 'Get the gear',
                description: "Complete by June 25th",
                alt_text: "gear to buy",
                badge_count: 5
            },
            {
                link: '/food',
                image: "https://i.insider.com/5b1fc0281ae6621a008b4fb2?width=1100&format=jpeg&auto=webp",
                title: 'Find the best food',
                description: "Complete by June 25th",
                alt_text: "food to buy",
                badge_count: 5
            },
            {
                link: '/vet',
                image: "https://trupanion.com/blog/wp-content/uploads/2019/04/ThankYourVeterinarian-1024x682.jpg",
                title: 'Find a local veterinarian',
                description: "Complete by June 25th",
                alt_text: "find a vet",
                badge_count: 5
            },
            {
                link: '/training',
                image: "https://tailblazerspets.com/blog/wp-content/uploads/2015/02/golden-pups.png",
                title: 'Sign up for puppy socialization',
                description: "Complete by June 25th",
                alt_text: "puppy socialization",
                badge_count: 1
            },
            {
                link: '/guide',
                image: "https://dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg",
                title: "Read Doggo's Survival Guide",
                description: "Your guide to the first 24 hours of puppyhood",
                alt_text: "24 hour guide",
                badge_count: 5
            },
        ]



        return (
            <div>
                <Layout className="dark-yellow">
                    <div className="guide-banner">

                    <div className="guide-banner-image purple" />

                        

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h2>Advice from the pros to get 100% ready for Russell</h2>

                        </div>

                    </div>
                    <div className="secondary-banner">
                        <div className="checklist-icon-box">
                            <ClockCircleOutlined className="clock-icon" />
                        </div>
                        
                        <h5>Russell comes home in 21 days. Let's get started!</h5>
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
                                        className="gutter-row" sm={24} md={12} lg={8}
                                        key={card.link}>

                                        <Link to={card.link}>
                                            <Badge count={`${card.badge_count} items todo`} offset={[-30, 0]}>
                                            <div className="gear-card-box">
                                                <Card
                                                    className="checklist-card"
                                                    hoverable
                                                    cover={<img className="card-image" alt={card.alt_text} src={card.image} />}

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