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
import dog_hero_2 from '../../Assets/dog_hero_2.png'
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
                 <div className="hero light-purple">
                    <div className="container">
                    <div className="selections">
                            Checklist
                        </div>
                        <img className="hero-image" alt="dog panting" src={dog_hero_2} />
                        <div className="title-centre image-title">
                            <h1 className="display-heading">
                                Welcome to {activeDoggo}'s Checklist!
                            </h1>
                            <div className="hero-details">
                            From a step-by-step guide of what you need, to expert picks of food, to a customized surivival guide, we've got your back.
                        </div>
                       

                        </div>
                        
                    </div>
                    <div className="time-tracker-container">
                        <div className="checklist-icon-box">
                            <CalendarOutlined className="checklist-icon font-white" />
                        </div>
                        <div className="time-tracker">
                            <h5>{activeDoggo} comes home in {completeByDates.daysLeft} days. Let's get started!</h5>
                        </div>
                    </div>
                    
                </div>
             
                   
                       

             
                

                    <div className="content-section white font-white center">
                        <div className="content-container">

                    <div className="title-centre">
                                <h1 className="display-heading">How this works</h1>
                               
                            </div>
                        
                
                            <div className="grid-container">
                         
                            <Row style={{ marginBottom: 20}}>
                                
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    1
                                </div>
                                <div className="checklist-step-content">
                                    <h4>Go through each section</h4>
                                    <p>We break down puppyhood into 5 easy sections</p>
                                </div>
                                </div>
                                
                                </Col>
                         
                                
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    2
                                </div>
                                <div className="checklist-step-content">
                                <h4>Pay attention to dates</h4>
                                <p>We'll tell you when to complete each section by to make sure you're ready</p>
                                </div>
                                </div>
                                
                                </Col>
                       
                        
                                
                                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                                <div className="checklist-step-container">
                                <div className="checklist-step-count">
                                    3
                                </div>
                                <div className="checklist-step-content">
                                    <h4>Don't forget the guide</h4>
                                    <p>The last step is a complete guide to your first 24 hours with pup</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            
                            
                        </div>
                        </div>
                    </div>


                    <div className="content-section light-grey">
                        <div className="content-container">

                        <div className="title-centre">
                                <h1 className="display-heading">The Checklist</h1>
                                <div className="hero-details">
                                Go through each item and mark them complete as you go!
                                </div>
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
                        </div>
                        </div>
                




              


            </div>
        )
    }
}

export default Checklist;