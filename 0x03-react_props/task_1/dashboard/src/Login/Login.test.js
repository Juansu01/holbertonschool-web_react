import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Component renders two inputs", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.App-login input")).toHaveLength(2);
  });
  it("Component renders two labels", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("div.App-login label")).toHaveLength(2);
  });
});
