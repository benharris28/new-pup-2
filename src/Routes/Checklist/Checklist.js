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
                title: "Read Doggo's 24 hour survival guide",
                description: "Everything you needt to know, including how to get ready, give your first meal, housetrain, and more!",
                alt_text: "24 hour guide",
                badge_count: 5
            },
        ]



        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <img className="guide-banner-image" src={Russ_banner} alt="puppy" />

                        

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h3>Advice from the pros to get 100% ready for Russell</h3>

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

                        <div className="progress-bar-box">
                            <ProgressBar />
                        </div>


                        <div className="card-box">
                            <Row
                                gutter={[16, 24]} >

                                {cardList.map(card =>
                                    <Col
                                        className="gutter-row" sm={24} md={8}
                                        key={card.link}>

                                        <Link to={card.link}>
                                            <Badge count={`${card.badge_count} items todo`} offset={[-30, 0]}>
                                                <Card
                                                    className="card"
                                                    hoverable
                                                    cover={<img className="card-image" alt={card.alt_text} src={card.image} />}

                                                >
                                                    <Meta className="card-text" title={card.title} description={card.description} />
                                                </Card>
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