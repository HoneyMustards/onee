import React, {useState, useRef, useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import { connect } from 'react-redux';

// Actions
import { getCustomers } from '../../../../store/customers/action';

import Submit from '../../elements/form/button';
import Input from "../../elements/form/input";

const Customer = (props) => {

    //console.log(props);

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
      show ? props.onGetCustomers() : null;
    }, [show]);

    const handleClick = (event) => {
          setShow(!show);
          setTarget(event.target);
    };

    return(
      <div className="customer-dropdown">
        <Submit className="btn-outline-primary customer" onClick={handleClick} >
          <FormattedMessage id="header.select" />
        </Submit>
          <Overlay show={show} target={target} placement="bottom" container={ref.current} rootClose={true} onHide={() => setShow(false)}>
            <Popover id="popover-container">
            <Popover.Content>
                <Input placeholder="Please write a name" />
                <ul className="customer-list list menu-list">
                    <li>John Doe <span>Mobilazor CTO</span></li>
                    <li>John Doe <span>Onee CIO</span></li>
                    <li>John Doe North <span>Apple Head Of Design</span></li>
                </ul>
            </Popover.Content>
            </Popover>
          </Overlay>
      </div>
    )
};

const mapStateToProps = state => ({
  customers: state.customers
});

const mapDispatchToProps = {
  onGetCustomers: getCustomers
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
