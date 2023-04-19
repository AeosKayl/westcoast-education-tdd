//import logo from "./logo.svg";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Layout from "./pages/RootLayout";
import TeacherDetails from "./components/items/TeacherItem";
import CourseDetails from "./components/items/CourseItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:id", element: <CourseDetails /> },
      { path: "/teachers", element: <Teachers /> },
      { path: "/teachers/:id", element: <TeacherDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <header></header>
      <main>
        <Home />
        <Courses />
        <Teachers />
      </main>
      <footer></footer> */}
    </>
  );
}

export default App;
