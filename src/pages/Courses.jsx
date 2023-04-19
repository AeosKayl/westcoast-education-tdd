import useHttp from "../hooks/use-http";
import { useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreContext";

import CourseList from "../components/lists/CourseList";
import BaseButton from "../components/UI/BaseButton";
import classes from "./Pages.module.css";

const Courses = () => {
  const { courses, setCourses } = useContext(StoreContext);
  const { data } = useHttp("courses");

  // console.log(data);

  useEffect(() => {
    if (data) {
      setCourses(data);
    }
  }, [data]);

  return (
    <section className={`${classes.page} ${classes.courses}`}>
      <h1>Courses</h1>
      <BaseButton className={classes.addBtn}>Add New Course</BaseButton>
      <CourseList courses={courses} />
    </section>
  );
};

export default Courses;
