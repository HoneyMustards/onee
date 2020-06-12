import React from "react";
import PropTypes from 'prop-types';

const Textarea = props => {
    
    return (
        <div className={`input-box textarea ${props.className}`}>
            <textarea cols={props.cols} rows={props.rows} placeholder={props.placeholder} name={props.name} id={props.name} 
                      className="form-control" required onChange={props.onChange} value={props.value}></textarea>
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
        </div>
    )
};

Textarea.propTypes = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    className: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
}

Textarea.defaultProps = {
    cols: 30,
    rows: 10,
    className: '',
    label: '',
    value: ''
} 

export default Textarea;