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
        <div className='row'>
          <div className='col-7'>
            <img
              src={weather}
              alt=''
              className='img-fluid rounded shadow p-2 m-3'
            />
          </div>
          <div className='col'>
            <div className={`${styles.overview} m-3`}>
              <p className='text-muted'>
                Real-time weather data powered by OpenWeatherMap API
              </p>
              <ul>
                <li>
                  Responsive layouts with unique features for desktop
                  and mobile.
                </li>
                <li>
                  Desktop version includes customizable background video and
                  associated audio, while mobile offers a dark mode toggle for
                  seamless usability.
                </li>
                <li>
                  Added interactive elements like a "light" button on the
                  desktop version to improve temperature visibility,
                  prioritizing accessibility and user-friendly design.
                </li>
              </ul>
              <ProjectLinks src='https://doaaweatherappv1.netlify.app/' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWeather;
