'use client'
import ProjectCard from './projectCard';
import { useState } from 'react';
import FocusProjectCard from './focusProjectCard';


export default function ProjectCardGrp({cardList}) {

    const [selectedId, setSelectedId] = useState(null);

    function handleSelectCard(index) {
        setSelectedId(index)
    }

    let scrollViewPoint = (selectedId === null) ? '40vh' : '25vh';

    return (
        <div>
            {/* Mobile View */}
            <div className='flex flex-col justify-center items-center md:hidden w-full '>
                {/* Selected Card */}
                <FocusProjectCard card={cardList[selectedId]}/>
                {/* Card grp */}
                <div className={`block p-3 scroll-p-3 items-center bg-white w-[80%] h-[${scrollViewPoint}] overflow-scroll rounded-xl drop-shadow-lg`}>
                    {cardList.map( (card, index) => <ProjectCard card={card} onSelect={()=>handleSelectCard(index)}/>)}
                </div>
            </div>
            {/* Desktop view */}
            <div className='hidden md:flex'>
                    
            </div>
        </div>
    )

}