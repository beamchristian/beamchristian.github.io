import React from 'react';

import ProjectsList from '../components/ProjectsList';
import Img from '../assets/small/portfolio/deep-thoughts.jpg';
import Img2 from '../assets/small/portfolio/my-tech-now.jpg';
import Img3 from '../assets/small/portfolio/Budget-Tracker.jpg';
import Img4 from '../assets/small/portfolio/pizza-hunt.jpg';
import Img5 from '../assets/small/portfolio/shop-shop.jpg';
import img6 from '../assets/small/portfolio/book-search.jpg';
import img7 from '../assets/small/portfolio/versa-train.jpg';

const Portfolio = () => {
  const PROJECTS = [
    {
      id: 'p1',
      name: 'Shop-Shop',
      description:
        'Shop-Shop, a e-commerce site where users can make an account, shop through an inventory of items, add them to a cart and checkout through the Stripe Api. Shop-Shop is a full MERN Stack SPA application using Apollo GraphQl and Redux for state. This application also has offline functionality through IndexedDb',
      image: Img5,
      repo: 'https://github.com/beamchristian/shop-shop-redux',
      deployment: 'https://frozen-beyond-22993.herokuapp.com/',
    },
    {
      id: 'p2',
      name: 'Deep Thoughts',
      description:
        'Deep Thoughts, a blog style social media platform that is a full MERN Stack SPA application using Apollo GraphQl.',
      image: Img,
      repo: 'https://github.com/beamchristian/deep-thoughts',
      deployment: 'https://intense-tor-55161.herokuapp.com/',
    },
    {
      id: 'p3',
      name: 'My Tech Now',
      description:
        'My Tech Now, a CMS-style blog-site Fullstack application using Mysql, Express, Handlebars, and a Restful Api',
      image: Img2,
      repo: 'https://github.com/beamchristian/my-tech-now',
      deployment: 'https://murmuring-ocean-30648.herokuapp.com/',
    },
    {
      id: 'p4',
      name: 'Budget-Tracker',
      description:
        'Budget-Tracker, a simple budget tracker that is a PWA(Progressive Web App). This means it has offline functionality and can be installed on mobile or on a computer. ',
      image: Img3,
      repo: 'https://github.com/beamchristian/PWA-Conversion-Budget-App',
      deployment: 'https://ancient-thicket-07436.herokuapp.com/',
    },
    {
      id: 'p5',
      name: 'Pizza Hunt',
      description:
        'Pizza Hunt, a website to store and share users favorite pizza combinations with the world! Pizza Hunt is a Fullstack NoSql application using MongoDb, and Express with a Restful Api',
      image: Img4,
      repo: 'https://github.com/beamchristian/pizza-hunt',
      deployment: 'https://fathomless-tundra-41161.herokuapp.com/',
    },
    {
      id: 'p6',
      name: 'Book Search Engine',
      description:
        'Book Search Engine, a full MERN Stack SPA(Single Page Application) using Apollo GraphQL. Users can create an account, search for any book listed in the Google BooksApi, and then save/delete their favorite books to their account.',
      image: img6,
      repo: 'https://github.com/beamchristian/book-search-graphql-refactor',
      deployment: 'https://pacific-ocean-44039.herokuapp.com/',
    },
    {
      id: 'p6',
      name: 'Versa-Train (In Development)',
      description:
        'Versa-Train, a full MERN Stack SPA(Single Page Application) using Apollo GraphQL. Its funtionality is for employers to create and host their training material so that their employees can stay up to date with required job training. Employers can create the employee profiles and set the employees login and password.  Once the employee is logged in, they have their own seperate dashboard. This project was done with 3 other contributers using Agile Methodology via github.',
      image: img7,
      repo: 'https://github.com/oldgraybuzzard/crispy-giggle',
      deployment: 'https://crispy-gigglers.herokuapp.com/',
    },
  ];

  return (
    <>
      <h1 className="center section-title">Projects</h1>
      <ProjectsList items={PROJECTS} />
    </>
  );
};

export default Portfolio;
