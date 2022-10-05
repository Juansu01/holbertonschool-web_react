import { shallow } from 'enzyme'
import Notifications from './Notifications'
import React from "react";

const wrapper = shallow(<Notifications />)

describe("<Notifications /> Test", () => {
  it("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true)
  })
})
