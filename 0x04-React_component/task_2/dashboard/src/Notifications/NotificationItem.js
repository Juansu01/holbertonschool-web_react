import React from "react";

function NotificationItem({type, value, html}) {

    if (value) {
        return <li data-notification-type={type}>{value}</li>;
    }

    return (<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>);
}

export default NotificationItem;
