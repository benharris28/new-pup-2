import React from 'react';
import {
    Layout,
    Select,
    Row,
    Col,
    Steps,
    Button,

} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class SignupFormHuman extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        page: ''
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

    handleNext = () => {
        this.props.handleNextPage()
    }


    render() {
        const { Option } = Select;
        const { Step } = Steps;

        console.log(this.state.first_name)
        return (


            <div className="signup-form-human">
           
                    <div className="signup-form-container">

                   

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
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <div className="signup-form-next-button">
                                            <Button>
                                                Next
                                </Button>
                                        </div>
                                    </Col>

                                </Row>
                            </div>





                        </form>

                    </div>
         

            </div>

        )
    }
}

export default SignupFormHuman;