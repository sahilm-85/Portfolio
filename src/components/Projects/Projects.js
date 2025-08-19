import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eeg from "../../Assets/Projects/eeg.png";
import mediapipe from "../../Assets/Projects/mediapipe.png";
import codesynth from "../../Assets/Projects/codesynth.png";
import brain from "../../Assets/Projects/brain.png";

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
              imgPath={brain}
              title="XAI-Enhanced Limb Task Identification"
              description="Authored a book chapter on EEG-based motor movement classification for prosthetic research. Utilized EEG brainwave signals, processed with advanced feature extraction, and evaluated using 10 machine learning models to classify hand and leg movements into 8 categories. Incorporated Explainable AI (XAI) techniques to enhance interpretability and reliability, contributing to the field of brain-computer interfaces and next-generation prosthetic control systems."
              // ghLink=""
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codesynth}
              title="CodeSynth"
              description="Developed and deployed a locally hosted AI-powered coding assistant capable of generating and debugging code without internet dependency. The solution ensures data privacy, low latency, and continuous availability, making it a reliable tool for offline development workflows."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              title="Emotion AI"
              description="Implemented an EEG-based emotion detection model by applying advanced signal processing and machine learning methodologies, achieving an accuracy rate of 98.6% in classifying emotional states."
              // ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediapipe}
              title="Gesture-Based Control System"
              description="Developed a real-time gesture-based control system using HTML, CSS, MediaPipe, and OpenCV. Implemented hand, finger, and eye tracking to enable intuitive human-computer interaction, enhancing accessibility, precision, and interactive applications."
              // ghLink=""
              demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
