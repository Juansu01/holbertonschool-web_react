import React, { Component } from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";


const buttonStyle = {
  background: "transparent",
  border: "none",
  position: "absolute",
  right: 20,
}

function logToConsole() {
  console.log("Close button has been clicked")
}

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const menuDisplay =
      css(displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow);

  return (
    <>
      <div className={css(styles.menuItem)} id="menuItem">
        <p className={menuDisplay}>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <button
            onClick={logToConsole}
            style={buttonStyle} aria-label="close">
            <img src={closeIcon} alt="close-icon" width="10"/>
          </button>
          <p className={css(styles.notificationsPTag)}>Here is the list of notifications</p>
          <ul className={css(styles.notificationsUL)}>
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
  }
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  menuItemPNoShow: {
    marginRight: "8px",
    [screenSize.small]: {
      display: "none",
    },
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  notifications: {
    float: "right",
    border: "3px dashed #e01d3f",
    padding: "10px",
    marginBottom: "20px",
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      position: "absolute",
      background: "white",
      height: "110vh",
      width: "100vw",
    },
  },

  notificationsPTag: {
    margin: 0,
    marginTop: "15px",
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },

});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
