import React from 'react';
import ProjectItem from '../ProjectItem';
import './ProjectsList.css';

const ProjectsList = props => {
  return (
    <ul className="projects-list">
      {props.items.map(project => {
        return (
          <ProjectItem
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            repo={project.repo}
            deployment={project.deployment}
          />
        );
      })}
    </ul>
  );
};

export default ProjectsList;
