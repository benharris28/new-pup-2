import React from 'react'
import { Link } from 'react-router-dom'
import harness_example from '../../Assets/harness_example.png'
import leash_example from '../../Assets/leash_example.png'
import collar_example from '../../Assets/collar_example.png'


class OneClickProductTiles extends React.Component {
    render() {

       const products = [
            {
                id: 1,
                thumbnail: <img className="product-thumbnail" src={harness_example} alt="dog harness" />
            }
        ]

        
        return (
            <div className="one-click-product-container">
                <div className="product-loop">
                    <div className="product-tile">
                        <Link to='/checklist'>
                            <div className="product-tile-container">
                                <div className="product-tile-image-box">
                                    <img className="product-thumbnail" src={harness_example} alt="dog harness" />
                                </div>
                                <div className="product-tile-content">
                                    <h6 className="product-tile-title">Front Range Dog Harness</h6>
                                    <p className="product-tile-price">$39.95</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="product-tile">
                        <Link to='/checklist'>
                            <div className="product-tile-container">
                                <div className="product-tile-image-box">
                                    <img className="product-thumbnail" src={collar_example} alt="dog harness" />
                                </div>
                                <div className="product-tile-content">
                                    <h6 className="product-tile-title">Front Range Dog Collar</h6>
                                    <p className="product-tile-price">$14.95</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="product-tile">
                        <Link to='/checklist'>
                            <div className="product-tile-container">
                                <div className="product-tile-image-box">
                                    <img className="product-thumbnail" src={leash_example} alt="dog harness" />
                                </div>
                                <div className="product-tile-content">
                                    <h6 className="product-tile-title">Front Range Dog Leash</h6>
                                    <p className="product-tile-price">$19.95</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneClickProductTiles;