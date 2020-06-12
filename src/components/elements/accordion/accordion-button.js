import PropTypes from 'prop-types';

const AccordionButton = props => {

    return (
        <div className={`btn ${props.className}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
};

AccordionButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

AccordionButton.defaultProps = {
    className: 'btn-primary'
} 


export default AccordionButton;