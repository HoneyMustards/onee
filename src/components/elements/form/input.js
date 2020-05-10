import React from "react";
import PropTypes from 'prop-types';

const Input = props => {
    
    return (
        <input type={props.type} placeholder={props.placeholder} name={props.name} className={props.className} />
    )
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    className: 'form-control',
    placeholder: ''
} 

export default Input;