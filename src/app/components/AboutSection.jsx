"use client";

import React, { useTransition, useState } from 'react'
import Image from 'next/image'


const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-secondary-500' 
        : 'text-[#ADB7BE] hover:text-white';

    return (
        <button onClick={selectTab}>
            <p className={`
                mr-3 font-semibold hover:text-white ${buttonClasses}
            `}>
                {children}
            </p>
        </button>
    )
}

const TAB_DATA = [
    {
        title: 'Skills',
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
            </ul>
        ) 
    },
    {
        title: 'Education',
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>BS Computer Science</li>
                <li>MS Computer Science</li>
            </ul>
        ) 
    },
    {
        title: 'Experience',
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Developer</li>
                <li>Backend Developer</li>
                <li>Fullstack Developer</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='
            md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 
            xl:gap-16 sm:py-16 xl:px-16
        '>
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold test-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Necessitatibus voluptatibus odio mollitia esse dolorum,
                        impedit et! Sapiente magni nihil numquam qui ad similique,
                        corrupti mollitia assumenda accusantium adipisci
                        doloribus excepturi?
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton 
                            selectTab={() => handleTabChange('skills')} 
                            active={tab === 'skills'}
                        >
                            Skills
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange('education')} 
                            active={tab === 'education'}
                        >
                            Education
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange('experience')} 
                            active={tab === 'experience'}
                        >
                            Experience
                        </TabButton>
                        
                    </div>
                    <div className='mt-8'>
                        {isPending ? 'Loading...' 
                            : TAB_DATA.find(t => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection