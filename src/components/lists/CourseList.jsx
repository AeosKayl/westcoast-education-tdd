import { Link } from "react-router-dom";

import classes from "./CourseList.module.css";
import Card from "../UI/Card";

const CourseList = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3010/courses")
  //     .then((response) => response.json())
  //     .then((data) => setCourses(data));
  // }, []);

  const createCourseList = (data) => {
    return data.map((course) => (
      <li key={course.id}>
        <Card>
          <h3>{course.courseTitle}</h3>
          <p>
            <b>Start date:</b> {course.startDate}
          </p>
          <p>
            <b>Duration:</b> {course.courseLength}
          </p>
          <Link to={`/courses/${course.id}`} state={course}>
            Click for details...
          </Link>
        </Card>

        {/* <CourseItem course={course} /> */}
      </li>
    ));
  };

  return (
    <section>
      <h3>Our Courses</h3>
      <ul className={classes.ul}>{createCourseList(courses)}</ul>
    </section>
  );
};

export default CourseList;
