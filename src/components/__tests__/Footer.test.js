import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("Footer has developers names", () => {
  it("Footer displays Andy and Thomas", () => {
    const renderFooter = shallow(<Footer />);
    const renderText = renderFooter.find("h3");
    expect(renderText.length).toEqual(1);
  });
});
