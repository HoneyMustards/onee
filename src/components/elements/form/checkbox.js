import React, {  useRef } from "react";
import PropTypes from 'prop-types';

const Checkbox = props => {    
    const ref = useRef();

    return (
        <label className={`form-checkbox ${props.className}`}>{props.children}
            <input ref={ref} type={props.type} defaultChecked={props.checked} name={props.name} className={props.className} onChange={() => { props.onChange(ref.current.checked) }} />
            <span className="checkmark"></span>
        </label>
    )
};

Checkbox.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    label: PropTypes.string,
    onChange: PropTypes.func
}

Checkbox.defaultProps = {
    type: 'checkbox',
    className: '',
    checked: '',
    label: '',
    onChange: () => {}
}

export default Checkbox;