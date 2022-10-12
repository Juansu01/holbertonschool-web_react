import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Component renders img", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header img")).toHaveLength(1);
  });
  it("Component renders h1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header h1")).toHaveLength(1);
  });
});
