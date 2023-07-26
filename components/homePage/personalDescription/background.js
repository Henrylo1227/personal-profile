import { Trispace } from "next/font/google";
import Image from "next/image";

export default function Background() {
    return (
        <section className="hidden w-full h-full">
            <div className="hidden md:flex">
                <Image src='/images/vectorAssets/thinking.png' width={400} height={300} className="rotate-[19deg] absolute top-32 right-[10%]"></Image>
                <Image src='/images/vectorAssets/puzzle_1.png' width={275} height={275} className="absolute bottom-[7%] right-[15%]"></Image>
                <Image src='/images/vectorAssets/glass.png' width={300} height={150} className="absolute rotate-[17deg] bottom-[35%] left-[28%]"></Image>
                <Image src='/images/vectorAssets/brain.png' width={300} height={300} className="absolute bottom-[5%] left-[33%]"></Image>
            </div>
            <div className=" fixed brightness-50 md:top-[30%] md:flex md:absolute mdbrightness-100 md:right-[30%] md:rounded-[50%]">
                <Image src='/images/homePage/profile-bg.jpeg' width={400} height={400} />
             </div>
        </section>
    );
}