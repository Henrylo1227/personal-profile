import { RxCross1 } from "react-icons/rx";

export default function AdminTechStack({techList, onRemove}) {

    if (techList === undefined) {
        return;
    }

    return (
        <div className="flex flex-row flex-wrap my-2">
            {techList.map( (e, index) => {
                const {tech, colorCode} = e;
                return(
                    <div className={`flex mx-1 my-1 p-1 w-fit bg-white rounded-lg text-xs text-black justify-center items-center border-[2px]`}
                        key={index}>
                        <div className={`rounded-full h-2 w-2 border mr-1`}
                            style={{backgroundColor: `${colorCode}`}}
                        ></div>
                        {tech}
                        <button className="m-1" onClick={()=>onRemove(index)}>
                            <RxCross1/>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}