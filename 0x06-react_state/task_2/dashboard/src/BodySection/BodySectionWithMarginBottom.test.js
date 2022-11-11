import { shallow } from "enzyme";
import React from "react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

describe("Testing <BodySectionWithMarginBottom />", () => {

    beforeAll(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("BodySectionWithMarginBottom renders without crashing", () => {
      const wrapper = shallow(<BodySectionWithMarginBottom />);
      expect(wrapper.exists()).toEqual(true);
    });
    it("Component should render correctly the children and one h2 element", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children node</p></BodySectionWithMarginBottom>);
    const BodySectionComponent = wrapper.find("BodySection");

    expect(BodySectionComponent).toHaveLength(1);
    expect(BodySectionComponent.props().title).toEqual("test title");

    const BodySectionChildren = BodySectionComponent.dive();

    const h2Tag = BodySectionChildren.find("h2");
    const pTag = BodySectionChildren.find("p");

    expect(h2Tag).toHaveLength(1);
    expect(h2Tag.text()).toEqual("test title");
    expect(pTag).toHaveLength(1);
    expect(pTag.text()).toEqual("test children node");
    });
});
