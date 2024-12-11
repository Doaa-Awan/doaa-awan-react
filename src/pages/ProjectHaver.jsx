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
          <span className={styles.detailsSkill}>HTML/CSS</span>
          <span className={styles.detailsSkill}>XML</span>
          <span className={styles.detailsSkill}>Bootstrap</span>
        </h2>
        <div className='d-flex'>
          <img
            src={haver}
            alt=''
            className='img-fluid rounded shadow p-2 m-3'
          />
          <div className={`${styles.overview} m-3`}>
            <p className='text-muted'>
              Non-conformance report management system for a local manufacturing
              company
            </p>
            <ul>
              <li>
                The system features role-based login functionality, providing
                tailored views and permissions for different users, such as
                Admin, Finance, and other team members.
              </li>
            </ul>
            <ProjectLinks src='https://haverniagara2024.azurewebsites.net/' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHaver;
