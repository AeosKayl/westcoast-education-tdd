import { Link } from "react-router-dom";

import BaseButton from "../components/UI/BaseButton";
import classes from "./Pages.module.css";

const Home = () => {
  return (
    <section className={`${classes.page} ${classes.home}`}>
      <h1>Westcoast Education - Digital</h1>
      <p className={classes.italic}>
        Westcoast Education has been in the educational branch for almost 40
        years. <br /> Our goal is and has been to provide technical education in
        the IT branch, specializing in system development studies, mainly web
        and mobile-application development. <br /> Now, we moved into the world
        of digital education.
      </p>
      <p className={classes.italic}>
        Ready to study something new? Feel free to browse through our available
        courses.
      </p>
      <Link to={`/courses`}>
        <BaseButton className={classes.exploreBtn}>
          Explore our courses!
        </BaseButton>
      </Link>
    </section>
  );
};

export default Home;
