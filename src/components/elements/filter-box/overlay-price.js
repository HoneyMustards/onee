import React from 'react';
import { Range } from 'rc-slider';

const OverlayPrice = (props) => {
    return (
        <div style={{width: '100%'}}>
            <div className="popover__line">
                <p className="popover__summary text-center">
                    <strong>Price Per Night</strong>
                </p>
            </div>
            <div className="popover__line d-flex">
                <label className="text-radius mr-1">
                    <span className="text-radius__label">Min.</span>
                    <input ref={props.refPriceMin} defaultValue={props.prices[0]} />
                </label>
                <span className="mt-3"> - </span>
                <label className="text-radius ml-1">
                    <span className="text-radius__label">Max.</span>
                    <input ref={props.refPriceMax} defaultValue={props.prices[1]} />
                </label>
            </div>
            <div className="popover__line">                
                <Range min={0} max={1000} defaultValue={props.prices} onChange={props.handleChangePrice} />
            </div>
            <div className="popover__line d-flex justify-content-between align-items-center">
                <p className="button-clear mb-0">Clear</p>
                <button className="btn btn-secondary">Apply</button>
            </div>
        </div>
    )
}

export default OverlayPrice;