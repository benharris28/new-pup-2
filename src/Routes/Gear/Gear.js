import React from 'react';
import { Link } from 'react-router-dom'
import MarkComplete from '../../Components/MarkComplete/MarkComplete'
import ProductData from '../../BackupData/ProductData'
import { Layout, Content, Space, Card, Col, Row, Button } from 'antd';

class Gear extends React.Component {
    state = {
        gear: ProductData.products
    }

    render() {
        
        const { Content } = Layout;
        const { Meta } = Card;
        const { gear } = this.state;

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
                        <div>
                            <MarkComplete />
                        </div>
                        <div className="card-box">
                            <Space
                                direction="vertical"
                                size="large">

                            {gear.map(gearCard => 
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
                                </div> 

                              </Card>)}

                            </Space>
                        </div>

                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Gear;