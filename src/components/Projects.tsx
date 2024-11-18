import React from 'react'
import Heading from './Heading';
import Card from './Card'


const data = [
    {  
        
        id: 0,
        title: "Static Interactive Resume",
        desc: "A typescript based resume built with HTML and CSS",
        img: "/Project 1.jpeg",
        tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],

    },


    {
        
        id: 1,
        title: "Dynamic Resume Builder",
        desc: "A typescript based resume built with HTML and CSS",
        img: "/Project 2.jpeg",
        tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],


    },

{
    id: 2,
    
        title: "Simple calculator Project",
        desc: "A typescript based resume built with HTML andCSS",
        img: "/Project 3.jpeg",
        tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],

},
];





   
const Projects = () => {
  return (
    <div  id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10, md:grid-cols-3 lg:gid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
      
    </div>
  )
}

export default Projects
