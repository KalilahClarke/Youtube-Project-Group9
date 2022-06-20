import React from "react";
import "./About.css";

function About() {
  return (
    <article>
      <h1>About Project</h1>
      <p>
        This project was built in 9 days. Fellows worked together to create a
        strong communication system within the primary day as well as mapping
        out a timeline. Fellows were given the task to build{" "}
        <a href="Youtube.com">Youtube</a> with very specific requirements. This
        project accesses the teams React skills, Css skills, and comprehension
        of scope. They have made a few personal changes based on preference.
        Please enjoy your exploration of their take on Youtube.{" "}
      </p>

      <h2>Collaborators</h2>
      <div className="collaborators">
        <section className="ZiqianPan">
          <img
            src="https://avatars.githubusercontent.com/u/96352580?v=4"
            alt="Ziqian Pan Profile"
          />
          <h3>Ziqian Pan</h3>
          <a
            href="https://www.linkedin.com/in/ziqian-pan-943a171a4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/ZiqianPan"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>

          <p> <strong>8.4 Pursuit Fellow</strong> <br/>
          Prioritizing his dream to be a Full-Stack Developer, Ziqian has . Hobbies includes gaming and cooking. 


          </p>
        </section>

        <section className="TajiFuller">
          <img
            src="https://avatars.githubusercontent.com/u/82912560?v=4"
            alt="Taji Fuller Profile"
          />
          <h3>Taji Fuller</h3>
          <a
            href="https://www.linkedin.com/in/tajniquefuller/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Nique444"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <p>
            <strong>8.4 Pursuit Fellow</strong> <br/> Having a background Psychology as well being a skilled Computer Technician, Taji aspires to use her comprehension of <b>Human Behavior</b> to create sleek websites that are eye catching and engaging. Her passion is Full-Stack Development. Building her skills in Javascript, React, JSX, Css... but don't worry more languages are soon to come.
          </p>
        </section>

        <section className='KalilahClarke'>
          <img
            src="https://avatars.githubusercontent.com/u/75289632?v=4"
            alt="Kalilah Clarke Profile"
          />
          <h3>Kalilah Clarke</h3>
          <a
            href="https://www.linkedin.com/in/kalilah-clarke-36876530/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/KalilahClarke"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <p>
            <b>8.4 Pursuit Fellow</b> <br /> Fluent in Javascript React,
            learning one language at a time. Using her Education background she
            endeavors to create Applications that are simplistic and clean; that
            are used to simplify daily life. <strong>Adaptability</strong> is
            the name of her Game.
          </p>
        </section>
      </div>
    </article>
  );
}

export default About;
