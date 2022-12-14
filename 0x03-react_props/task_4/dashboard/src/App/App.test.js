import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("CourseList is not displayed when isLoggedIn is false", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  })
  it("Diplays CourseList when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});
