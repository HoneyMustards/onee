import Link from "next/link";
import PropTypes from 'prop-types';

const LinkButton = props => {

    return (
        <Link href={props.link}>
            <a className={`btn ${props.className}`}>{props.children}</a>
        </Link>
    )
};

LinkButton.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string
}

LinkButton.defaultProps = {
    className: 'btn-primary',
    link: '/'
} 


export default LinkButton;