import weather from "../assets/projects/full-weather.svg";
import styles from "../styles/ProjectStyles.module.css";
import ProjectLinks from "../sections/ProjectLinks/ProjectLinks";

function ProjectWeather() {
  return (
    <div className={styles.detailsContainer}>
      <div className='container'>
        <h2 className={`${styles.detailsTitle} clrWeather`}>
          Weather App
          <span className={styles.detailsSkill}>JavaScript</span>
          <span className={styles.detailsSkill}>HTML/CSS</span>
        </h2>
        <div className='d-flex'>
          <img
            src={weather}
            alt=''
            className='img-fluid rounded shadow p-2 m-3'
          />
          <div className={`${styles.overview} m-3`}>
            <p className='text-muted'>
              Real-time weather data powered by the OpenWeatherMap API
            </p>
            <ul>
              <li>
                Desktop site features background video and audio that can be
                changed by the user
              </li>
            </ul>
            <ProjectLinks src='https://doaaweatherappv1.netlify.app/' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWeather;
