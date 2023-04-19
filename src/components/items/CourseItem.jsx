import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Card from "../UI/Card";
import classes from "./ItemStyles.module.css";

const CourseDetails = () => {
  const location = useLocation();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (location.state) {
      setCourse(location.state);
    }
  }, []);
  return (
    <>
      {course && (
        <Card className={classes.background}>
          <article className="course-info">
            <h3>{course.courseTitle}</h3>
            <p>
              <b>Description:</b> <br /> {course.description}
            </p>
            <p>
              <b>Course No:</b>
              <span className={classes.italic}> {course.courseNumber}</span>
            </p>
            <p>
              <b>Duration:</b> {course.courseLength}
            </p>
            <p>
              <b>Start date:</b> {course.startDate}
            </p>
          </article>
        </Card>
      )}
    </>
  );
};

export default CourseDetails;
