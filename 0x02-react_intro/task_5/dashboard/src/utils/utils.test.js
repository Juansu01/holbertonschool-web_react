import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"

describe("Testing utils functions", function () {
  describe("getFullYear test", function () {
    it("Should return the current year", function () {
      const currentYear = getFullYear()
      expect(currentYear).toEqual(new Date().getFullYear())
    })
  })
  describe("getFooterCopy test", function () {
    const isTrueMsg = "Holberton School"
    const isFalseMsg = "Holberton School main dashboard"

    it("Should return expected message when true is passed", function () {
      const testMsg = getFooterCopy(true)
      expect(testMsg).toEqual(isTrueMsg)
    })
    it("Should return expected message when false is passed", function () {
      const testMsg = getFooterCopy(false)
      expect(testMsg).toEqual(isFalseMsg)
    })
  })
  describe("getLatestNotification test", function () {
    it("Should return the correct string element", function () {
      const element = "<strong>Urgent requirement</strong> - complete by EOD";
      expect(getLatestNotification()).toEqual(element)
    })
  })
})
