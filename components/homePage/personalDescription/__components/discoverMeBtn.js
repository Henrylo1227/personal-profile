import Link from "next/link";
import PrimaryBtn from "../../../common/primaryBtn";

export default function DiscoverMeBtn() {
    return (
        <PrimaryBtn>
            <Link href='#project-highlight' scroll={true} >Discover Me</Link>
        </PrimaryBtn>
    );
}