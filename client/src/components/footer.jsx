import React from "react";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import x from "../assets/x.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerHead">Connect with me on</div>
      <div className="footerLinks">
        <a href="https://github.com/SJ1348">
          <img src={github} alt="" />
        </a>
        <a href="sidthokal@gmail.com">
          <img src={gmail} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/siddhant-thokal-2a44b5144">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://twitter.com/Sidhantthokal">
          <img src={x} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
