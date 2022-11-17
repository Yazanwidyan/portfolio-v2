import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [deps, setDeps] = useState({});
  const [detailsModalShows, setDetailsModalShows] = useState(false);

  const detailsModalShow = (data) => {
    setDeps(data);
    setDetailsModalShows(true);
  };

  const detailsModalClose = () => setDetailsModalShows(false);

  if (resumeProjects && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.projects;
    var projects = resumeProjects.map(function (projects) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={projects.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => detailsModalShow(projects)}>
              <div>
                <img
                  src={projects.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{projects.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{projects.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalShows}
          onHide={detailsModalClose}
          data={deps}
        />
      </div>
    </section>
  );
};

export default Projects;
