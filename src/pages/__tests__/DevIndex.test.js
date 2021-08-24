import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DevIndex from "../DevIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevIndex render", () => {
  it("displays an index heading", () => {
    const devIndex = shallow(<DevIndex />);
    const indexHeading = devIndex.find("h3");
    expect(indexHeading.text()).toEqual("This is the index");
  });
});
