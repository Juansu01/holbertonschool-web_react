import React, { Component } from 'react';
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
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
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
    <>
      <Notifications displayDrawer listNotifications={listNotifications} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">{!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}</div>
        <Footer />
  </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
