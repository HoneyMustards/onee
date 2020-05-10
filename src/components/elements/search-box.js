import React, {useState, useRef} from 'react';
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay'

import 'react-dates/initialize';

import VisitorCounter from "./visitor-counter";
import Checkbox from "./form/checkbox";
import DatePicker from "./datepicker";

const SearchBox = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const [adult, setAdult] = useState(2);
    const [child, setChild] = useState(0);
    const [pet, setPet] = useState(0);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    } 

    const hideClick = (event) => {
        setShow(false);
    }

    return(
        <ul className="search-box">
            <li className="search-input">
                <i className="icon icon-pin icon-1-5"></i>
                <input type="text" placeholder="Where do you want to go?" className="input-group input-group-lg"/>
            </li>
            <li>
                <DatePicker date="2020-04-26" onChange={e => console.log(e.target.value)} />
            </li>
            <li>
                <a onClick={handleClick} className="search-item"><i className="icon icon-guests icon-1-5 mr-10"></i> Guests</a>
            </li>
            <li className="search-button">
                <button className="btn btn-secondary p-0 text-center"><i className="icon icon-search icon-1-5 mr-10"></i> Search</button>
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