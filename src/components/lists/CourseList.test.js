import { screen, render } from "@testing-library/react";

import { setupServer } from "msw/node";
import { rest } from "msw";

import CourseList from "./CourseList";

describe("CourseList component", () => {
  const setup = () => render(<CourseList />);

  describe("CourseList component layout", () => {
    test('has a title of "Our Courses"', () => {
      setup();

      const pageTitle = screen.getByRole("heading", {
        name: "Our Courses",
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("CourseList API request", () => {
    //
    test("renders a list of courses if request is successful", async () => {
      const server = setupServer(
        rest.get("http://localhost:3010/courses", (req, res, context) => {
          return res(
            context.json([
              {
                id: 2,
                courseTitle: "Deep dive into React",
                courseNumber: 564753,
                courseLength: "5 days",
                startDate: "2023-06-21",
                description:
                  "In this course, you will learn the core fundamentals of React, disecting its components, structures and learn how the library functions in a detailed fashion.",
              },
            ])
          );
        })
      );

      server.listen();

      setup();

      const courses = await screen.findAllByRole("listitem");
      // Act...

      // Assert ...
      expect(courses).not.toHaveLength(0);
    });
  });

  //
});
