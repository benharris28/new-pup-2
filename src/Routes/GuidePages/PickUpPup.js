import React from 'react'
import { Link } from 'react-router-dom';
import Russ_car from '../../Assets/Russ_car.JPG'
import { Layout, Content, Button } from 'antd';

class PickUpPup extends React.Component {
    render() {
        const { Content } = Layout;
        return (
            <div>
                <Layout>
                    <Content
                        className="page-content">
                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Guide Menu
                                    </Button>
                            </Link>

                        </div>
                        <div className="intro">
                         <img className="russ-image" src={Russ_car} alt="russell" />
                        <h3>Time to pickup Russell!</h3>
                        <div>
                            Overview
                                <ul>
                                <li>Bring towels!</li>
                                <li>Bring a friend</li>
                                <li>Bring Russell's leash, harness, and tags</li>

                            </ul>
                        </div>
                        </div>
                        <div>
                           <h4>The big day is here</h4> 
                           <p>Get ready! Your life will change forever today in the best way possible! Get excited and don't forget a few handy tips</p>

                        </div>
                        <div>
                            <h4>Bring towels!</h4>
                            <p>Dogs can get nauseous and anxious during their first few trips in a car. Spread a few towels down to help catch / cleanup any mess</p>

        
                        </div>
                        <div className="next-section-button">
                                <Link to='/food'>
                                    <Button>
                                        Up Next: Pup is home!
                                    </Button>               
                                </Link>
                                

                            </div>

                    </Content>
                </Layout>
            </div>
        )
    }
}

export default PickUpPup;