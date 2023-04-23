import { Link } from "react-router-dom";

import classes from "./CourseList.module.css";
import Card from "../UI/Card";

const TeachersList = ({ teachers }) => {
  const createTeachersList = (data) => {
    return data.map((teacher) => (
      <li key={teacher.id}>
        <Card>
          <h3>
            {teacher.firstName} {teacher.lastName}
          </h3>
          <p>
            <b> Competencies:</b>
            <br /> {teacher.competencies}
          </p>
          <Link to={`/teachers/${teacher.id}`} state={teacher}>
            Click for details...
          </Link>
        </Card>
      </li>
    ));
  };

  return (
    <section>
      <h2>Our Teachers</h2>
      <ul className={classes.ul}>{createTeachersList(teachers)}</ul>
    </section>
  );
};

export default TeachersList;
