import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/Project.css";

export const Project = () => {
  const projects = [
    {
      title: "E-Commerce Web Application (amazon clone)",
      description: "React.js, Node.js, MongoDB",
      imgUrl: projImg1,
    },
    {
      title: "Real Estate Web application (Peeman)",
      description: "React.js, Firebase, tailwindcss",
      imgUrl: projImg2,
    },
    {
      title: "Social Media Platform (twitter clone)",
      description: "React Native, GraphQL, Apollo",
      imgUrl: projImg3,
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "React, CoinGecko API",
      imgUrl: projImg1,
    },
    {
      title: "Fitness Tracking App",
      description: "React Native, Firebase, HealthKit",
      imgUrl: projImg2,
    },
    {
      title: "Travel Booking Website",
      description: "Next.js, Strapi, Mapbox",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here is a showcase of my projects, ranging from e-commerce
                    platforms to task management systems and social media
                    applications. Each project highlights my expertise in
                    various technologies and frameworks.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Here, you can find my mobile app projects, including a
                          fitness tracking app built with React and a social
                          media platform developed with React Native. These
                          projects showcase my skills in cross-platform mobile
                          app development and integration with various APIs and
                          services.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          In addition to web and mobile applications, I've also
                          worked on other exciting projects. Feel free to
                          explore these projects and don't hesitate to reach out
                          for more details.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp"
      ></img>
    </section>
  );
};
