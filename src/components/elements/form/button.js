import PropTypes from 'prop-types';

const Submit = props => {

    return (
        <button className={`btn ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

Submit.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

Submit.defaultProps = {
    className: 'btn-primary'
} 


export default Submit;