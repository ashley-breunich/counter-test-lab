import React from "react";
import renderer from "react-test-renderer";
import Footer from "components/footer/footer.js";

describe("<Footer />", () => {
  it("is alive at application start", () => {
    let app = shallow(<Footer />);
    expect(app.find("footer").exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
