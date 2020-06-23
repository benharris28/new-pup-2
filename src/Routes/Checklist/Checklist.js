import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Content, Space, Card, Col, Row, Progress } from 'antd';
import 'antd/dist/antd.css'

class Checklist extends React.Component {
    
    
    render() {
        const { Content } = Layout;
        const { Meta } = Card;
    
        return (
            <div>
                <Layout>
                    <Content 
                        className="checklist-content" 
                        style={{ padding: '0 50px' }}>
                    
                    <div className="checklist-title">
                        <h1>Russell's Checklist</h1>
                        <h5>Coming home in 17 days!</h5>

                        
                    </div>
                    
                    <Space 
                        direction="vertical"
                        size="large">
                    
                    <Link to={'/'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" alt="example" src="https://www.rover.com/blog/wp-content/uploads/2020/01/Screen-Shot-2020-01-21-at-1.41.21-PM.png" />}
                            
                        >
                            <Meta className="checklist-card-text" title="Get the gear" description="Complete by June 25th" />
                        </Card>
                    </Link>
                    <Card
                        hoverable
                        className="checklist-card"
                        cover={<img className="checklist-card-image" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    <div className="card-content">
                    <Meta 
                        title="Europe Street beat" 
                        description="www.instagram.com" 
                    />
                
                    </div>

                          

                
                        
                    </Card>

                    </Space>
                    </Content>




                </Layout>
                
              
            </div>
        )
    }
}

export default Checklist;