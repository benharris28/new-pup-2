import React from 'react';
import { Badge, Button, Switch } from 'antd';

class MarkComplete extends React.Component {
    state = {
        count: 5,
        show: true,
      };
    
    onChange = show => {
        this.setState({ show });
      };
    
    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>
                    <Badge dot={this.state.show}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Switch onChange={this.onChange} checked={this.state.show} />
                </div>
            </div>
           
        )
    }
}

export default MarkComplete;