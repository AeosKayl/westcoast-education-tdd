import useHttp from "../hooks/use-http";
import { useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreContext";

import CourseList from "../components/lists/CourseList";
import BaseButton from "../components/UI/BaseButton";
import classes from "./Pages.module.css";
import Modal from "../components/UI/Modal";
import AddNewCourse from "../components/forms/AddNewCourse";

const Courses = () => {
  const { courses, setCourses, setOpenModal, openModal } =
    useContext(StoreContext);
  const { data } = useHttp("courses");

  // console.log(data);

  useEffect(() => {
    if (data) {
      setCourses(data);
    }
  }, [data]);

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
        <AddNewCourse />
      </Modal>
      <section className={`${classes.page} ${classes.courses}`}>
        <h1>Courses</h1>
        <BaseButton
          className={classes.addBtn}
          onClick={() => setOpenModal(!openModal)}
        >
          Add New
        </BaseButton>
        <CourseList courses={courses} />
      </section>
    </>
  );
};

export default Courses;
