import mail from "../assets/mail-icon.svg";
import github from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";
import styles from "../styles/ContactStyles.module.css";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Let's get in touch!</h1>
      <h2 className='mb-5'>you can reach me through</h2>

      <div>
        <a href='https://www.linkedin.com/in/doaa-awan/' target='_blank'>
          <img
            src={linkedin}
            alt=''
            title='/doaa-awan'
            className={`${styles.contactButton} img-fluid shadow me-5`}
          />
        </a>
        <a href='mailto:doaa.awan@gmail.com'>
          <img
            src={mail}
            alt=''
            title='doaa.awan@gmail.com'
            className={`${styles.contactButton} img-fluid shadow`}
          />
        </a>
      </div>

      {/* <div className='mt-5'>
        <p className='text-muted'>
          <b>LinkedIn: </b>
          <a href='https://www.linkedin.com/in/doaa-awan/'>
            {" "}
            linkedin.com/in/doaa-awan/
          </a>
        </p>
        <p className='text-muted'>
          <b>Email: </b>
          <a href='mailto:doaa.awan@gmail.com'> doaa.awan@gmail.com</a>
        </p>
      </div> */}
    </div>
  );
}

export default Contact;
