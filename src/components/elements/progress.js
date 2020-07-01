import React from 'react';
import Tooltip from 'rc-tooltip';

const Progress = (props) => {
    return (
    <Tooltip placement="top" trigger={['hover']} overlay={<span>%{props.complete}</span>} overlayClassName="progress__tooltip">
            <div className="progress">
                <div className="progress__complete" style={{ width: props.complete + '%' }}></div>
            </div>
        </Tooltip>
    )
}

export default Progress;