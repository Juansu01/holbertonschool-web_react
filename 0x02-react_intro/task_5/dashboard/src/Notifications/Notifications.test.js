import { shallow } from 'enzyme'
import Notifications from './Notifications'

const wrapper = shallow(<Notifications />)

describe("<Notifications /> Test", () => {
  it("Notifications renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true)
  })
  it("Notifications renders a 3 element list", () => {
    wrapper.update()
    expect(wrapper.find("li")).toHaveLength(3)
  })
  it("Text Here is the list of notifications is being rendered", () => {
    const string = "Here is the list of notifications"
    wrapper.update()
    expect(wrapper.find(".Notifications p").text()).toEqual(string)
  })
})
