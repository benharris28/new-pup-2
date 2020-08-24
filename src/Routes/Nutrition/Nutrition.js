import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import NutritionData from '../../BackupData/NutritionData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import NutritionDesktop from '../../Components/NutritionDesktop/NutritionDesktop'
import NutritionTest from '../../Components/NutritionTest/NutritionTest'
import food_image from '../../Assets/food_image.png'
import raw_food1 from '../../Assets/raw_food1.jpg'
import tom_sawyer from '../../Assets/tom_sawyer.png'
import tom_sawyer_square from '../../Assets/tom_sawyer_square.png'
import salmon_patties_square from '../../Assets/salmon_patties_square.png'
import kibble_square from '../../Assets/kibble_square.png'
import canned_food_square from '../../Assets/canned_food_square.png'
import dog_hero_nutrition from '../../Assets/dog_hero_nutrition.png'


import { Layout, Button, Row, Col, Alert, Collapse } from 'antd';

class Nutrition extends React.Component {
    static contextType = ApiContext;

    state = {
        format: '',
        windowSize: '',
        food: NutritionData.categories[0].products,
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

        return (
            <div>
                <Layout className="white">
                    

                    <div className="hero light-blue">
                    <div className="container">
                        <div className="selections">
                            Step 2
                        </div>
                        <img className="hero-image" alt="dog panting" src={dog_hero_nutrition} />
                        <div className="title-centre image-title">
                            
                            <h1 className="display-heading">
                                Welcome to {activeDoggo}'s Food Guide!
                            </h1>
                            <div className="hero-details">
                                Expert recommended gear. Everything you need - nothing you don't. All the gear you need in one place
                        </div>


                        </div>

                    </div>
                    

                </div>
                    <div className="content-section white">


                        <div className="content-container">
                            <div className="title-centre">
                                <h1 className="display-heading">There's more than one way to buy dog food</h1>
                                <div className="hero-details">
                                Dog food comes in all shapes in sizes. It's not just about a huge bag of dry food anymore...
                                </div>
                            </div>
                           
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">

                                            <img className="food-image" src={tom_sawyer_square} alt="food stock" />

                                            <h4>Gently Cooked</h4>
                                            <h5>Human grade ingredients that are cooked, portioned, and flash frozen to stay fresh</h5>
                                        </div>
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">

                                            <img className="food-image" src={salmon_patties_square} alt="food stock" />
                                            <h4>Raw</h4>
                                            <h5>Meat, bone, fruits, and veggies that are ground down and left raw to preserve all nutrient values</h5>
                                        </div>

                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={canned_food_square} alt="food stock" />
                                            <h4>Canned</h4>
                                            <h5>Food is cooked until 70% of the moisture (water) is removed to maintain shelf stability</h5>
                                        </div>
                                    </Col>

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={kibble_square} alt="food stock" />
                                            <h4>Kibble</h4>
                                            <h5>Food is is cooked until most moisture is removed to maintain shelf-stability</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </div>




                    

                    <div className="section-hero light-blue">

                        <div className="container">
                            <div className="selections blue">
                                Selections Required
                          </div>
                            <div className="title-centre">
                                <h1 className="display-heading">
                                    {activeDoggo}'s Food Options
                              </h1>
                                <div className="hero-details">
                                    This list is customized for {activeDoggo}. This is everything they will need. As long as you have an item from each category, you'll be ready.
                          </div>


                            </div>
                           

                        </div>
                     
                    </div>

                    <div className="nutrition-list-container">
                        <div className="content-container gear-list">
                            <div className="bg-container bg-top">




                                {fullWidth < 900
                                    ? <NutritionDesktop food={this.state.food} choice={this.state.choice}/>
                                    : <NutritionDesktop food={this.state.food} choice={this.state.choice} />
                                }


                            </div>

                            
                        </div>
                    </div>

                    <div className="content-section light-blue">
                        <div className="content-container">
                            <div className="title-centre">
                                <h1 className="display-heading">What to look for in dog food</h1>
                            </div>
                            
                            <div className="grid-container">

                                <Row className="survival-guide-steps-row font-white" justify="space-around">
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <div className="survival-guide-steps font-white">
                                            <div className="survival-guide-steps_num">
                                                1
                                    </div>
                                            <h3>Fresher is better</h3>
                                            <h5 className="font-white">The more food is cooked (processed), the less nutrients are preserved</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                2
                                    </div>
                                            <h3>We prefer "gently cooked" to "raw"</h3>
                                            <h5 className="font-white">While cooking does remove some of the nutrients, our experts prefer gentle cooking to raw where these is some risk of contamination</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                3
                                    </div>
                                            <h3>No artificial flavors or preservatives</h3>
                                            <h5 className="font-white">Chemicals such as Butylated hydroxyanisole and ethoxyquin are no-no's</h5>
                                        </div>

                                    </Col>
                                    <Col className="survival-guide-step-col" xs={24} sm={24} md={12} lg={12} xl={12}>
                                        <div className="survival-guide-steps">
                                            <div className="survival-guide-steps_num">
                                                4
                                    </div>
                                            <h3>Animal protein is first or second ingredient</h3>
                                            <h5 className="font-white">Look for whole ingredients and words you recognize!</h5>
                                        </div>

                                    </Col>
                                </Row>
                            </div>
                            <div className="nutrition-section-outro">
                                <Alert message="Important: some added vitamins and minerals are not only ok, they are essential! Calcium and other essential minerals will usually appear as their compound names. Don't fear if you see items like dicalcium phosphate or zinc glutonate on the ingredient list" type="info" showIcon />

                            </div>
                        </div>
                    </div>







                    <div className="faq-section">
                        <div className="content-container">
                            <div className="title-wrap">
                                <h2 className="content-h2" style={{ marginBottom: 0 }}>Have more questions about food?</h2>
                                <h4 className="font-purple">We've got your answers</h4>
                            </div>
                           
                            <Collapse defaultActiveKey={['1']} className="survival-guide-faq" ghost>
                                <Panel header="Should I get a food subscription?" key="1">
                                    <p>Subscriptions are great if you have chosen a food and want the same quantity delivered to your home regularly. If you're not sold, you can purchaes as needed</p>
                                </Panel>
                                <Panel header="What's the deal with grain free foods?" key="2">
                                    <p>Grain free foods are marketed based on debunked food science. Our experts don't recommend grain free foods. Grains are an important part of your dog's diet!</p>
                                </Panel>
                                <Panel header="Question 3 question" key="3">
                                    <p>Question 3</p>
                                </Panel>

                            </Collapse>
                        </div>
                    </div>
                    <div className="cta-section white">
                        <div className="container-2">
                            <div className="cta-banner-dark">
                                <div className="cta-container">
                                    <div className="next-section-content">
                                        <h2 className="font-white">Your doggo has some nutritious food!</h2>
                                        <h5 className="font-white">Let's move on and find your pup a great vet in your area. Click below to go to the next section</h5>
                                    </div>
                                    <div className="cta-button-container">
                                        <Link to='/vet'>
                                            <Button className="button-cta">
                                                Up Next: Find the best food
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   


                </Layout>
            </div>
        )
    }
}

export default Nutrition;