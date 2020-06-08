import React from "react";
import PropTypes from 'prop-types';

const Input = props => {
    
    return (
        <div className={"form-line " + props.variant}>
            <input type={props.type} placeholder={props.placeholder} name={props.name} className={props.className} />
            <label htmlFor="">{props.label}</label>
        </div>
    )
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string
}

Input.defaultProps = {
    type: 'text',
    className: 'form-control',
    placeholder: '',
    label: ''
} 

export default Input;