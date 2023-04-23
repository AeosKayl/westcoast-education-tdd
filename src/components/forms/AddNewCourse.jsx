import { useRef, useContext, useState } from "react";
import { StoreContext } from "../../store/StoreContext";
import { v4 as uuidv4 } from "uuid";

import BaseButton from "../UI/BaseButton";
import classes from "./Forms.module.css";

const AddNewCourse = () => {
  const { courses, setCourses, setOpenModal } = useContext(StoreContext);
  const [formDisabled, setFormDisabled] = useState(true);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const startDateRef = useRef();
  const durationRef = useRef();

  const postCourse = async (course) => {
    const response = await fetch(`http://localhost:3010/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    const data = await response.json();
    // console.log(data);
    setCourses([...courses, data]);

    if (response.status === 201) {
      return data;
    }

    throw new Error("API error");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: uuidv4(),
      courseTitle: titleRef.current.value,
      courseNumber: Math.floor(Math.random() * 10000) + 9000,
      courseLength: durationRef.current.value,
      startDate: startDateRef.current.value,
      description: descriptionRef.current.value,
    };
    postCourse(newCourse);
    setOpenModal(false);
  };

  const handleOnChange = () => {
    titleRef.current.value.trim() !== "" &&
    descriptionRef.current.value.trim() !== "" &&
    startDateRef.current.value !== "" &&
    durationRef.current.value.trim() !== ""
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
          <h2>Add New Course</h2>
        </legend>
        <div className={classes.control}>
          <label htmlFor="course-title">Title</label>
          <input
            type="text"
            ref={titleRef}
            id="course-title"
            autoFocus
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            ref={descriptionRef}
            required
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" ref={startDateRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            placeholder="e.g. 5 weeks or 3 days"
            ref={durationRef}
            required
          />
        </div>
        <BaseButton
          type="submit"
          className={classes.addBtn}
          disabled={formDisabled}
        >
          {formDisabled ? "Fill Info" : "Add Course"}
        </BaseButton>
      </fieldset>
    </form>
  );
};

export default AddNewCourse;
