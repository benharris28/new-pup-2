import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Content, Button, Row, Col } from 'antd';
import russ_snow from '../../Assets/russ_snow.jpg'

class CallToAction extends React.Component {
    render() {
        return (
           
            <div className="call-to-action-block">
            <div className="call-to-action-block-content">


                <div className="call-to-action-primary">


                    <div className="call-to-action-primary-content-header">
                        <h2>Gear recommended by experts and curated for your pup</h2>
                    </div>

                    <div className="call-to-action-body">
                        <h5>Gear recommended by experts and curated for your pup</h5>
                    </div>
                    <div className="call-to-action-button">
                        <Button>
                            Test
                        </Button>
                    </div>
                </div>
                <div className="call-to-action-image-container">
                    <img className="call-to-action-image" src={russ_snow} alt="russell" />
                </div>










            </div>
        </div>


        )
    }
}

export default CallToAction;