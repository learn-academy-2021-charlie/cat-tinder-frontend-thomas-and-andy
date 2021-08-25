import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DevShow from "../DevShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevShow render", () => {
  it("displays a show heading", () => {
    const devShow = shallow(<DevShow />);
    const showHeading = devShow.find("h3");
    expect(showHeading.text()).toEqual("This is the Show");
  });
});
