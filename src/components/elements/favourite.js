import React from 'react';

const Favourite = (props) => {
    return (
        <i className={"favourite icon icon-guests " + (props.status ? 'add' : '')} />
    )
}

export default Favourite;