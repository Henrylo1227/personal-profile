import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen( { subsets: ['latin'], weight: '400',} );
const homeName = 'h o m e';

export default function NavHomeBtn() {
    return (
        <div className='group/nav-home-btn flex bg-primary text-black justify-center items-center flex-col col-auto h-16 w-40 min-w-fit px-4 text-3xl'>
            <Link href='/' className={koulen.className}>{homeName}</Link>
            <div className='flex h-[2px] w-0 bg-black group-hover/nav-btn:visible group-hover/nav-home-btn:w-4/5 transition-all duration-300'></div>
        </div>
    );
}