import React from 'react';


const PageHeader = (props) => {
    return (
        <div className="page-header">
            <h1 className="header">
                {props.header}
            </h1>
        </div>
    )
}

export default PageHeader;