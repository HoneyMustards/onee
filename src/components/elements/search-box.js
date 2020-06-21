import React, {useState, useRef, useEffect} from 'react';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { useRouter } from 'next/router';

import 'react-dates/initialize';

import VisitorCounter from "./visitor-counter";
import Checkbox from "./form/checkbox";
import Button from "./form/button";
import DatePicker from "./datepicker";

const SearchBox = (props) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(0);
    const [pet, setPet] = useState(0);
    const [hasAddFavourite, setHasAddFavourite] = useState(props.hasAddFavourite);

    const router = useRouter();

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    } 

    const hideClick = (event) => {
        setShow(false);
    }

    const searchClick = () => {
        router.push('/list');
    };

    return(
        <ul className="search-box">
            <li className="search-input">
                <i className="icon icon-pin icon-1-5"></i>
                <label htmlFor="">Where</label>
                <input type="text" placeholder="Where do you want to go?" className="input-group input-group-lg"/>
            </li>
            <li>
               <div className="search-box__date-picker-wrapper">
                    <i className="icon icon-calendar icon-1-5"></i>
                    <label htmlFor="">When</label>
                    <DatePicker date="2020-04-26" onChange={e => console.log(e.target.value)} />
               </div>
            </li>
            <li className="guests">
                <a onClick={handleClick} className="search-item"><i className="icon icon-guests icon-1-5 mr-10"></i> Guests</a>
            </li>
            <li className="search-button">
                <button className="btn btn-secondary p-0 text-center" onClick={searchClick}><i className="icon icon-search icon-1-5 mr-10"></i> Search</button>
            </li>
            <li  className={"search-box__save-as-favourite " +  (props.hasAddFavourite ? '' : 'd-none')}>
                <Button className="btn btn-text">
                    <i className="icon icon-save-search icon-1-5"></i>
                    Save as favourite search
                </Button>
            </li>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                rootClose={true} onHide={hideClick}>
                <Popover id="popover-contained" bsPrefix="popover visitor">
                <Popover.Content className="visitor-counter">
                    <div className="visitor-line">
                        <span>Adults</span>
                        <VisitorCounter value={adult} />
                    </div>
                    <div className="visitor-line">
                        <span>Child</span>
                        <VisitorCounter />
                    </div>
                    <div className="visitor-line">
                        <span>Pet</span>
                        <VisitorCounter />
                    </div>
                    <div className="visitor-line">
                        <Checkbox>with <b>family</b></Checkbox>
                        <Checkbox>with <b>friends</b></Checkbox>
                    </div>
                </Popover.Content>
                </Popover>
            </Overlay>
        </ul>
    )
}

export default SearchBox;