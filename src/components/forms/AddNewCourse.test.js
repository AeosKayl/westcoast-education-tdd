import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewCourse from "./AddNewCourse";

describe("AddNewCourse component", () => {
  const setup = () => render(<AddNewCourse />);

  describe("Layout", () => {
    test('has a page title of "Add New Course"', () => {
      setup();

      const pageTitle = screen.getByRole("heading", { name: "Add New Course" });

      expect(pageTitle).toBeInTheDocument();
    });

    test("has a course title input field", () => {
      setup();

      const courseTitleInput = screen.getByLabelText("Title");

      expect(courseTitleInput).toBeInTheDocument();
    });

    test("has a course length input field", () => {
      setup();

      const courseLengthInput = screen.getByLabelText("Duration");

      expect(courseLengthInput).toBeInTheDocument();
    });

    test("has a start date input field", () => {
      setup();

      const startDateInput = screen.getByLabelText("Start Date");

      expect(startDateInput).toBeInTheDocument();
    });

    test("has a description input field", () => {
      setup();

      const descriptionInput = screen.getByLabelText("Description");

      expect(descriptionInput).toBeInTheDocument();
    });
  });

  describe("Form interactions", () => {
    test("submit button should be initially disabled", () => {
      setup();
      const submitBtn = screen.getByRole("button", { name: "Fill Info" });
      expect(submitBtn).toBeDisabled();
    });

    test('submit button should be enabled when all fields are filled and change its name to "Add Course"', async () => {
      setup();

      const titleInput = screen.getByLabelText("Title");
      const descriptionInput = screen.getByLabelText("Description");
      const courseLength = screen.getByLabelText("Duration");
      const startDate = screen.getByLabelText("Start Date");
      const submitBtn = screen.getByRole("button", { name: "Fill Info" });

      await userEvent.type(titleInput, "Wakanda");
      await userEvent.type(descriptionInput, "Lorem ipsum");
      await userEvent.type(courseLength, "3 days");
      await userEvent.type(startDate, "2023-05-19");
      await userEvent.hover(submitBtn);

      expect(submitBtn).toHaveAccessibleName("Add Course");
      expect(submitBtn).toBeEnabled();
    });
  });
});
