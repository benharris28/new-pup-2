import React from 'react';
import { Link } from 'react-router-dom'
import PrepareHome from '../../Components/PrepareHome/PrepareHome'
import { Layout, Content, Steps, Button, Avatar  } from 'antd';
import { CaretRightOutlined, UserOutlined } from '@ant-design/icons';




class SurvivalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }


  

  render() {
    const { current } = this.state;
    const { Content } = Layout;

    const points = [
      {
          image: null,
          title: 'Get your home ready for Russell'
      },
      {
          image: null,
          title: 'Pick up Russell'
      },
      {
          image: null,
          title: 'Teach Russell a few tricks'
      },
      {
          image: null,
          title: 'Give Russell his first meal'
      },
      {
        image: null,
        title: 'Housetrain Russell'
    },

      

  ]
    
    return (
    
      <div>
        <Layout>
            <Content
                //style={{ padding: '0 40px' }}
                className="page-content">

                <div className="back-to-checklist-button">
                                <Link to='/checklist'>
                                    <Button 
                                        type="primary">
                                            Back to checklist
                                    </Button>
                                </Link>
                                        
                </div> 
                
                <div className="page-intro">
                    <div className="title-box">
                      <h5>Survival Guide</h5>
                    </div>
                    
                    <h1>Your first 24 hours with Russell</h1>
                    <h5>Here are the absolute essentials for bringing a puppy home. Top trainer, XX trainer, recommends these products</h5>
                </div>

                
                <div className="guide-steps-detail">
                            <h4>Your tasks</h4>
                            <div className="guide-points">
                                {points.map(point => 
                                    <div className="guide-action">
                                        <Avatar className="guide-avatar" size={50} icon={<UserOutlined />} />
                                        <div className="guide-content">
                                        <h6>{point.title}</h6>
                                        </div>
                                        
                                    </div>
                            )}
                            
                            </div>
                </div>
                <div className="guide-start">
                  <h5>Ready to start?</h5>
                  <Button>
                    Start your guide
                  </Button>
                </div>
                
                
        </Content>
        </Layout>
      </div>
    );
  }
}

export default SurvivalGuide;