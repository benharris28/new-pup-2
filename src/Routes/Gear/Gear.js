import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import ProductData from '../../BackupData/ProductData'
import ApiContext from '../../ApiContext';
import { Layout, Content, Space, Card, Col, Row, Button, Checkbox } from 'antd';

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
                    <Content
                        style={{ padding: '0 50px' }}
                        className="page-content">
                        
                        <div className="back-to-checklist-button">
                            <Link to='/checklist'>
                                <Button 
                                    type="primary">
                                        Back to checklist
                                </Button>
                            </Link>
                                    
                        </div> 

                        <div>
                            <h1>All the gear you need</h1>
                            <h5>Here are the absolute essentials for bringing a puppy home. Top trainer, XX trainer, recommends these products</h5>
                        </div>
                       
                        <div className="card-box">
                            <Row
                                gutter={[16, 24]} >

                                {gear.map(gearCard => 
                                    <Col
                                    className="gutter-row" sm={24} md={8}
                                    key={gearCard.id}>
                                        <Card
                                        hoverable
                                        className="gear-card"
                                        cover={<img 
                                            alt="example" 
                                            src={gearCard.image} />}
                                    >
                                        <Meta
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
                            <div className="next-section-button">
                                <Link to='/food'>
                                    <Button>
                                        Up Next: Find the best food
                                    </Button>               
                                </Link>

                            </div>

                        </div>

                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Gear;