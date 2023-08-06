import ProjectStatus from "../projectStatus";

export default function ProjectCardMobile( {card, onSelect} ) {
    const {projectName, description, techStack, isCompleted, lastUpdateDate} = card;
    return (
        <section>
            {/* mobile view */}
            <div className='flex justify-start items-center bg-white border-solid border-t-[1px] border-b-[1px] w-full h-10 md:hidden text-black hover:brightness-95'
                onClick={onSelect}>
                {/* status */}
                <ProjectStatus isCompleted={isCompleted}/>
                {/* project name */}
                <div className=''>{projectName}</div>
            </div>
        </section>
    );
}