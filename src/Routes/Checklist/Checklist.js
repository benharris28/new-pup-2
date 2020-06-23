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
                    
                    <Link to={'/gear'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" alt="example" src="https://www.rover.com/blog/wp-content/uploads/2020/01/Screen-Shot-2020-01-21-at-1.41.21-PM.png" />}
                            
                        >
                            <Meta className="checklist-card-text" title="Get the gear" description="Complete by June 25th" />
                        </Card>
                    </Link>
                   
                    
                
                
                    <Link to={'/gear'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" 
                                        alt="pet food" 
                                        src="https://i.insider.com/5b1fc0281ae6621a008b4fb2?width=1100&format=jpeg&auto=webp" />}
                            
                        >
                            <Meta 
                                className="checklist-card-text" 
                                title="Find the best food" 
                                description="Complete by June 25th" 
                                />
                        </Card>
                    </Link>

                    <Link to={'/gear'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" 
                                        alt="find a vet" 
                                        src="https://trupanion.com/blog/wp-content/uploads/2019/04/ThankYourVeterinarian-1024x682.jpg" />}
                            
                        >
                            <Meta 
                                className="checklist-card-text" 
                                title="Find a local veterinarian" 
                                description="Complete by June 27th" 
                                />
                        </Card>
                    </Link>

                    <Link to={'/gear'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" 
                                        alt="puppy socialization" 
                                        src="https://tailblazerspets.com/blog/wp-content/uploads/2015/02/golden-pups.png" />}
                            
                        >
                            <Meta 
                                className="checklist-card-text" 
                                title="Sign up for puppy socialization" 
                                description="Complete by July 1st" 
                                />
                        </Card>
                    </Link>

                    <Link to={'/gear'}>
                        <Card
                            className="checklist-card"
                            hoverable
                            cover={<img className="checklist-card-image" 
                                        alt="24 hour guide" 
                                        src="https://dogtime.com/assets/uploads/2011/03/puppy-development-1280x720.jpg" />}
                            
                        >
                            <Meta 
                                className="checklist-card-text" 
                                title="Read Doggo's 24 hour survival guide" 
                                description="Everything you needt to know, including how to get ready, give your first meal, housetrain, and more!" 
                                />
                        </Card>
                    </Link>

                          

                
                        
                   

                    </Space>
                    </Content>




                </Layout>
                
              
            </div>
        )
    }
}

export default Checklist;