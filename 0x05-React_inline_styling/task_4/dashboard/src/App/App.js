import React, { Component } from 'react';
import { getLatestNotification } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "default", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.keyCombinationHandler = this.keyCombinationHandler.bind(this);
  }

  keyCombinationHandler(event) {
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyCombinationHandler);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyCombinationHandler);
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className={css(styles.app)}>
        <Header />
      </div>
      <div className={css(styles.body)}>
        {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
      </div>
      <BodySection title="News from the School">
          <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
          </p>
      </BodySection>
      <div className={css(styles.footer)}>
        <Footer  />
      </div>

  </>
    );
  }
}

const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  app: {
    borderBottom: `3px solid ${cssVars.mainColor}`,
  },

  body: {
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    borderTop: `3px solid ${cssVars.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    fontStyle: "italic",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
