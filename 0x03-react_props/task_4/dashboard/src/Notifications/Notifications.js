import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

const buttonStyle = {
  background: "transparent",
  border: "none",
  position: "absolute",
  right: 20,
}

function logToConsole() {
  console.log("Close button has been clicked")
}

function Notifications() {
    return (
    <div className="Notifications">
      <button onClick={logToConsole} style={buttonStyle}>
        <img src={closeIcon} alt="closeIcon" width="10" height="10"></img>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
    );
};

export default Notifications;
