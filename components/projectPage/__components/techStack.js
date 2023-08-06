import { getColorCodeFromLanguage } from "../dashBoard/description";

// hardCoded color for tailwind css
const colorList = [
    'bg-[#FF1E1E]',
    'bg-[#FFFF00]',
    'bg-[#00C4FF]',
    'bg-[#1F8A70]',
    'bg-[#068FFF]',
]

export default function TechStack({techList}) {
    return (
        <div>
            {techList.map(tech => {
                const bgColorCode = `bg-[${getColorCodeFromLanguage(tech)}]`;
                
                return(
                    <div className={`flex mx-1 my-2 p-1 w-fit bg-white rounded-lg text-xs text-black justify-center items-center border-[2px]`}>
                        <div className={`${bgColorCode} rounded-full h-2 w-2 border mr-1`}></div>
                        {tech}
                    </div>
                )
            })}
        </div>
    );
}