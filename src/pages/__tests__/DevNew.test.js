import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DevNew from "../DevNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevNew renders", () => {
  it("displays a form", () => {
    const devNew = shallow(<DevNew />);
    const newForm = devNew.find("Form");
    expect(newForm.length).toEqual(1);
  });
});
