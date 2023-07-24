import { Limelight } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const limelight = Limelight({subsets: ['latin'], weight: '400'});

export default function Footer() {
    
    const externalLinks = [
        { imgSrc: '/images/footer/github.svg', url: 'https://github.com/Henrylo1227'},
        { imgSrc: '/images/footer/linkedin.svg', url: 'https://www.linkedin.com/in/henry-lo-tszhin/'},
        ]; // iconImage: , url:
    

    return (
        <div className="flex justify-center items-center flex-col bg-dark-grey">
            <div className="flex bg-white w-[70%] h-[1px] mt-8"></div>
            <div className="flex text-center text-2xl py-5">
                <div className={limelight.className}>Henry LO</div>
            </div>

            <div className=" flex absolute right-[20%] justify-between w-20">
                    {externalLinks.map( (links) => {
                        const {imgSrc, url} = links;
                        return (
                            <Link href={url}>
                                <Image priority src={imgSrc} width={32} height={32}/> 
                            </Link>
                            )
                        })}
                </div>
            <div className="flex bg-white w-[70%] h-[1px] mb-8"></div>
        </div>
    );
}