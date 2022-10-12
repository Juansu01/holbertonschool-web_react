import React, { Component } from 'react';
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import PropTypes from "prop-types";


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
      <Notifications displayDrawer listNotifications={listNotifications} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
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
          <p>Some Random Text</p>
      </BodySection>
      <Footer />
  </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
