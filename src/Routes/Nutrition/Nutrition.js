import React from 'react';
import { Link } from 'react-router-dom'
import ApiContext from '../../ApiContext';
import NutritionData from '../../BackupData/NutritionData'
import NutritionMobile from '../../Components/NutritionMobile/NutritionMobile'
import NutritionDesktop from '../../Components/NutritionDesktop/NutritionDesktop'
import NutritionSelector from '../../Components/NutritionSelector/NutritionSelector'

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
        supplements: NutritionData.categories[1].products,
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
        const { supplements } = this.state;
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
                    
                <div className="content-section light-grey">
                        <div className="content-container">

                            <div className="title-centre">
                                
                                <h6 className="display-heading-intro font-coral">Food Shop</h6>
                                <h1 className="display-heading">
                                    Doggo Food Shop
                            </h1>
                                <div className="hero-details">
                                We'll walk you through the basics of dog food and help you pick the best one!
                        </div>



                            </div>

                        </div>
                    </div>
                    
                    <div className="content-section white">
                    <div className="content-container">
                        
                                <div className="nutrition-page-container">

                                <div className="nutrition-page-selector white">
                                    <div className="sticky-container">
                                        <div className="selector-container">
                                        <div className="title-centre">
                                     
                                
                                        <div className="guide-heading">
                            Food Selector
                            </div>
                                <h1 className="display-sub-heading">
                                    Select a Food
                            </h1>
                                



                            </div>
                                            <NutritionSelector food={this.state.food} choice={this.state.choice}/>
                                        
                                        <div className="supplement-container">
                                        <h6 className="display-heading-intro font-coral">Supplements</h6>
                                        <h2 className="div-heading">Complete the wellness routine with these recommended supplements</h2>
                                        <p>Supplements are critical to ensure your dog thrives. Here are the top recommended supplements for an adult dog</p>
                                        <div className="product-loop">
                    {supplements.map(product =>
                        <div className="product-tile">
                            <Link to='/checklist'>
                                <div className="product-tile-container">
                                    <div className="product-tile-image-box">
                                        <img className="product-thumbnail" src={product.image} alt="dog supplement"></img>
                                    </div>
                                    <div className="product-tile-content">
                                        <h6 className="display-heading-intro font-coral">{product.category}</h6>
                                        <p>{product.description_text}</p>
                                        <h6 className="product-tile-title">{product.product}</h6>
                                        <p className="product-tile-price">${product.cost_canada}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                         )}
                        </div>
                                        </div>
                                        </div>
                                        
                                    
                                    </div>
                                    </div>
                                
                             
                                
                                </div>
                                </div>
                                </div>
                    
                
                       




                    

                    <div className="content-section white">
                               <div className="content-container">

                    <div className="nutrition-types-section">
                                <div className="title-centre">
                                <div className="guide-heading">
                                Food Types
                            </div>
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
                                </div>
                   


                    <div className="content-section white">
                        <div className="content-container">
                        <div className="title-centre">
                                <h1 className="display-heading">What to look for in dog food</h1>
                            </div>
                        
                        <div className="grid-container">
                            <Row style={{ marginBottom: 20}}>
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="nutrition-step-content">
                                <div className="step-count">
                                    1
                                </div>
                                <div className="step-content">
                                    <h4>Fresher is better</h4>
                                    <p>The more food is cooked (processed), the less nutrients are preserved</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: 20}}>
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="nutrition-step-content">
                                <div className="step-count">
                                    2
                                </div>
                                <div className="step-content">
                                <h4>We prefer "gently cooked" to "raw"</h4>
                                <p>While cooking does remove some of the nutrients, our experts prefer gentle cooking to raw where these is some risk of contamination</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: 20}}>
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="nutrition-step-content">
                                <div className="step-count">
                                    3
                                </div>
                                <div className="step-content">
                                    <h4>No artificial flavors or preservatives</h4>
                                    <p>Chemicals such as Butylated hydroxyanisole and ethoxyquin are no-no's</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <div className="nutrition-step-content">
                                <div className="step-count">
                                    4
                                </div>
                                <div className="step-content">
                                <h4>Animal protein is first or second ingredient</h4>
                                <p>Look for whole ingredients and words you recognize!</p>
                                </div>
                                </div>
                                
                                </Col>
                            </Row>
                            </div>
                        </div>
                    </div>


                    <div className="faq-section light-blue">
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
                                                Up Next: Find a vet
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