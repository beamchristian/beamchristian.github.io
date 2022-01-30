import React from 'react';
import './ProjectItem.css';
import Card from '../UIElements/Card';
const ProjectItem = props => {
  return (
    <li className="project-item">
      <Card className="project-item__content">
        <div className="project-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="project-item__info">
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
          <h3>
            <a href={props.repo}>Repo</a>
          </h3>
          <h3>
            <a href={props.deployment}>Deployment</a>
          </h3>
        </div>
      </Card>
    </li>
  );
};

export default ProjectItem;
