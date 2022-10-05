import { shallow } from 'enzyme'
import Notifications from './Notifications'
import React from "react";

const wrapper = shallow(<Notifications />)

describe("<Notifications /> Test", () => {
  it("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true)
  })
  it("Notifications renders Notification Item and first item has correct html", () => {
    const wrapper = shallow(<Notifications />)
    wrapper.update();
    const listItems = wrapper.find("NotificationItem")
    expect(listItems).toBeDefined()
    expect(listItems.first().html()).toEqual('<li data-notification-type="default">New course available</li>')
  })
})
