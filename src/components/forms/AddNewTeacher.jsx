import { useRef, useContext, useState } from "react";
import { StoreContext } from "../../store/StoreContext";
import { v4 as uuidv4 } from "uuid";

import BaseButton from "../UI/BaseButton";
import classes from "./Forms.module.css";

const AddNewTeacher = () => {
  const { teachers, setTeachers, setOpenModal } = useContext(StoreContext);
  const [formDisabled, setFormDisabled] = useState(true);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const personalNumRef = useRef();
  const competenciesRef = useRef();

  const postTeacher = async (teacher) => {
    const response = await fetch(`http://localhost:3010/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });
    const data = await response.json();
    //console.log(data);
    setTeachers([...teachers, data]);

    if (response.status === 201) {
      return data;
    }

    throw new Error("API error");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeacher = {
      id: uuidv4(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
      personalNumber: personalNumRef.current.value,
      competencies: competenciesRef.current.value,
    };
    postTeacher(newTeacher);
    setOpenModal(false);
  };

  const handleOnChange = () => {
    firstNameRef.current.value.trim() !== "" &&
    lastNameRef.current.value.trim() !== "" &&
    emailRef.current.value.trim() !== "" &&
    phoneRef.current.value.trim() !== "" &&
    personalNumRef.current.value.trim() !== "" &&
    competenciesRef.current.value.trim() !== ""
      ? setFormDisabled(false)
      : setFormDisabled(true);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onChange={handleOnChange}
      className={classes.form}
    >
      <fieldset className={classes.field}>
        <legend className={classes.legend}>
          <h2>Add New Teacher</h2>
        </legend>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            ref={firstNameRef}
            id="first-name"
            autoFocus
            required
          />
        </div>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" ref={lastNameRef} id="last-name" required />
        </div>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" ref={emailRef} required />
        </div>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="phone-number">Phone Number</label>
          <input type="tel" id="phone-number" ref={phoneRef} required />
        </div>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="personal-number">S-Security Number</label>
          <input
            type="text"
            id="personal-number"
            ref={personalNumRef}
            required
          />
        </div>
        <div className={`${classes.control} ${classes.teachers}`}>
          <label htmlFor="competencies-input">Competencies</label>
          <input
            type="text"
            id="competencies-input"
            ref={competenciesRef}
            required
          />
        </div>
        <BaseButton
          type="submit"
          className={classes.addBtn}
          disabled={formDisabled}
        >
          {formDisabled ? "Fill Info" : "Add Teacher"}
        </BaseButton>
      </fieldset>
    </form>
  );
};

export default AddNewTeacher;
