import ProjectCardDesktop from "./projectCardDesktop";

export default function ProjectCardGrpDesktop({ cardList }) {

    return (
        <div>
            <div className="pb-7 px-8 pt-10 grid grid-cols-1 gap-10 overflow-y-hidden grid2:grid-cols-2 grid3:grid-cols-3 grid4:grid-cols-4 grid5:grid-cols-5">
                {cardList.map((card)=><ProjectCardDesktop card={card}/>)}
            </div>
        </div>
    );
}