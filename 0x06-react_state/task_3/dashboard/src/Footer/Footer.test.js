import { shallow, mount } from "enzyme";
import React from "react";
import Footer from "./Footer";
import AppContext, { user, logOut } from "../App/AppContext";

describe("<Footer />", () => {
  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Ensures that footer has 'Copyright' string", () => {
    const wrapper = mount(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });
  it("link is not displayed when logged out", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });
  it("link is displayed when user is logged in", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});
