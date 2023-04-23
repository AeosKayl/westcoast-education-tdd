import useHttp from "../hooks/use-http";
import { useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreContext";

import TeachersList from "../components/lists/TeachersList";
import BaseButton from "../components/UI/BaseButton";
import classes from "./Pages.module.css";
import Modal from "../components/UI/Modal";
import AddNewTeacher from "../components/forms/AddNewTeacher";

const Teachers = () => {
  const { teachers, setTeachers, setOpenModal, openModal } =
    useContext(StoreContext);
  const { data } = useHttp("teachers");

  //console.log(data);

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  return (
    <>
      <Modal
        open={openModal}
        header="Form Model"
        onClose={() => setOpenModal(!openModal)}
      >
        <AddNewTeacher />
      </Modal>
      <section className={`${classes.page} ${classes.teachers}`}>
        <div>
          <h1>Teachers</h1>
          <BaseButton
            className={classes.addBtn}
            onClick={() => setOpenModal(!openModal)}
          >
            Add New
          </BaseButton>
        </div>
        <TeachersList teachers={teachers} />
      </section>
    </>
  );
};

export default Teachers;
