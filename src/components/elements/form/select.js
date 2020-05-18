/*
* Hesapkurdu ARGE <arge@hesapkurdu.com>
* Select Element
*/

import React, { useContext } from 'react';
// import { SelectContainer, DropdownIcon } from "./style";

function Select(props) {
    let options= [];


    if(props.options) {
        props.options.map((item, index) => {
            options.push(<option key={index} value={item.value}>{item.text}</option>)
        });
    }

    return (
        <label className="select" style={{width: props.width}}>
            <select ref={props.referans} defaultValue={props.value}>
                {options}
            </select>
        </label>
    );
}

export  default Select;
