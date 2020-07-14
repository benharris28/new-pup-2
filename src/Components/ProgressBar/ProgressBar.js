import React from 'react';
import { Progress } from 'antd';

class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress-bar">
                <h5>Puppy Progress</h5>
                <Progress percent={30} status="active"/>
            </div>
        )
    }
}

export default ProgressBar;