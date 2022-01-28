import React from 'react';

import ProjectsList from '../components/ProjectsList';
import Img from '../assets/small/portfolio/deep-thoughts.jpg';

const Portfolio = () => {
  const PROJECTS = [
    {
      id: 'p1',
      name: 'Deep Thoughts',
      description: 'Full MERN Stack Application',
      image: Img,
      repo: 'https://github.com/beamchristian/deep-thoughts',
      deployment: 'https://intense-tor-55161.herokuapp.com/',
    },
  ];

  return <ProjectsList items={PROJECTS} />;
};

export default Portfolio;
