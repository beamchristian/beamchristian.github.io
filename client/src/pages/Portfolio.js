import React from 'react';

import ProjectsList from '../components/ProjectsList';
import Img from '../assets/small/portfolio/deep-thoughts.jpg';
import Img2 from '../assets/small/portfolio/my-tech-now.jpg';
import Img3 from '../assets/small/portfolio/oh-snap.jpg';
import Img4 from '../assets/small/portfolio/pizza-hunt.jpg';
import Img5 from '../assets/small/portfolio/space-explorer.jpg';

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
    {
      id: 'p2',
      name: 'My Tech Now',
      description: 'Fullstack application using Mysql, Express, and Handlebars',
      image: Img2,
      repo: 'https://github.com/beamchristian/my-tech-now',
      deployment: 'https://murmuring-ocean-30648.herokuapp.com/',
    },
    {
      id: 'p3',
      name: 'Oh Snap!',
      description: 'This is Oh Snap! A Front-end REACT application',
      image: Img3,
      repo: 'https://github.com/beamchristian/photo-port',
      deployment: 'https://beamchristian.github.io/photo-port/',
    },
    {
      id: 'p4',
      name: 'Pizza Hunt',
      description:
        'This is Pizza Hunt a Fullstack NoSql application using MongoDb and Express',
      image: Img4,
      repo: 'https://github.com/beamchristian/pizza-hunt',
      deployment:
        'https://fathomless-tundra-41161.herokuapp.com/pizza?id=61c08619c9977ab180dd69e1',
    },
    {
      id: 'p5',
      name: 'Space Explorer',
      description:
        'This is Space Explorer a Front end application using HTML, CSS, and JAVASCRIPT',
      image: Img5,
      repo: 'https://github.com/jamwil1226/space-explorer',
      deployment: 'https://jamwil1226.github.io/space-explorer/',
    },
  ];

  return (
    <>
      <h1 className="center">My Projects</h1>
      <ProjectsList items={PROJECTS} />
    </>
  );
};

export default Portfolio;
