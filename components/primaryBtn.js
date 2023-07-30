import { Aoboshi_One } from "next/font/google";
const aoboshi_One = Aoboshi_One({subsets: ['latin'], weight: '400'});

export default function PrimaryBtn( {children} ) {
    return (
        <button className="bg-primary rounded-full text-black py-5 px-7 m-3 text-2xl h-fit w-fit font-bold drop-shadow-2xl hover:animate-bounce hover:brightness-105">
            <div className={aoboshi_One.className}>
                {children}
            </div>
        </button>            
    );
}