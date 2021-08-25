import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DevEdit from "../DevEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("When DevEdit renders", () => {
  it("displays a form for editing the associated id", () => {
    const devEdit = shallow(<DevEdit />);
    const editForm = devEdit.find("handeSubmit");
    expect(editForm.length).toEqual(1);
  });
});
