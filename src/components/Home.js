import React from 'react';
import { ProjectData } from '../ProjectData';
import Card from './Card';

const Home = () => {
  return (
    <section id='section1'>
      <div className='container'>
        <div className='project-grid'>
          {ProjectData.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
