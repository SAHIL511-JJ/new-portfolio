import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Lamture </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as an intern at <span className="purple">Ekam Apps</span>.
            <br />
            I am a final year <span className="purple">BCA (Science)</span> student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good enough is not good enough for me"{" "}
          </p>
          <footer className="blockquote-footer">Sahil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
