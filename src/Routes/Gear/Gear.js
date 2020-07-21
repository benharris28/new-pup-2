import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import ProductData from '../../BackupData/ProductData'
import ApiContext from '../../ApiContext';
import { Layout, Content, Space, Card, Col, Row, Button, Checkbox } from 'antd';
import dog_gear from '../../Assets/dog_gear.jpg'
import bowl_illustration from '../../Assets/bowl_illustration.png'
import gear_banner from '../../Assets/gear_banner.png'

class Gear extends React.Component {
    static contextType = ApiContext;

    state = {
        gear: ProductData.products,
        gear_dog_crate: false,
        gear_dog_bowls: true

    }

    render() {

        const { Content } = Layout;
        const { Meta } = Card;
        const { gear } = this.state;

        // Combine gear list with gear status from users table
        const gearTest = {

        }

        return (
            <div>
                <Layout>
                    <div className="guide-banner">

                        <img className="guide-banner-image" src={gear_banner} alt="puppy" />

                        <div className="back-to-checklist-button-test">
                            <Link to='/checklist'>
                                <Button
                                    type="primary">
                                    Back to Checklist
            </Button>
                            </Link>

                        </div>

                        <div className="guide-banner-title">
                            <h5>Russell's Checklist</h5>
                            <h3>The Gear You Need</h3>

                        </div>

                    </div>
                    <Content
                        //style={{ padding: '0 50px' }}
                        className="page-content">

                        

                        <div className="page-intro">
                            <h1>All the gear you need</h1>
                            <h5>Here are the absolute essentials for bringing a puppy home. Top trainer, XX trainer, recommends these products</h5>
                        </div>

                        <div className="card-box">
                            <Row
                                justify="space-around"
                                gutter={[48, 40]}
                            >

                                {gear.map(gearCard =>
                                    <Col
                                        className="gutter-row" sm={24} md={8}
                                        key={gearCard.id}>
                                        <Card
                                            hoverable
                                            className="card"
                                            cover={<img
                                                className="card-image"
                                                alt="example"
                                                src={gearCard.image} />}
                                        >
                                            <Meta
                                                className="card-content"
                                                title={gearCard.product}
                                                description={gearCard.description_text}>

                                            </Meta>

                                            <div className="card_purchase_button">
                                                <a target='_blank' rel="noopener noreferrer" href={`${gearCard.canada_link}`}>
                                                    <Button
                                                        type="primary">
                                                        Buy now
                                                </Button>
                                                </a>
                                                <MarkComplete tag={gearCard.tag} />
                                            </div>

                                        </Card>
                                    </Col>
                                )}

                            </Row>


                        </div>


                    </Content>
                    <div className="next-section-button">
                        <Link to='/food'>
                            <Button>
                                Up Next: Find the best food
                                    </Button>
                        </Link>

                    </div>
                </Layout>


            </div>
        )
    }
}

export default Gear;