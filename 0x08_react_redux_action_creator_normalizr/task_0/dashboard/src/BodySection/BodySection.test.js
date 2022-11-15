import { shallow } from "enzyme";
import React from "react";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing <BodySection />", () => {

    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("BodySection renders without crashing", () => {
      const wrapper = shallow(<BodySection />);
      expect(wrapper.exists()).toEqual(true);
    });
     it("BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
    const h2Tag = wrapper.find("h2");
    const pTag = wrapper.find("p");

    expect(h2Tag).toHaveLength(1);
    expect(h2Tag.text()).toEqual("test title");

    expect(pTag).toHaveLength(1);
    expect(pTag.text()).toEqual("test children node");
  });
});