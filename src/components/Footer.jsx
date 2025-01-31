// Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  let year = new Date();

  return (
    <footer>
      <div>
        <p>Veja mais projetos no meu Linkedin:</p>
        <a href="https://www.linkedin.com/in/roberto-de-oliveira-35976621b/">
          <BsLinkedin className="linkedin" />
        </a>
      </div>
      <div>
        <span> Password &copy; {year.getFullYear()} </span>
      </div>
      <div>
        <p>Veja meus repositórios:</p>
        <a href="https://github.com/Popotomimi">
          <BsGithub className="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
