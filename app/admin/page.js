import PrimaryBtnSm from "@/components/common/primaryBtnSm";
import Link from "next/link";

export default function Admin() {
    return (
        <section className="block h-screen w-screen bg-white">
            <nav className='flex justify-center h-full items-center flex-col'>
                <Link href='/admin/general'>
                    <PrimaryBtnSm>General Settings</PrimaryBtnSm>
                </Link>
                <Link href='/admin/project'>
                    <PrimaryBtnSm>Projects Management</PrimaryBtnSm>
                </Link>
                <Link href='/admin/about-me'>
                    <PrimaryBtnSm>Edit About Me</PrimaryBtnSm>
                </Link>
            </nav>
        </section>
    );
}