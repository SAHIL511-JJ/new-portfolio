import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quizbeat from "../../Assets/Projects/quizbeat.png";
import nlpEngine from "../../Assets/Projects/nlp-engine.png";
import clarityAi from "../../Assets/Projects/clarity.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizbeat}
              isBlog={false}
              title="QuizBeat"
              description="A JavaScript web app using FastAPI and Gemini API to generate quizzes. A friendly competition platform where digital warriors can challenge friends to academic battles."
              ghLink="https://github.com/SAHIL511-JJ/QuizBeat-"
              demoLink="https://quiz-beat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlpEngine}
              isBlog={false}
              title="NLP Query Engine"
              description="A lightweight tool turning plain-English questions into hybrid answers by combining SQL data and unstructured documents. Built with Python, FastAPI, and TF-IDF."
              ghLink="https://github.com/SAHIL511-JJ/nlp-engine"
              demoLink="https://youtu.be/V4By3qqHRP8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clarityAi}
              isBlog={false}
              title="Clarity.ai"
              description="Privacy-first AI inference on local and edge devices. A lightweight TypeScript project designed for low latency and minimal setup, perfect for prototyping on-device features."
              ghLink="https://github.com/SAHIL511-JJ"
              demoLink="https://local-edge-efficient-ai-running-loc.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
