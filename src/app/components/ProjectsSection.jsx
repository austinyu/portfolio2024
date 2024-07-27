'use client';

import React, { useState, useRef } from 'react'

import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const IconLink = ({ href, Icon }) => (
  <Link href={href} className='
    h-14 w-14 border-2 relative rounded-full border-[#ADB7BE]
    hover:border-white group/link
  '>
    <Icon className='
      h-10 w-10 text-[#ADB7BE]
      absolute top-1/2 left-1/2 
      transform -translate-x-1/2 -translate-y-1/2 
      cursor-pointer group-hover/link:text-white
    ' />
  </Link>
);

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className='group rounded-t-xl h-52 md:h-72 bg-center relative'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <div className='
          overlay space-x-2 items-center justify-center hidden
          absolute top-0 left-0 w-full h-full bg-[#181818] 
          bg-opacity-0 group-hover:flex group-hover:bg-opacity-80
          transition-all duration-500
        '>
          <IconLink href={gitUrl} Icon={CodeBracketIcon} />
          <IconLink href={previewUrl} Icon={EyeIcon} />
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='font-xl fount-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? 'text-white border-secondary-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyle} 
        rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  )
}

const PROJECT_DATA = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Mobile'],
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Web'],
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    gitUrl: 'https://github.com',
    previewUrl: 'https://github.com',
    tag: ['All', 'Web'],
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 }
  }

  return (
    <section>
      <div className='text-white'>
        <h2 className='
        text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12
      '>
          My Projects
        </h2>
        <div className='
        text-white flex flex-row justify-center items-center gap-2 py-6
      '>
          {
            ['All', 'Web', 'Mobile'].map((name, index) =>
              <ProjectTag
                key={index}
                name={name}
                onClick={toggleTag}
                isSelected={tag === name}
              />
            )
          }
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {filteredProjects.map((project, index) => {
            return (
              <motion.li 
                key={index}
                variants={cardVariants} 
                initial='initial' 
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              > 
                <ProjectCard key={project.id} title={project.title}
                  description={project.description} imgUrl={project.image}
                  gitUrl={project.gitUrl} previewUrl={project.previewUrl}
                />
              </motion.li>
            )})
          }
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection