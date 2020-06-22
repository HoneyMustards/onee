import React from 'react';
import Checkbox from './form/checkbox';

const CheckboxImage = (props) => {
    return (
        <div className={"checkbox-image " + props.variant}>
            <img src="./images/detail/detail.png" />
            <Checkbox />
            {props.children}
        </div>
    )
}

export default CheckboxImage;