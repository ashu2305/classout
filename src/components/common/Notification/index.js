import React from 'react';

import './style.scss';

const Notification = () => {
  const isNotification = true;
  return (
    <div className="vr-notification">
      {isNotification && <span className="new-notification"></span>}
      <i className="icon-notification" />
    </div>
  );
};

export default Notification;