import Link from "next/link";
import PrimaryBtn from "../../primaryBtn";

export default function DiscoverMeBtn() {
    return (
        <PrimaryBtn>
            <Link href='/about-me'>Discover Me</Link>
        </PrimaryBtn>
    );
}