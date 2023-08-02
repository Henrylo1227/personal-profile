import TechStackView from "@/components/homePage/projectHighlight/__components/techStackView";
import { getStyledIcon } from "./projectCard";

export default function FocusProjectCard({card}) {
    if (card === undefined) 
        return (
        <div className='block p-3 justify-center items-center bg-white w-[80%] h-[10vh] rounded-xl drop-shadow-lg text-black mb-[5%]'>
            <div className='flex justify-center flex-col'>
                <span className='bg-grey w-[80%] self-center h-[0.5px] m-1'></span>
            </div>
            
            <div className='flex text-center flex-col italic text-sm'>Please choose a project from below</div>
            <div className='flex justify-center flex-col'>
                <span className='bg-grey w-[80%] self-center h-[0.5px] m-1'></span>
            </div>
        </div>
        );
    const {projectName, description, techStack, isCompleted, lastUpdateDate} = card;
    return (
        <div className='block p-3 items-center bg-white w-[80%] h-max-[30vh] rounded-xl drop-shadow-lg text-black mb-[5%] hover:scale-105 transition-all'>
            <div className='flex justify-center items-center font-bold text-lg'>
                {getStyledIcon(isCompleted)}
                {projectName}
            </div>
            <div className='flex justify-start text-xs text-grey italic m-1 font-semibold'>
                {description}
            </div>
            <div className='flex justify-center flex-col'>
                <span className='bg-grey w-[80%] self-center h-[0.5px] m-1'></span>
                <div className='flex w-[80%] self-start text-xs relative left-[10%] font-bold flex-wrap flex-row'>
                    <TechStackView techStackList={techStack}/>
                </div>
            </div>
            <div className='flex justify-center flex-col'>
                <span className='bg-grey w-[80%] self-center h-[0.5px] m-1'></span>
                <div className='flex justify-center text-xs'>
                    last updated on: {lastUpdateDate}
                </div>
            </div>
        </div>
    )
}