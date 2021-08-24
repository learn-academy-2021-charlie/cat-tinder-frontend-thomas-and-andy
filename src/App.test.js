import { render, screen } from "@testing-library/react";

import App from "./App";
// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import Home from "./pages/Home";
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("when app render", () => {
  it("Header and Footer exist", () => {
    //arrange
    const renderApp = shallow(<App />);
    //act
    const renderHeader = renderApp.find("Header");
    const renderFooter = renderApp.find("Footer");

    //assert
    expect(renderHeader.length).toEqual(1);
    expect(renderFooter.length).toEqual(1);
  });

  it('provides route "/"  to home component', () => {
    //arrange
    const renderApp = shallow(<App />);
    //act
    const renderHome = renderApp.find('[path="/"]');

    //assert
    expect(renderHome.props().component).toEqual(Home);
  });
});
