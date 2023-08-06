import Image from "next/image";
import ProjectStatus from "../projectStatus";
import TechStack from "../techStack";

export default function ProjectCardDesktop( {card} ) {
    const {projectName, description, techStack, isCompleted, lastUpdateDate} = card;
    return (
        <div id={projectName} className=" group inline-block relative w-96 h-60  bg-white rounded-2xl drop-shadow-lg transition-all hover:scale-110">
            {/* background */}
            <div className="block z-0">
                <Image className="rounded-2xl absolute object-cover brightness-90 group-hover:brightness-50 transition-all" 
                        src='/images/projects/templateProjectPic.png' fill={true} sizes=""/>
            </div>
            {/* Project Name */}
            <div className='flex relative z-30 w-full h-full justify-center items-center text-white text-shadow-sm shadow-black text-4xl font-bold text-center transition-all group-hover:-translate-y-16'>
                {projectName}
            </div>
            {/* project description */}
            <div className="hidden group-hover:block absolute top-1/2 mx-3">
                {description}
            </div>
            {/* Status */}
            <div className='flex absolute start-2 bottom-2 bg-white justify-center items-center rounded-full'>
                    <ProjectStatus isCompleted={isCompleted}/>
                </div>
            {/* tech stack */}
            <div className="hidden absolute bottom-0 end-0 flex-row flex-wrap group-hover:flex">
                <TechStack techList={techStack}/>
            </div>
        </div>
    );
}

//TODO matching tech to the corresponding tag