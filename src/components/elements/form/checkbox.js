import React from "react";
import PropTypes from 'prop-types';

const Checkbox = props => {
    
    return (
        <label className={`form-checkbox ${props.className}`}>{props.children}
            <input type={props.type} defaultChecked={props.checked} name={props.name} className={props.className} />
            <span className="checkmark"></span>
        </label>
    )
};

Checkbox.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.string,
    label: PropTypes.string
}

Checkbox.defaultProps = {
    type: 'checkbox',
    className: '',
    checked: '',
    label: ''
} 

export default Checkbox;