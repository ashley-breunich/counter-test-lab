import React from "react";
import renderer from "react-test-renderer";
import Counter from "components/counter/counter.js";

describe("<Counter />", () => {
  it("is alive at application start - recognizes span", () => {
    let app = shallow(<Counter />);
    expect(app.find("span").exists()).toBeTruthy();
  });

  it("is alive at application start - recognizes a href", () => {
    let app = shallow(<Counter />);
    expect(app.find("a").exists()).toBeTruthy();
  });

  it("changes state on up-click", () => {
    let app = mount(<Counter />);
    let link = app.find(".up-clicker");
    link.simulate("click");
    expect(app.state("count")).toBe(1);
    expect(app.find("span").text()).toContain("1");
    link.simulate("click");
    expect(app.state("count")).toBe(2);
    expect(app.find("span").text()).toContain("2");
  });

  it("changes state on down-click", () => {
    let app = mount(<Counter />);
    let link = app.find(".down-clicker");
    link.simulate("click");
    expect(app.state("count")).toBe(-1);
    expect(app.find("span").text()).toContain("-1");
    link.simulate("click");
    expect(app.state("count")).toBe(-2);
    expect(app.find("span").text()).toContain("-2");
  });

  // it('renders correctly', () => {
  //   const counter = renderer.create(<Counter />).toJSON();
  //   expect(counter).toMatchSnapshot();
  // });
});
