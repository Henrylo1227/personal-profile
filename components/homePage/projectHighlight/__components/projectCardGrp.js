import ProjectCard from "./projectCard";




export default function ProjectCardGrp({ cardList }) {


    return (
        <div>
            <div className="block w-screen justify-between items-center flex-row text-4xl text-gray-500">
                <div className='flex overflow-auto snap-mandatory snap-center scroll-p-[50%] md:justify-center'>
                    {cardList.map((card)=>
                        <ProjectCard card={card}/>
                    )}
                </div>
            </div>
        </div>

        );
}