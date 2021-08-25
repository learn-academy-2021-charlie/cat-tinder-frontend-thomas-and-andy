import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DevEdit from "../DevEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevEdit renders", () => {
  it("displays a h3 tag identifying as a the edit page", () => {
    const devEdit = shallow(<DevEdit />);
    const editForm = devEdit.find("h3");
    expect(editForm.length).toEqual(1);
  });
});
