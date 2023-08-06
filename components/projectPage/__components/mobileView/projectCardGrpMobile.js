'use client'
import ProjectCardMobile from './projectCardMobile';
import { useState } from 'react';
import FocusProjectCard from './focusProjectCard';


export default function ProjectCardGrpMobile({cardList}) {

    const [selectedId, setSelectedId] = useState(null);

    function handleSelectCard(index) {
        setSelectedId(index)
    }

    const viewPoint = ['h-[40vh]', 'h-[25vh]'];
    let scrollViewPoint = (selectedId === null) ? '40vh' : '25vh';

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                {/* Selected Card */}
                <FocusProjectCard card={cardList[selectedId]}/>
                {/* Card grp -mobile */}
                <div className={`block p-3 scroll-p-3 items-center w-[80vw] bg-white h-max-[${scrollViewPoint}] overflow-scroll rounded-xl drop-shadow-lg`}>
                    {cardList.map( (card, index) => <ProjectCardMobile card={card} onSelect={()=>handleSelectCard(index)}/>)}
                </div>
            </div>
        </div>
    )

}