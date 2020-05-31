import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";

//Clean the DOM
beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Test checkbox" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
    });

    it("accepts a click action", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Test checkbox" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(queryByTestId("checkbox-action"));
    });
    it("accepts a key down action", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Test checkbox" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("checkbox-action"));
    });
  });
});
