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
        <section className="flex justify-center items-center flex-col bg-dark-grey">
            <div className="flex bg-white w-[70%] h-[1px] mt-8"></div>
            <div className="flex text-center text-2xl py-5">
                <div className={limelight.className}>Henry LO</div>
            </div>

            <div className=" flex absolute right-[20%]">
                    {externalLinks.map( (links) => {
                        const {imgSrc, url} = links;
                        return (
                            <div className="relative h-5 w-5 mx-0.5 md:h-7 md:w-7 md:mx-3">
                                <Link href={url}>
                                    <Image src={imgSrc} fill={true}/> 
                                </Link>
                            </div>
                            )
                        })}
                </div>
            <div className="flex bg-white w-[70%] h-[1px] mb-8"></div>
        </section>
    );
}