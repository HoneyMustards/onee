import React, { useState, useEffect } from 'react';
import menu from  '../../../data/menu.json';
import PropTypes from 'prop-types';


const PageMenu = (props) => {

    const [ template, setTemplate ] = useState();

    useEffect(() => {
        const temp = menu.map((value, index) => {
            let activeClass = '';
            if (value.id == props.active) {
                activeClass = 'active';
            }
            return <a key={index} className={"page-menu-link " + activeClass} href="#">{value.title}</a>
        })
        setTemplate(temp);
    }, []);

    return (
        <ul className="page-menu">
            {template}           
        </ul>
    )
}


PageMenu.propTypes = {
    active: PropTypes.string
}


PageMenu.defaultProps = {
    active: 'summary'
} 

export default PageMenu;