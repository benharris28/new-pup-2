import React from 'react';
import ApiContext from '../../ApiContext';
import UserData from '../../BackupData/UserData'
import {
    Layout,
    Select,
    Row,
    Col,
    Steps,
    Button,

} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class Login extends React.Component {
    static contextType = ApiContext;
    
    state = {
       
        email: '',
        password: '',
        users: UserData.users
    }

    handleSubmit = (e) => {
        e.preventDefault();
       const { history } = this.props

        const { 
            email,
            users
        } = this.state;
        
        const loggedInUser = users.filter(user => user.email === email)

        this.context.updateActiveUser(loggedInUser[0])

        history.push('/checklist')

    }

    handlePassword = (password) => {
        this.setState({
            password: password
        })
    }

  

    handleEmail = (email) => {
        this.setState({
            email: email
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

                   
                        <div className="signup-form-human">

                            <div className="signup-form-container">


                             
                                    <form className="signup-form-human">
                                        <div className="signup-header">
                                            <h3>Please login to doggo</h3>
                                        </div>
                                        <div className="signup-form-fields-container">
                                            <Row className="signup-form-grid">
                                                
                                         
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
                                                            type="password"
                                                            aria-label="password"
                                                            className="doggo-input-text-field"
                                                            placeholder="Password"
                                                            name="password"
                                                            onChange={e => this.handlePassword(e.target.value)}
                                                            value={this.state.password}>


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
                                

                            </div>


                        </div>


                    </div>
                </Layout>

            </div>

        )
    }
}

export default Login;