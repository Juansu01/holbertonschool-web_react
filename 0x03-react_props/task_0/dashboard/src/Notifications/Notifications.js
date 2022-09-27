import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
    );
};

export default Notifications;
