import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Content, Steps, Button, message, Card } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Prepare your home',
    content: 'This is example content for prepare home',
  },
  {
    title: 'Pick Up Pup',
    content: 'Second-content',
  },
  {
    title: 'Teach a few tricks',
    content: 'Last-content',
  },
  {
    title: 'Feed your first meals',
    content: 'Last-content',
  },
  {
    title: 'House training',
    content: 'Last-content',
  },
];

class SurvivalGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
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
            
                <Steps className="survival-guide-steps" current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
                </Steps>
                
                <div className="steps-content">
                    <h5>{steps[current].title}</h5>
                    {steps[current].content}
                </div>

                <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                    Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    Previous
                    </Button>
                )}
                </div>
        </Content>
        </Layout>
      </div>
    );
  }
}

export default SurvivalGuide;