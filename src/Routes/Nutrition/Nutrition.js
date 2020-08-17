import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import NutritionData from '../../BackupData/NutritionData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import NutritionDesktop from '../../Components/NutritionDesktop/NutritionDesktop'
import food_image from '../../Assets/food_image.png'
import { Layout, Button, Row, Col, Alert } from 'antd';

class Nutrition extends React.Component {
    static contextType = ApiContext;
    
    state = {
        format: '',
        windowSize: '',
        food: NutritionData.categories[0].products
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

    render() {
        
        console.log(this.state.food)
        const width = window.addEventListener('resize', this.handleResize);
        const fullWidth = global.window.innerWidth;
        console.log(fullWidth)
        console.log(this.state.windowSize)

        const { activeUser, completeByDates } = this.context;
        const activeDoggo = activeUser.dogs[0].dog_name

        return (
            <div>
                <Layout className="white">
                    <div className="guide-banner">

                        <div className="guide-banner-image dark-yellow" />

                        

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
                            <h1>Everything you need to know about dog food</h1>

                        </div>

                    </div>
                    <div className="content-section white">


                        <div className="checklist-page content">
                            <div className="checklist-page-section-intro">
                                <h2>There's more than one way to buy dog food</h2>
                                <h5>Dog food comes in all shapes in sizes. It's not just about a huge bag of dry food anymore...</h5>
                            </div>
                            <div className="nutrition-types-container">
                                <Row
                                    gutter={[40, 24]}
                                >

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                     
                                                <img className="food-image" src={food_image} alt="food stock" />
                                           
                                            <h4>Gently Cooked</h4>
                                            <h5>Human grade ingredients that are cooked, portioned, and flash frozen to stay fresh</h5>
                                        </div>
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />
                                            
                                            <h4>Raw</h4>
                                            <h5>Meat, bone, fruits, and veggies that are ground down and left raw to preserve all nutrient values</h5>
                                        </div>
                    
                                    </Col>
                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />    
                                            <h4>Canned</h4>
                                            <h5>Food is cooked until 70% of the moisture (water) is removed to maintain shelf stability</h5>
                                        </div>
                                    </Col>

                                    <Col
                                        className="gutter-row" xs={24} sm={24} md={12} lg={12}>
                                        <div className="nutrition-type-item">
                                            <img className="food-image" src={food_image} alt="food stock" />
                                            <h4>Kibble</h4>
                                            <h5>Food is is cooked until most moisture is removed to maintain shelf-stability</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </div>
                    </div>


                  

                    <div className="content-section purple font-white">
                        <div className="checklist-page content">
                            <h2 className="font-white">What to look for in dog food</h2>
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

                    <div className="content-section white">
                        <div className="checklist-page content space grain-free">
                           
                                    <div>
                                        <h2>What's the deal with grain free?</h2>
                                        <h5>Grain free foods are marketed based on debunked food science. Our experts don't recommend grain free foods. Grains are an important part of your dog's diet!</h5>
                                    </div>
                             
                            
                        </div>
                    </div>

                    <div className="content-section yellow">
                        <div className="checklist-page content">
                            <h2>Should I get a food subscription?</h2>
                            <div className="picker">
                                <Row style={{ margin: 0 }} justify="space-between">
                                    <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("subscription")} className="picker-button" type="primary">Subscription</Button></Col>
                                    <Col className="format-picker" span={11}><Button onClick={() => this.setFormat("pickup")} className="picker-button" type="primary">Pick Up</Button></Col>
                                </Row>

                            </div>
                            <div className="format-detail">
                                {this.state.format === "subscription"
                                    ? <h5>Pay a monthly fee and have the food you need delivered to your home</h5>
                                    : <h5>Pickup your pup's food from your local store when you need it</h5>
                                }
                            </div>
                        </div>
                    </div>

                    

                    <div className="content-section white">
                        <div className="content">

                            {fullWidth < 900
                                ? <NutritionMobile food={this.state.food} />
                                : <NutritionDesktop food={this.state.food} />
                            }

                        </div>
                    </div>

                    <div className="next-section-button dark-yellow">
                    <div className="next-section-button-content">
                            <h4>Your pup has great food to eat!</h4>
                            <h5>Let's move on and find your pup a great vet in your area. Click below to go to the next section</h5>
                            <Link to='/vet'>
                            <Button>
                                Up Next: Find a local vet
                                    </Button>
                        </Link>
                        </div>
                        

                    </div>
                    

                </Layout>
            </div>
        )
    }
}

export default Nutrition;