import haver from "../assets/projects/full-haver.svg";
import styles from "../styles/ProjectStyles.module.css";
import ProjectLinks from "../sections/ProjectLinks/ProjectLinks";

function ProjectHaver() {
  return (
    <div className={styles.detailsContainer}>
      <div className='container'>
        <h2 className={`${styles.detailsTitle} clrHaver`}>
          Haver & Boecker
          <span className={styles.detailsSkill}>ASP.NET MVC</span>
          <span className={styles.detailsSkill}>C#</span>
          <span className={styles.detailsSkill}>JavaScript</span>
          <span className={styles.detailsSkill}>SQLite</span>
          <span className={styles.detailsSkill}>XAML</span>
          <span className={styles.detailsSkill}>HTML/CSS</span>
          <span className={styles.detailsSkill}>Bootstrap</span>
        </h2>
        <div className='row'>
          <div className='col-7'>
            <div>
              <img
                src={haver}
                alt=''
                className='img-fluid rounded shadow p-2 m-3'
              />
            </div>
          </div>
          <div className='col'>
            <div className={`${styles.overview} m-3`}>
              <p className='text-muted'>
                Non-conformance report management system for a local
                manufacturing company
              </p>
              <ul>
                <li>
                  Role-based login functionality, providing tailored views and
                  permissions for different users, such as Admin, Finance, and
                  other team members.
                </li>
                <li>
                  Reports are created by Quality Representatives, and progress
                  through structured stages as each section is completed (from
                  Quality to Engineering, Operations, Procurement, and back for
                  final inspection).
                </li>
                <li>
                  Automated emails sent to notify specific teams as the report
                  transitions through stages, reducing delays and improving
                  efficiency.
                </li>
              </ul>
              <ProjectLinks src='https://github.com/Dorian-Orozco/JDAC4-Haver-Niagara'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHaver;
