import Image from "next/image";

export default function Background() {
    return (
        <section className=" w-full h-full">
            <Image src='/images/vectorAssets/thinking.png' width={400} height={300} className="rotate-[19deg] absolute top-32 right-[10%]"></Image>
            <Image src='/images/vectorAssets/puzzle_1.png' width={275} height={275} className="absolute bottom-[7%] right-[15%]"></Image>
            <Image src='/images/vectorAssets/glass.png' width={300} height={150} className="absolute rotate-[17deg] bottom-[35%] left-[28%]"></Image>
            <Image src='/images/vectorAssets/brain.png' width={300} height={300} className="absolute bottom-[5%] left-[33%]"></Image>
            <Image src='/images/homePage/profile.jpg' width={345} height={440} className="absolute top-[30%] right-[30%] rounded-[50%]"></Image>
        </section>
    );
}