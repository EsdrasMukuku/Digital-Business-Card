import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'


export default function Footer(){
    return(
        // <h3><FontAwesomeIcon icon={faSquareFacebook} /></h3>
        <footer>
            <ul>
                <li><h3><FontAwesomeIcon icon={faSquareTwitter} /></h3></li>
                <li><h3><FontAwesomeIcon icon={faSquareFacebook} /></h3></li>
                <li><h3><FontAwesomeIcon icon={faSquareInstagram} /></h3></li>
                <li><h3><FontAwesomeIcon icon={faSquareGithub} /></h3></li>
            </ul>
        </footer>
    )
}