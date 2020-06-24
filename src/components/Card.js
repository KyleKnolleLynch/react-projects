import React from 'react';
import { motion } from 'framer-motion';

// const cardVariants = {
//   hidden: {
//     scale: 1,
//     opacity: 0,
//     y: '100vh',
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

const hoverVariants = {
  hidden: {
    backgroundColor: 'transparent',
    scale: 1,
  },
  hover: {
    scale: 1.2,
    textShadow: '0px 0px 4px #dfdfdf',
    boxShadow: '0px 0px 6px #dfdfdf',
    backgroundColor: 'rgba(91, 21, 55, 0.5)',
    transition: {
      type: 'spring',
      stiffness: 150,
      duration: 0.3,
    },
  },
};

const Card = ({ project }) => {
  const { img, title, projectLink, sourceLink } = project;

  return (
    <div className='card-container'>
      <div className='card'>
        <div className='img-container'>
          <img src={img} alt='project-card' />
        </div>
        <div className='card-content'>
          <h2>{title}</h2>
          <motion.button variants={hoverVariants} initial='hidden' whileHover='hover'>
            {' '}
            <a href={projectLink}>View Project</a>
          </motion.button>
          <motion.button variants={hoverVariants} initial='hidden' whileHover='hover'>
            <a href={sourceLink}>Source Code</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Card;
