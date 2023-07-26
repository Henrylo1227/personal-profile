import { Koulen } from "next/font/google";
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";

const koulen = Koulen( { subsets: ['latin'], weight: '400',} );
const homeName = 'h o m e';

export default function NavHomeBtn() {
    return (
        <div>
            <Link href='/'>
                <div className="flex justify-center items-center h-10 w-10 bg-primary text-black md:h-12 md:w-24">
                    <div className="md:hidden">
                        <BiHomeAlt2/>
                    </div>
                    <div className="group/homeBtn hidden md:flex md:flex-col md:justify-center md:items-center">
                        <div className={koulen.className}>
                            {homeName}
                        </div>
                        <div className="bg-black h-[1px] w-[50%] group-hover/homeBtn:w-[95%] transition-all"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}