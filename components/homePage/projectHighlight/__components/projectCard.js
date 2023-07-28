import PrimaryBtnSm from "@/components/primaryBtnSm";
import Image from "next/image";
import { Reem_Kufi, Mochiy_Pop_P_One, Mochiy_Pop_One } from "next/font/google";
import TechStackView from "./techStackView";

const reemKufi = Reem_Kufi({subsets: ['latin'], weight: '400'})
const mochiyPopPOne = Mochiy_Pop_One({subsets: ['latin'], weight: '400'})

export default function ProjectCard( {card} ) {

    const {projectName, description, techStack, isCompleted, lastUpdateDate} = card;


    return (
        <div id={projectName} className="block min-w-[250px] bg-white my-10 mx-5 rounded-2xl shadow-lg md:h-[30rem] md:w-[24rem]">
            {/* Card Wrapper */}
            <div className="flex h-full flex-col items-center">
                <div className="h-full w-full items-center">
                    <div className="relative h-36 w-full">
                        <Image src='/images/projects/templateProjectPic.png'
                            fill={true}
                            className=" object-cover rounded-t-2xl"
                        />
                    </div>
                    <div className="text-2xl my-2 text-black text-center">
                        <div className={mochiyPopPOne.className}>
                            {projectName}
                        </div>
                    </div>
                    <div className="text-sm my-2 mx-4 italic">
                        <div className={reemKufi.className}>
                            {description}
                        </div>
                    </div>
                    <div className="flex">
                        <TechStackView techStackList={techStack}/>
                    </div>
                </div>
                <div className="flex justify-center relative">
                <PrimaryBtnSm>learn more</PrimaryBtnSm>
            </div>
            </div>


        </div>
    );
}