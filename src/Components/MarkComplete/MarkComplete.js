import React from 'react';
import { Badge, Button, Tooltip} from 'antd';
import { CheckOutlined } from '@ant-design/icons';


class MarkComplete extends React.Component {
    state = {
        count: 5,
        show: true,
        complete: this.props.complete
      };
    
    markComplete = (tag)=> {
        
        // Set context value to complete
        // Patch database
      };
    
    render() {
        const {tag} = this.props;
        
        return (
            <div>
               <Tooltip title="Mark Complete">
                   
                    <Button 
                        className="mark_complete_button"
                        onClick={() => this.markComplete(tag)}>
                        Complete
                        {this.state.complete && <CheckOutlined />}
                        
                    </Button>
                </Tooltip>
            </div>
           
        )
    }
}

export default MarkComplete;