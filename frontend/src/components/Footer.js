import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="Footer">
            <a href="https://github.com/blitzmartin" target="_blank" ><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/demartinodev/" target="_blank" ><FaLinkedinIn size={20} /></a>
            <h4>Annalisa De Martino &copy; 2022</h4>
        </div>
    )
}