import { Koulen } from 'next/font/google';
import Link from 'next/link';

const koulen = Koulen( {subsets: ['latin'], weight: '400'}  );

export default function NavBtn( { linkRef, children } ) {
    return (
        <div className='group/nav-btn flex justify-center items-center flex-col col-auto h-16 w-40 text-2xl -tracking-wide' >
            <Link href={linkRef} className={koulen.className}>{children}</Link>
            <div className='flex h-1 w-10 bg-primary invisible group-hover/nav-btn:visible group-hover/nav-btn:animate-ping'></div>
        </div>
    );
}