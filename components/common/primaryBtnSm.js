import { Aoboshi_One } from "next/font/google";
const aoboshi_One = Aoboshi_One({subsets: ['latin'], weight: '400'});

export default function PrimaryBtnSm( {children, onClick} ) {
    return (
        <button className="flex bg-primary rounded-full text-black py-3 px-5 m-3 text-lg w-fit font-bold drop-shadow-2xl hover:brightness-105"
            onClick={onClick}>
            <div className={aoboshi_One.className}>
                {children}
            </div>
        </button>            
    );
}