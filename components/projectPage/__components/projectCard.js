import {AiFillCheckCircle} from 'react-icons/ai';
import {BsClockHistory} from 'react-icons/bs';

export function getStyledIcon(isCompleted){
    
    if (isCompleted === true) {
        return (
            <div className=' text-green-500 p-2'>
                <AiFillCheckCircle/>
            </div>)
    } else {
        return (
            <div className=' text-amber-600 p-2'>
                <BsClockHistory/>
            </div>
        )
    }
    
}

export default function ProjectCard( {card, onSelect} ) {
    const {projectName, description, techStack, isCompleted, lastUpdateDate} = card;
    return (
        <section>
            {/* mobile view */}
            <div className='flex justify-start items-center bg-white border-solid border-t-[1px] border-b-[1px] w-full h-10 md:hidden text-black hover:brightness-95'
                onClick={onSelect}>
                {/* status */}
                {getStyledIcon(isCompleted)}
                {/* project name */}
                <div className=''>{projectName}</div>
            </div>
            {/* desktop view */}
        </section>
    );
}