import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Action creators test", function () {
  it("Calling the creator with 1 as argument should return: { type: SELECT_COURSE, index: 1 }", function () {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("Calling the creator with 1 as argument should return: { type: UNSELECT_COURSE, index: 1 }", function () {
    const result = unSelectCourse(1);

    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
