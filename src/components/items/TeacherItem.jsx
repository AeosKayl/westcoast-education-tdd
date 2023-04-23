import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Card from "../UI/Card";
import classes from "./ItemStyles.module.css";

const TeacherDetails = () => {
  const location = useLocation();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    if (location.state) {
      setTeacher(location.state);
    }
  }, []);

  return (
    <>
      {teacher && (
        <Card className={classes.background}>
          <article className="teacher-info">
            <h3>
              {teacher.firstName} {teacher.lastName}
            </h3>
            <p>
              <b>Competencies:</b>
              <br /> {teacher.competencies}
            </p>
            <p>
              <b>Phone No:</b> {teacher.phoneNumber}
            </p>
            <p>
              <b>Social Security No:</b> {teacher.personalNumber}
            </p>
            <p>
              <b>Email:</b> {teacher.email}
            </p>
          </article>
        </Card>
      )}
    </>
  );
};

export default TeacherDetails;
