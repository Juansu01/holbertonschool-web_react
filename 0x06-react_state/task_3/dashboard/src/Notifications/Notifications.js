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
  }

  render() {
    const { displayDrawer,
            listNotifications,
            handleDisplayDrawer,
            handleHideDrawer,
            markNotificationAsRead
    } = this.props;

    const menuDisplay =
      css(displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow);

  return (
    <>
      <div className={css(styles.menuItem)} id="menuItem" onClick={handleDisplayDrawer}>
        <p className={menuDisplay}>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <button
            onClick={handleHideDrawer}
            style={buttonStyle} aria-label="close"
            id="closeNotificationPanel">
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
                markAsRead={this.markNotificationAsRead}
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

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: `3px dashed deepSkyBlue`,
  },

  "100%": {
    border: "3px dashed #e01d3f",
  },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    }
  },

  menuItemPNoShow: {
    marginRight: "8px",
    [screenSize.small]: {
      display: "none",
    },
  },

  menuItemPShow: {
    marginRight: "8px",
    backgroundColor: "white",
  },

  notifications: {
    float: "right",
    padding: "10px",
    marginBottom: "20px",
    animationName: [borderKeyframes],
    animationDuration: "0.8s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    ":hover": {
      border: `3px dashed deepSkyBlue`,
    },
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      ":hover": {
        border: "none",
      },
      position: "absolute",
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

export default Notifications;
