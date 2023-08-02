import Image from "next/image";

export default function Background() {
    return (
        <div className="block absolute h-screen w-screen top-4 z-0">
            <Image priority={true} src='/images/homePage/profile-bg.jpeg' fill={true} sizes=""
                className=" object-cover brightness-[60%]"
            />
        </div>
    );
}