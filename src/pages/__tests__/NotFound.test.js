import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("NotFound has a Jumbotron", () => {
  it("NotFound has a Jumbotron message ", () => {
    const notFound = shallow(<NotFound />);
    const renderJumboTron = notFound.find("Jumbotron");
    expect(renderJumboTron.length).toEqual(1);
  });
});
