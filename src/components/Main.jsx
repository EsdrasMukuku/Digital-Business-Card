import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/main.css";


export default function Main() {
  return (
    <div className="main">
       
      <div className="heading">
        <h1>Laura Smith</h1>
        <span>Frontend Developer</span>
        <p>laurasmith.website</p>
      </div>
      <div className="btns">
        <button><h4><FontAwesomeIcon icon={faEnvelope} /></h4> Email</button>
        <button><h4><FontAwesomeIcon icon={faLinkedin} /></h4>  LinkedIn</button>
      </div>
      <section>
        <div className="about section">
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
      </section>
      <section>
        <div className="interest section">
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </section>
      
    </div>
  );
}
