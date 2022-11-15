import { mount } from "enzyme";
import React from "react";
import withLogging from "./WithLogging";
import Login from "../Login/Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing <WithLogging />", () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Makes sure console.log is called when mounting and unmounting using pure html", () => {

    console.log = jest.fn();
    const HOC = withLogging(() => <p />);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(1,"Component Component is mounted");
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2,"Component Component is going to unmount");

    jest.restoreAllMocks();
  });
  it("Makes sure console.log is called with the name of the component when mounting and unmounting", () => {

    console.log = jest.fn();
    const HOC = withLogging(Login);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(1,"Component Login is mounted");
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2,`Component Login is going to unmount`);

    jest.restoreAllMocks();
  });
});
