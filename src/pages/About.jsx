import clubsite from "../assets/projects/proj-clubsitemobile.svg";
import styles from "../styles/AboutStyles.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <img src={clubsite} alt='' className='img-fluid ps-5 pt-5' />
          </div>
          <div className={`${styles.aboutDescription} col-7 p-5`}>
            <ul>
              <li>
                Throughout my academic and professional journey, I have
                developed a range of full-stack applications, from collaborative
                school projects to leading the creation of non-conformance
                reporting software for a local company through a
                community-sponsored initiative.
              </li>
              <li>
                My co-op experience further refined my skills, as I designed and
                implemented a web application to centralize client reports and
                developed dashboards that enhance insights across departments.
              </li>
              <li>
                Recognized for my web design skills, I earned a bronze medal in
                Web Design and Development at the 2024 Skills Ontario
                competition.
              </li>
              <li>
                Outside of work, I find inspiration in spending time with family
                and friends, exploring nature, hiking, skateboarding, reading,
                and engaging in creative outlets like playing guitar, or painting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
