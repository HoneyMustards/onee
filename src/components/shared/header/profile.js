import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';

import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/Overlay';
import CustomerDropdown from "./customer-dropdown";
import ProfileMenus from "./nav/profile-menu";

const Profile = (props) => {

    const [profileMenu, setProfileMenu] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const profileClick = (event) => {
      setProfileMenu(!profileMenu);
      setTarget(event.target);
    }

    return(
      <div className="d-flex align-center">
        <CustomerDropdown />
        <div className="profile" onClick={profileClick}>
          <div className="profile-content">Hello,
            <div className="profile-name"><i className="icon fs-6 icon-down"></i>{props.user.given_name} {props.user.family_name}</div>
          </div>
          <div className="profile-photo"><img src={props.user.picture} alt=""/></div>
          <div className="badge badge-pill badge-secondary badge-notification">3</div>
        </div>
        <OverlayTrigger trigger="hover" show={profileMenu} target={target} placement="bottom" container={ref.current} rootClose={true} onHide={() => setProfileMenu(false)}>
          <Popover id="popover-container">
          <Popover.Content>
            <ProfileMenus />
          </Popover.Content>
          </Popover>
        </OverlayTrigger>
      </div>
    )
  }

  const mapStateToProps = state => ({
    user: state.user.content
  });

  export default connect(mapStateToProps)(Profile);