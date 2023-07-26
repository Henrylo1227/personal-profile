import Image from "next/image";

export default function Background() {
    return (
        <div className="absolute w-full h-full top-5">
            <Image src='/images/homePage/profile-bg.jpeg' fill={true}
                className=" object-cover brightness-[60%]"
            />
        </div>
    );
}