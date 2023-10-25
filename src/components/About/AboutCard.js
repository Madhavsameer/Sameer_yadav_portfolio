import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhav Sameer </span>
            from <span className="purple"> Patna, India.</span>
            <br /> I am a Third year student pursuing a B.tech degree in Computer Science
            Enginnering from Centurion University, Paralakhemundi
            <br />
            Additionally, I am currently working on multiple projects in Robotics & Web-development field
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the world
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to the Endless Music
            </li>
            <li className="about-activity">
              <ImPointRight /> And Creating the Contents on different topics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work hard in Silence let your Success make the Noise...🙂"{" "}
          </p>
          <footer className="blockquote-footer">Madhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
