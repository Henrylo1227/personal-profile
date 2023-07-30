import { Koulen } from 'next/font/google';
import Link from 'next/link';

const koulen = Koulen( {subsets: ['latin'], weight: '400'}  );

export default function NavBtn( { linkRef, children, isCurrent } ) {
    return (
        <div>
            <Link href={linkRef}>
                <div className='group/navBtn flex justify-center flex-col items-center'>
                    <div className=' px-4 pt-2 text-sm md:text-lg md:group-hover/navBtn:text-xl transition-all'>
                        <div className={`${koulen.className} ${isCurrent ? 'text-shadow-xs shadow-white brightness-105': ''}`}>
                            {children}
                        </div>
                    </div>
                    <div className='hidden bg-primary md:flex md:h-[1.5px] md:w-[60%] md:mb-2 md:group-hover/navBtn:w-[80%] transition-all'></div>
                </div>
            </Link>
        </div>
    );
}