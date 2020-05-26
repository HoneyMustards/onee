import React from 'react';

const Favourite = (props) => {
    return (
        <i className={"favourite icon icon-heart " + (props.status ? 'add' : '')} />
    )
}

export default Favourite;