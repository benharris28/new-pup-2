import React from 'react';
import ApiContext from '../../ApiContext';
import SignupFormHuman from '../../Components/SignupFormHuman/SignupFormHuman'
import {
    Layout,
    Select,
    Row,
    Col,
    Steps,
    Button,

} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class Signup extends React.Component {
    static contextType = ApiContext;
    
    state = {
        first_name: '',
        last_name: '',
        email: '',
        city: '',
        dog_name: '',
        dog_years: '',
        dog_breed: '',
        dog_birthday: '',
        dog_home_date: '',
        page: 1,
        openPage: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { 
            first_name,
            last_name,
            email,
            city,
            dog_name,
            dog_breed,
            dog_birthday,
            dog_home_date
            
            
        } = this.state;
        
        const user = {
            first_name,
            last_name,
            email,
            city,
            dogs: [
                {
                    name: dog_name,
                    breed: dog_breed,
                    birthday: dog_birthday,
                    home_date: dog_home_date 
                }

            ]

            
        }

        this.context.updateActiveUser(user)

    }

    handleFirstName = (name) => {
        this.setState({
            first_name: name
        })
    }

    handleLastName = (name) => {
        this.setState({
            last_name: name
        })
    }

    handleEmail = (email) => {
        this.setState({
            email: email
        })
    }

    handleCity = (city) => {
        this.setState({
            city: city
        })
    }

    handleNext = () => {
        this.setState({
            page: 2
        })
    }

    handleDogName = (name) => {
        this.setState({
            dog_name: name
        })
    }

    handleDogBreed = (breed) => {
        this.setState({
            dog_breed: breed
        })
    }

    handleBirthday = (day) => {
        this.setState({
            dog_birthday: day
        })
    }

    handleHomeDate = (day) => {
        this.setState({
            dog_home_date: day
        })
    }





    render() {
        const { Option } = Select;
        const { Step } = Steps;
        const { page, openPage } = this.state;

        console.log(this.state)
        return (


            <div className="signup-form-page white">
                <Layout className="white">
                    <div className="signup-form-container">

                        <div className="signup-form-header">
                            <div className="signup-form-progress-bar">

                                <div className="progress-bar-container">
                                    <Steps labelPlacement="vertical" direction="horizontal" size="small" current={1}>
                                        <Step title="You" />
                                        <Step title="Doggo" />

                                    </Steps>
                                </div>
                            </div>
                        </div>

                        <div className="signup-form-human">

                            <div className="signup-form-container">


                                {page === 1 &&
                                    <form className="signup-form-human">
                                        <div className="signup-header">
                                            <h3>Tell us about yourself</h3>
                                        </div>
                                        <div className="signup-form-fields-container">
                                            <Row className="signup-form-grid">
                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="text"
                                                            aria-label="First Name"
                                                            className="doggo-input-text-field"
                                                            placeholder="First Name"
                                                            name="first-name"
                                                            onChange={e => this.handleFirstName(e.target.value)}
                                                            value={this.state.first_name}>


                                                        </input>
                                                    </div>

                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <div className="doggo-input">
                                                        <input
                                                            type="text"
                                                            aria-label="Last Name"
                                                            className="doggo-input-text-field"
                                                            placeholder="Last Name"
                                                            name="last-name"
                                                            onChange={e => this.handleLastName(e.target.value)}
                                                            value={this.state.last_name}>


                                                        </input>
                                                    </div>
                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <div className="doggo-input">
                                                        <input
                                                            type="email"
                                                            aria-label="Email"
                                                            className="doggo-input-text-field"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={e => this.handleEmail(e.target.value)}
                                                            value={this.state.email}>


                                                        </input>
                                                    </div>
                                                </Col>
                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="text"
                                                            aria-label="City"
                                                            className="doggo-input-text-field"
                                                            placeholder="Your City"
                                                            name="city"
                                                            onChange={e => this.handleCity(e.target.value)}
                                                            value={this.state.city}>


                                                        </input>
                                                    </div>

                                                </Col>
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <div className="signup-form-next-button">
                                                        <Button
                                                            onClick={this.handleNext}>
                                                            Next
                                    </Button>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>





                                    </form>
                                }

                                {page === 2 &&
                                    <form className="signup-form-dog">
                                        <div className="signup-header">
                                            <h3>Tell us about your doggo</h3>
                                        </div>


                                        <div className="signup-form-fields-container">

                                           
                                            <Row className="signup-form-grid">
                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="text"
                                                            aria-label="First Name"
                                                            className="doggo-input-text-field"
                                                            placeholder="Doggo's Name"
                                                            name="doggo-name"
                                                            onChange={e => this.handleDogName(e.target.value)}
                                                            value={this.state.dog_name}>


                                                        </input>
                                                    </div>

                                                </Col>

                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="text"
                                                            aria-label="Breed"
                                                            className="doggo-input-text-field"
                                                            placeholder="Doggo's Breed"
                                                            name="doggo-breed"
                                                            onChange={e => this.handleDogBreed(e.target.value)}
                                                            value={this.state.dog_breed}>


                                                        </input>
                                                    </div>

                                                </Col>

                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>
                                                
                                                   

                                                    <div className="signup-header">
                                                        <h3>When is Doggo birthday?</h3>
                                                    </div>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="date"
                                                            aria-label="date"
                                                            className="doggo-input-text-field"
                                                            placeholder="00"
                                                            name="birthday"
                                                            onChange={e => this.handleBirthday(e.target.value)}
                                                            value={this.state.dog_birthday}>


                                                        </input>
                                                    </div>
                                                </Col>
                                              
                                                <Col className="doggo-input-container" xs={24} sm={24} md={24} lg={24} xl={24}>
                                                
                                                   

                                                    <div className="signup-header">
                                                        <h3>When is Doggo coming home?</h3>
                                                    </div>

                                                    <div className="doggo-input">
                                                        <input
                                                            type="date"
                                                            aria-label="date"
                                                            className="doggo-input-text-field"
                                                            placeholder="00"
                                                            name="home-date"
                                                            onChange={e => this.handleHomeDate(e.target.value)}
                                                            value={this.state.dog_home_date}>


                                                        </input>
                                                    </div>
                                                </Col>
                                            
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <div className="signup-form-next-button">
                                                        <Button
                                                            onClick={this.handleSubmit}>
                                                            Submit
                                    </Button>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </div>





                                    </form>
                                }
                            </div>


                        </div>


                    </div>
                </Layout>

            </div>

        )
    }
}

export default Signup;