import React from "react";
import door from "../assets/doorSid.PNG";
import laptop from "../assets/laptopSid.PNG";
import philosophy from "../assets/philosophySid.PNG";
import clouds from "../assets/clouds.png";
import clouds2 from "../assets/clouds2.png";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <img src={door} alt="" className="doorSid" />
        <div className="introContent">
          <div>
            I'm <span>Siddhant</span>
          </div>
          <p>
            A full-stack web developer and engineer helping people turn their
            visions into a digital reality. I specialize in building modern
            mobile and web-based apps.
          </p>
          <div className="homebtn">
            <button className="resumeButton">See my Resume</button>
            <button className="getButton">Get in touch</button>
          </div>
        </div>
      </div>
      <div className="workEducation">
        <div>
          <div className="workHeader">Work Experience</div>
          <div className="workEx">
            <span>SDE-Intern @AMAZON Inc</span>
            <p>
              Worked in the Consumer Payments Organization under International
              Co-Branded Credit Card Tech Team.
            </p>
            <button className="moreButton">Learn more</button>
          </div>
        </div>

        <img src={laptop} alt="" className="laptopSid" />
        <div>
          <div className="educationHeader">Education</div>
          <div className="education">
            <span>Indian Institute of Information Technology Pune</span>
            <p>Bachelors in Electronics and Communication Engineering</p>
            <button className="moreButton">Learn more</button>
          </div>
        </div>
      </div>
      <div className="philosophyHeader">Philosophy & Values</div>
      <div className="philosophy">
        <div>
          <p>
            My philosophy centers on empowering individuals through empathetic
            support, focusing on co-creating sustainable solutions and nurturing
            self-reliance. Guided by values of empathy, collaboration, teaching,
            and respecting autonomy, I celebrate progress and commit to
            continuous learning. With a belief in paying it forward, I aim to
            ignite lasting change and be a catalyst for personal growth.
          </p>
          <button className="moreButton">More about me</button>
        </div>
        <img src={philosophy} alt="" className="philSid" />
      </div>
    </div>
  );
}

export default Home;
