import styles from "./HeroStyles.module.css";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
import mail from "../../assets/mail-icon.svg";
import github from "../../assets/github-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import pfp from "../../assets/pfp.png";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className='d-flex align-items-center vh-100'>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.headingContainer} col-7`}>
              <div className='row'>
                <h1 className='ms-5'>Doaa Awan</h1>
              </div>
              <div className='row'>
                <h2 className='mt-4 text-center'>
                  <span className={`${styles.leftBorder}`}></span>Software
                  Developer
                </h2>
              </div>
            </div>
            <div className='col-5'>
              <img
                src={pfp}
                alt='Profile'
                className={`${styles.imgHero} img-fluid border rounded-circle shadow`}
              />
            </div>
          </div>
          <div className='row'>
            <div className={`${styles.buttons} d-flex justify-content-center`}>
              <a href='https://www.linkedin.com/in/doaa-awan/' target='_blank'>
                <img
                  src={linkedin}
                  alt=''
                  className={`${styles.test} img-fluid shadow`}
                />
              </a>
              <a
                href='https://github.com/DoaaAwan?tab=repositories'
                target='_blank'
              >
                <img
                  src={github}
                  alt=''
                  className={`${styles.test} img-fluid shadow`}
                />
              </a>
              <a href='mailto:doaa.awan@gmail.com'>
                <img
                  src={mail}
                  alt=''
                  className={`${styles.test} img-fluid shadow`}
                />
              </a>

              {/* <FaLinkedin
                className={`${styles.iconSocial} border rounded-circle`}
              />
              <a
                href="https://github.com/Doaa-Awan?tab=repositories"
                target="_blank"
              >
                <MdOutlineMail
                  className={`${styles.iconSocial} ${styles.emailIcon} border rounded-circle`}
                />
              </a>
              <a
                href="https://github.com/Doaa-Awan?tab=repositories"
                target="_blank"
              >
                <FaGithub className={`${styles.iconSocial}`} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
