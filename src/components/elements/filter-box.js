import React, { useState, useEffect, useRef } from 'react';
import Checkbox from "./form/checkbox";
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import Modal from 'react-bootstrap/Modal';
import OverlayPrice from './filter-box/overlay-price';
import Counter from './visitor-counter';


const FilterBox = () => {

    const [beds, setBeds] = useState(2);
    const [bedrooms, setBedrooms] = useState(1);
    const [prices, setPrices] = useState([100, 750]);

    const [showPricePopover, setShowPricePopover] = useState(false);
    const [showBedroomsPopover, setShowBedroomsPopover] = useState(false);
    const [showInstantBookingPopover, setShowInstantBookingPopover] = useState(false);
    const [showSortPopover, setShowSortPopover] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);

    const [target, setTarget] = useState(null);

    const refPriceMin = useRef();
    const refPriceMax = useRef();


    const handleToggle = (popover) => {
        switch (popover) {
            case 'price':
                setShowPricePopover(!showPricePopover);
                setTarget(event.target);
                break;
            case 'bedrooms':
                setShowBedroomsPopover(!showBedroomsPopover);
                setTarget(event.target);
                break;
            case 'instantBooking':
                setShowInstantBookingPopover(!showInstantBookingPopover);
                setTarget(event.target);
                break;
            case 'sort':
                setShowSortPopover(!showSortPopover);
                setTarget(event.target);
                break;
            default:
                break
        }
    };

    const handleHidePrice = () => setShowPricePopover(false);
    const handleHideBedroom = () => setShowBedroomsPopover(false);
    const handleHideInstantBooking = () => setShowInstantBookingPopover(false);
    const handleHideSort = () => setShowSortPopover(false);
    const handleHideFilter = () => setShowFilterModal(false);

    const handleChangePrice = (value) => setPrices([...value]);


    useEffect(() => {
        if (typeof refPriceMin.current != 'undefined' && typeof refPriceMax.current != 'undefined') {
            refPriceMin.current.value = prices[0];
            refPriceMax.current.value = prices[1];
        }
    }, [prices])

    return (
        <div className="filter-box">
            <div className="filter-box-container">
                <div>
                    <a onClick={() => { handleToggle('price') }} className={"filter-box__copy " + (showPricePopover ? 'active' : '')}>
                        Price
                    </a>
                </div>
                <div>
                    <a onClick={() => { handleToggle('bedrooms') }} className={"filter-box__copy " + (showBedroomsPopover ? 'active' : '')}>
                        Bedrooms
                    </a>
                </div>
                <div>
                    <a onClick={() => { handleToggle('instantBooking') }} className={"filter-box__copy " + (showBedroomsPopover ? 'active' : '')}>
                        Instant Booking
                    </a>
                </div>

                <div>
                    <button onClick={() => { setShowFilterModal(true) }} className="filter-box__button btn btn-secondary text-center"><i className="icon icon-search  mr-2"></i> More Filters</button>
                </div>

                <div>
                    <button onClick={() => { handleToggle('sort') }} className="filter-box__button btn btn-secondary text-center"><i className="icon icon-search  mr-2"></i> Sort</button>
                </div>

                <div className="filter-box__clear">
                    <p>Clear Filters</p>
                </div>
            </div>


            {/* price popover */}
            <Overlay
                show={showPricePopover}
                target={target}
                placement="bottom"
                rootClose={true} onHide={handleHidePrice}>
                <Popover id="popover-contained" bsPrefix="popover visitor">
                    <Popover.Content className="visitor-counter">
                        <OverlayPrice prices={prices} refPriceMin={refPriceMin} refPriceMax={refPriceMax} handleChangePrice={handleChangePrice} />
                    </Popover.Content>
                </Popover>
            </Overlay>
            {/* price popover */}

            {/* bedrooms popover */}
            <Overlay
                show={showBedroomsPopover}
                target={target}
                placement="bottom"
                rootClose={true} onHide={handleHideBedroom}>
                <Popover id="popover-contained" bsPrefix="popover visitor">
                    <Popover.Content className="visitor-counter">
                        <div className="visitor-line">
                            <span>Beds</span>
                            <Counter value={beds} />
                        </div>
                        <div className="visitor-line">
                            <span>Bedrooms</span>
                            <Counter value={bedrooms} />
                        </div>
                        <div className="popover__line d-flex justify-content-between align-items-center">
                            <p className="button-clear mb-0">Clear</p>
                            <button className="btn btn-secondary">Apply</button>
                        </div>
                    </Popover.Content>
                </Popover>
            </Overlay>
            {/* bedroom popover */}

            {/* instant booking popover */}
            <Overlay
                show={showInstantBookingPopover}
                target={target}
                placement="bottom"
                rootClose={true} onHide={handleHideInstantBooking}>
                <Popover id="popover-contained" bsPrefix="popover visitor">
                    <Popover.Content className="visitor-counter">
                        <div className="popover__line">
                            <p className="popover__summary">
                                Book without waiting for owner approval
                            </p>
                        </div>
                        <div className="popover__line">
                            <Checkbox>Instant Book</Checkbox>
                        </div>
                        <div className="popover__line">
                            <button className="btn btn-secondary btn-block">Apply</button>
                        </div>
                    </Popover.Content>
                </Popover>
            </Overlay>
            {/* instant booking popover */}

            {/* sort popover */}
            <Overlay
                show={showSortPopover}
                target={target}
                placement="bottom"
                rootClose={true} onHide={handleHideSort}>
                <Popover id="popover-contained" bsPrefix="popover visitor">
                    <Popover.Content className="visitor-counter">
                        <div className="visitor-line">
                            Sort
                        </div>
                    </Popover.Content>
                </Popover>
            </Overlay>
            {/* sort popover */}


            <Modal show={showFilterModal} onHide={handleHideFilter}>
                <Modal.Header closeButton>
                    <Modal.Title><i className="icon icon-search  mr-2"></i> More Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>

        </div>
    )
}

export default FilterBox;