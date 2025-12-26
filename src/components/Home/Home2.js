import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Software Developer, Automation Tester, and Final Year Student</b>
              &nbsp;who loves transforming ideas into reliable, scalable products.
              <br />
              <br />I am currently working as an <b className="purple">Intern at Ekam Apps</b>.
              <br />
              <br />
              I’m proficient in
              <b className="purple">
                {" "}
                Python, JavaScript, and Modern Web Technologies.{" "}
              </b>
              <br />
              <br />
              My key areas of interest include developing new
              <b className="purple">
                {" "}
                Web Applications, Automation Scripts (Playwright),{" "}
              </b>
              and exploring <b className="purple">AI/ML integrations.</b>
              <br />
              <br />
              Whenever possible, I love building projects with <b className="purple">FastAPI</b> and
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
              &nbsp; like
              <b className="purple"> React.js and Next.js</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
