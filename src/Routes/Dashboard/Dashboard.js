import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import canned_food_square from '../../Assets/canned_food_square.png'
import dog_hero_nutrition from '../../Assets/dog_hero_nutrition.png'
import dog_crate_checklist from '../../Assets/dog_crate_checklist.png'
import dog_food_checklist from '../../Assets/dog_food_checklist.png'
import vet_checklist from '../../Assets/vet_checklist.png'
import guide_checklist from '../../Assets/guide_checklist.png'
import training_checklist from '../../Assets/training_checklist.png'
import dog_gear_dash from '../../Assets/dog_gear_dash.png'
import tom_sawyer_square from '../../Assets/tom_sawyer_square.png'
import dog_vet_dash from '../../Assets/dog_vet_dash.png'
import dog_train_dash_background from '../../Assets/dog_train_dash_background.png'
import dog_wellness_dash from '../../Assets/dog_wellness_dash.png'
import dog_supplement_newsfeed from '../../Assets/dog_supplement_newsfeed.png'


import { Layout, Button, Row, Col, Collapse, Card, Badge } from 'antd';

class Dashboard extends React.Component {
    static contextType = ApiContext;

    state = {
        format: '',
        choice: 0
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    setFormat = (format) => {
        this.setState({
            format: format
        })
    }


    handleResize = () => {
        this.setState({
            windowSize: window.innerWidth
        })
    }

    setTab = (choice) => {
        this.setState({
            choice: choice
        })
    }

    render() {

        console.log(this.state.food)
        const width = window.addEventListener('resize', this.handleResize);
        const fullWidth = global.window.innerWidth;
        console.log(fullWidth)
        console.log(this.state.windowSize)
        const { Panel } = Collapse;

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name
        const { Meta } = Card;
 

        const cardList = [
            {
                step: 'Step 1',
                link: '/gear',
                image: <img src={dog_gear_dash} alt="dog crate" />,
                title: 'Gear Store',
                description: "The best products for Russell shipped right to your door",
                alt_text: "gear to buy",
                badge_count: 5
            },
            {
                step: 'Step 2',
                link: '/food',
                image: <img src={tom_sawyer_square} alt="dog food" />,
                title: 'Food Advisor',
                description: "Customized food and supplement recommendations to make Russell thrive",
                alt_text: "food to buy",
                badge_count: 5
            },
            {
                step: 'Step 3',
                link: '/vet',
                image: <img src={dog_vet_dash} alt="veterinarian" />,
                title: 'Vet Listing',
                alt_text: "find a vet",
                badge_count: 5
            },
            {
                
                step: 'Step 4',
                link: '/training',
                image: <img src={dog_train_dash_background} alt="dog and trainer" />,
                title: 'Training Classes',
                alt_text: "puppy socialization",
                badge_count: 1
            },
            {
                step: 'Step 5',
                link: '/guide',
                image: <img src={dog_wellness_dash} alt="dog running through forest" />,
                title: "Health & Wellness Tips",
                alt_text: "24 hour guide",
                badge_count: 5
            },
        ]


        return (
            <div>
                <Layout className="white">
                    

                    <div className="hero light-blue">
                    <div className="container">
                        <div className="selections">
                           Dashboard
                        </div>
                        <img className="hero-image" alt="dog panting" src={dog_hero_nutrition} />
                        <div className="title-centre image-title">
                            
                            <h1 className="display-heading">
                                Welcome to {activeDoggo}'s Doggo Hub!
                            </h1>
                       


                        </div>

                    </div>
                    

                </div>
                    <div className="content-section white">


                        <div className="content-container">
                        <div className="title-wrapper">
                                <h2>Russell's Newsfeed</h2>
                            </div>
                         
                           
                           
                                <Row
                                    gutter={[40, 24]}
                                >

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="newsfeed-feature">
                                        <div role="listitem" className="newsfeed-list-item-container">
                                            <Link to='/checklist'>
                                                <div className="newsfeed-list-item w-inline-block">
                                                <div className="feature-newsfeed-image-box">
                                                    <img className="feature-newsfeed-image" src={dog_wellness_dash} alt="dog running" />
                                                </div>
                                                <div className="feature-newsfeedcontent">
                                                    <div className="newsfeed-category-title">Category</div>
                                                    <h4 className="feature-heading">Feature Newsfeed Item</h4>
                                                    <p className="newsfeed-item-detail">Details about this newsfeed item</p>
                                                </div>
                                                </div>
                                            </Link>
                                        </div>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                    
                                    <div className="newsfeed-list">
                                        <div role="listitem" className="newsfeed-list-item-container">
                                            <Link to='/checklist'>
                                                <div className="newsfeed-list-item">
                                                <div className="newsfeed-item-image-box">
                                                    <img className="newsfeed-item-image" src={dog_supplement_newsfeed} alt="food stock" />
                                                </div>
                                                <div className="newsfeed-item-content">
                                                    <div className="newsfeed-category-title">Category</div>
                                                    <h4 className="newsfeed-item-heading">Newsfeed Item 1</h4>
                                                    <p className="newsfeed-item-detail">Details about this newsfeed item</p>
                                                </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div role="listitem" className="newsfeed-list-item-container">
                                            <Link to='/checklist'>
                                                <div className="newsfeed-list-item">
                                                <div className="newsfeed-item-image-box">
                                                    <img className="newsfeed-item-image" src={canned_food_square} alt="food stock" />
                                                </div>
                                                <div className="newsfeed-item-content">
                                                    <div className="newsfeed-category-title">Category</div>
                                                    <h4 className="newsfeed-item-heading">Newsfeed Item 1</h4>
                                                    <p className="newsfeed-item-detail">Details about this newsfeed item</p>
                                                </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div role="listitem" className="newsfeed-list-item-container">
                                            <Link to='/checklist'>
                                                <div className="newsfeed-list-item">
                                                <div className="newsfeed-item-image-box">
                                                    <img className="newsfeed-item-image" src={dog_vet_dash} alt="food stock" />
                                                </div>
                                                <div className="newsfeed-item-content">
                                                    <div className="newsfeed-category-title">Category</div>
                                                    <h4 className="newsfeed-item-heading">Newsfeed Item 1</h4>
                                                    <p className="newsfeed-item-detail">Details about this newsfeed item</p>
                                                </div>
                                                </div>
                                            </Link>
                                        </div>
                                        </div>
                                       
                                      
                                        
                                    </Col>

                                </Row>
                            </div>
                        </div>
                 




                    <div className="content-section light-blue">
                        <div className="content-container">
                            <div className="title-wrapper">
                                <h2>Russell's Dog Store</h2>
                            </div>

                            <div className="card-box">
                            <Row
                                gutter={[40, 24]} >

                                {cardList.map(card =>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={8}
                                        key={card.link}>

                                        <Link to={card.link}>
                                           
                                            <div className="checklist-card-box">
                                                <Card
                                                    className="dashboard-card"
                                                    hoverable
                                                    cover={card.image}

                                                >
                                                   
                                                    <Meta className="card-content" title={card.title} >
                                                    
                                                    </Meta>
                                                    <div className="dashboard-card-content">
                                                        {card.description}
                                                    </div>
                                                    
                                                </Card>
                                            </div>
                                          
                                        </Link>
                                    </Col>
                                )}

                            </Row>











                        </div>
                        </div>
                    </div>

                  
               
                                  
                    







                  
                   


                </Layout>
            </div>
        )
    }
}

export default Dashboard;