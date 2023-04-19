import useHttp from "../hooks/use-http";
import { useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreContext";

import TeachersList from "../components/lists/TeachersList";
import BaseButton from "../components/UI/BaseButton";
import classes from "./Pages.module.css";

const Teachers = () => {
  const { teachers, setTeachers } = useContext(StoreContext);
  const { data } = useHttp("teachers");

  console.log(data);

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  return (
    <section className={`${classes.page} ${classes.teachers}`}>
      <h1>Teachers</h1>
      <BaseButton className={classes.addBtn}>Add New Teacher</BaseButton>
      <TeachersList teachers={teachers} />
    </section>
  );
};

export default Teachers;
