import { shallow, mount } from 'enzyme'
import Notifications from './Notifications'
import React from "react";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

const wrapper = shallow(<Notifications />)

describe("<Notifications /> Test", () => {
  let listNotifications
  let latestNotification

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true)
  })
  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div#menuItem");
    expect(item).toHaveLength(1);
  })
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />)
    wrapper.update()
    const item = wrapper.find("div#Notifications")
    expect(item).toHaveLength(0)
  })
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update()
    const item = wrapper.find("div#Notifications")
    expect(item).toHaveLength(1)
  })
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />)
    wrapper.update()
    const item = wrapper.find("div#Notifications")
    expect(item).toHaveLength(1)
  })

  describe("Notifications with listNotifications", () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } }
      ]
    })

    it("Notifications renders Notification Items and items have correct html", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      )
      expect(wrapper.exists())
      wrapper.update()
      const listItems = wrapper.find("NotificationItem")
      expect(listItems).toBeDefined()
      expect(listItems).toHaveLength(3)

      expect(listItems.at(0).html()).toContain("<li")
      expect(listItems.at(0).props().type).toEqual("default")
      expect(listItems.at(0).text()).toEqual("New course available")

      expect(listItems.at(1).html()).toContain("<li")
      expect(listItems.at(1).props().type).toEqual("urgent")
      expect(listItems.at(1).text()).toEqual("New resume available")

      expect(listItems.at(2).html()).toContain("<li")
      expect(listItems.at(2).props().type).toEqual("urgent")
      expect(listItems.at(2).text()).toEqual(
        "Urgent requirement - complete by EOD"
      )
    })
  })

  describe("Notifications without listNotifications or empty listNotifications", () => {
    beforeEach(() => {
      listNotifications = []
    })

    it("Notifications renders Notification list correectly when using empty list", () => {
      const wrapper = mount(
        <Notifications displayDrawer listNotifications={listNotifications} />
      )
      expect(wrapper.exists())
      wrapper.update()
      const listItems = wrapper.find("NotificationItem")
      expect(listItems).toHaveLength(1)
    })
    it("Notifications renders Notification Item correct without listNotifications", () => {
      const wrapper = mount(<Notifications displayDrawer />)
      wrapper.update()
      const listItems = wrapper.find("NotificationItem")
      expect(listItems).toHaveLength(1)
    })
    it("Test mockup the console.log function", () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      console.log = jest.fn()
      const instance = wrapper.instance()
      const mockId = 3
      instance.markAsRead(mockId)

      expect(console.log).toHaveBeenCalledWith(
        `Notification ${mockId} has been marked as read`
      )
      jest.restoreAllMocks()
    })
  })
  it("Doesn't rerender when using the same list.", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" }
    ]

    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />)

    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, "shouldComponentUpdate")

    wrapper.setProps({ listNotifications: listNotifications })

    expect(shouldComponentUpdate).toHaveBeenCalled()
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false)

    jest.restoreAllMocks()
  })

  it("Rerenders when called with a different list", () => {
    let listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ]

    const listNotifications2 = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: latestNotification } }
    ]

    console.log(listNotifications)
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />)

    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, "shouldComponentUpdate")

    wrapper.setProps({ listNotifications: listNotifications2 })

    expect(shouldComponentUpdate).toHaveBeenCalled()
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true)

    jest.restoreAllMocks()
  })
  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn()
    const handleHideDrawer = jest.fn()

    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    )

    wrapper.find("#menuItem").simulate("click")

    expect(handleDisplayDrawer).toHaveBeenCalled()
    expect(handleHideDrawer).not.toHaveBeenCalled()

    jest.restoreAllMocks()
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn()
    const handleHideDrawer = jest.fn()

    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    )

    wrapper.find("#closeNotificationPanel").simulate("click")

    expect(handleDisplayDrawer).not.toHaveBeenCalled()
    expect(handleHideDrawer).toHaveBeenCalled()

    jest.restoreAllMocks()
  })
})
