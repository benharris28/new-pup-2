import React from 'react';
import { Link } from 'react-router-dom'
import { Badge, Button, Tooltip} from 'antd';
import { CheckOutlined } from '@ant-design/icons';


class MarkCompleteStandAlone extends React.Component {
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
        const {tag, nextSection} = this.props;
   
        
        return (
            <div className="mark-complete-standalone">
                <div>
                    Picked your class? Mark this section complete and move on!
                </div>
                <div className="complete-box">
                <Tooltip title="Mark Complete">
                    
                        <Button 
                            className="mark_complete_button"
                            onClick={() => this.markComplete(tag)}>
                            Complete
                            {this.state.complete && <CheckOutlined />}
                            
                        </Button>
                    </Tooltip>

                    <div className="next-section-button">
                        <Link to={nextSection}>
                            <Button>
                                Next Section
                            </Button>               
                        </Link>

                    </div>
                </div>
            </div>
           
        )
    }
}

export default MarkCompleteStandAlone;