import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home has some welcome text", () => {
  it("Home displays some text", () => {
    const renderHome = shallow(<Home />);
    const renderText = renderHome.find("h1");
    expect(renderText.length).toEqual(1);
  });
});
