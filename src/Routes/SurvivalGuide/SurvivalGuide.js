import React from 'react';
import { Link } from 'react-router-dom'
import PrepareHome from '../../Components/PrepareHome/PrepareHome'
import { Layout, Content, Steps, Button, Collapse  } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;


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
    
    return (
    
      <div>
        <Layout>
            <Content
                style={{ padding: '0 40px' }}
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
                    <h2>Your first 24 hours: Survival Guide</h2>
                    <h5>Here are the absolute essentials for bringing a puppy home. Top trainer, XX trainer, recommends these products</h5>
                </div>
            
                <div>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel header="Step 1: Prepare your home" key="1" className="site-collapse-custom-panel">
                      <PrepareHome />
                    </Panel>
                    
                  </Collapse>

                  <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel header="Step 2: Pick up pup" key="1" className="site-collapse-custom-panel">
                      <PrepareHome />
                    </Panel>
                   
                  </Collapse>

                  <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel header="Step 3: Try some tricks" key="1" className="site-collapse-custom-panel">
                      <PrepareHome />
                    </Panel>
                   
                  </Collapse>

                  <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel header="Step 4: Pup's first meal" key="1" className="site-collapse-custom-panel">
                      <PrepareHome />
                    </Panel>
                   
                  </Collapse>

                  <Collapse
                    bordered={false}
                    defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel header="Step 5: Pup's first night" key="1" className="site-collapse-custom-panel">
                      <PrepareHome />
                    </Panel>
                   
                  </Collapse>
                  
                </div>
                
        </Content>
        </Layout>
      </div>
    );
  }
}

export default SurvivalGuide;