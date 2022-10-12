import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(function NotificationItem({
  type, value, html, markAsRead, id}) {

  if (value) {

    return <li data-notification-type={type} onClick={() => markAsRead(id)}>
        {value}
      </li>

  } else {

    return <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
  }

});

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
