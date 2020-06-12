import React from "react";
import PropTypes from 'prop-types';

const Input = props => {

    return (
        <div className={`input-box ${props.className}`}>
            <input type={props.type} placeholder={props.placeholder} name={props.name} id={props.name}
                   className="form-control" required onChange={props.onChange} onFocus={props.onFocus} value={props.value} />
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
        </div>
    )
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    className: '',
    placeholder: '',
    label: ''
}

export default Input;
