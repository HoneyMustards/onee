import React from 'react';

const NotificationBox = () => {
    return (
        <div className="box notification-box">
            <div className="header">
                <h3 className="title">Notifications & Latest News</h3>
            </div>
            <div className="body">
                <div className="notification-item">
                    <h4 className="title">Request a cancellition</h4>
                    <p className="summary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
                <div className="notification-item">
                    <h4 className="title">Request a cancellition</h4>
                    <p className="summary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div> 
                <div className="notification-item">
                    <h4 className="title">Request a cancellition</h4>
                    <p className="summary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>                           
            </div>
            <div className="footer">
                <div className="more text-center">
                    View All
                </div>    
            </div>
        </div>
    )
}

export default NotificationBox;