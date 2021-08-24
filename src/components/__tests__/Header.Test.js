import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header has App name", () => {
  it("Header displays app name in an h4 tag", () => {
    const renderHeader = shallow(<Header />);
    const renderText = renderHeader.find("h4");
    expect(renderText.length).toEqual(1);
  });
});
