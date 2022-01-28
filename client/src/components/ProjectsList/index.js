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

// const [projects] = useState([
//   {
//     name: 'Deep Thoughts',
//     category: 'portfolio',
//     description: 'Full MERN Stack Application',
//   },
//   {
//     name: 'My Tech Now',
//     category: 'portfolio',
//     description:
//       'Fullstack stack application using Mysql, Express, and Handlebars',
//   },
//   {
//     name: 'Oh Snap!',
//     category: 'portfolio',
//     description: 'This is Oh Snap! Front-end REACT application',
//   },
//   {
//     name: 'Pizza Hunt',
//     category: 'portfolio',
//     description:
//       'This is Pizza Hunt a Fullstack NoSql application using MongoDb and Express',
//   },
//   {
//     name: 'Space Explorer',
//     category: 'portfolio',
//     description:
//       'This is Space Explorer a Front end application using HTML, CSS, and JAVASCRIPT',
//   },
//   {
//     name: 'Resume',
//     category: 'resume',
//     description: 'coming soon...',
//   },
// ]);
