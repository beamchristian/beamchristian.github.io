import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList({ category }) {
  const [projects] = useState([
    {
      name: 'Deep Thoughts',
      category: 'portfolio',
      description: 'Full MERN Stack Application',
    },
    {
      name: 'My Tech Now',
      category: 'portfolio',
      description:
        'Fullstack stack application using Mysql, Express, and Handlebars',
    },
    {
      name: 'Oh Snap!',
      category: 'portfolio',
      description: 'This is Oh Snap! Front-end REACT application',
    },
    {
      name: 'Pizza Hunt',
      category: 'portfolio',
      description:
        'This is Pizza Hunt a Fullstack NoSql application using MongoDb and Express',
    },
    {
      name: 'Space Explorer',
      category: 'portfolio',
      description:
        'This is Space Explorer a Front end application using HTML, CSS, and JAVASCRIPT',
    },
    {
      name: 'Resume',
      category: 'resume',
      description: 'coming soon...',
    },
  ]);

  const currentProjects = projects.filter(photo => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
