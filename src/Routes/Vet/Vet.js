import React from 'react';
import { Layout, Content, Space, Card, Col, Row, Progress } from 'antd';

class Vet extends React.Component {
    render() {
        const { Content } = Layout;

        return (
            <div>
                <Layout>
                    <Content
                        style={{ padding: '0 50px' }}>
                        <div>
                            <h1>All the gear you need</h1>
                        </div>
                    </Content>
                </Layout>
                        
                    
            </div>
        )
    }
}

export default Vet;