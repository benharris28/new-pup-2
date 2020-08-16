import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import { Layout, Badge, Card, Col, Row, Button, Avatar } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dog_crate_checklist from '../../Assets/dog_crate_checklist.png'
import dog_food_checklist from '../../Assets/dog_food_checklist.png'
import vet_checklist from '../../Assets/vet_checklist.png'
import guide_checklist from '../../Assets/guide_checklist.png'
import training_checklist from '../../Assets/training_checklist.png'
import ApiContext from '../../ApiContext';

class Checklist extends React.Component {
    static contextType = ApiContext;

    componentDidMount = () => {
       window.scrollTo(0, 0);
    }

    render() {
        const { Content } = Layout;
        const { Meta } = Card;
        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        

        const cardList = [
            {
                step: 'Step 1',
                link: '/gear',
                image: <img src={dog_crate_checklist} alt="dog crate" />,
                title: 'Get the gear',
                description: `Complete by ${completeByDates.gear}`,
                alt_text: "gear to buy",
                badge_count: 5
            },
            {
                step: 'Step 2',
                link: '/food',
                image: <img src={dog_food_checklist} alt="dog food" />,
                title: 'Find the best food',
                description: `Complete by ${completeByDates.food}`,
                alt_text: "food to buy",
                badge_count: 5
            },
            {
                step: 'Step 3',
                link: '/vet',
                image: <img src={vet_checklist} alt="veterinarian" />,
                title: 'Find a local vet',
                description: `Complete by ${completeByDates.vet}`,
                alt_text: "find a vet",
                badge_count: 5
            },
            {
                
                step: 'Step 4',
                link: '/training',
                image: <img src={training_checklist} alt="woman and dog" />,
                title: 'Sign up for puppy class',
                description: `Complete by ${completeByDates.training}`,
                alt_text: "puppy socialization",
                badge_count: 1
            },
            {
                step: 'Step 5',
                link: '/guide',
                image: <img src={guide_checklist} alt="compass" />,
                title: "Read Doggo's Survival Guide",
                description: `Complete by ${completeByDates.guide}`,
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
                            <h5>{activeDoggo}'s Checklist</h5>
                            <h2>Advice from the pros to get 100% ready for {activeDoggo}</h2>
                            <div className="show-checklist">
                                <button>Show {activeDoggo}'s Checklist</button>
                            </div>
                            
                        </div>
                     
                       

                    </div>
                    <div className="secondary-banner white center">
                        <div className="secondary-banner-content space">
                            <h2>No time to waste!</h2>
                        <div className="checklist-icon-box">
                            <CalendarOutlined className="icon black-font" />
                        </div>
                        
                        <h5>{activeDoggo} comes home in {completeByDates.daysLeft} days. Let's get started!</h5>
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
                                            <div className="checklist-card-box">
                                                <Card
                                                    className="checklist-card"
                                                    hoverable
                                                    cover={card.image}

                                                >
                                                    <div className="checklist-card-step-count">
                                                            {card.step}
                                                    </div>
                                                    <Meta className="card-content" title={card.title} description={card.description} >
                                                        
                                                    </Meta>
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