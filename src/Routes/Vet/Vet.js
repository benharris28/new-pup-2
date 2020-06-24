import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Content, Button} from 'antd';

class Vet extends React.Component {
    render() {
        const { Content } = Layout;

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
                            <h2>Let's find the best vet near you</h2>
                        </div>
                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Vet;