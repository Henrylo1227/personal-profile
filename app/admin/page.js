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
/* todo: make a admin page for modify data to the site

    settings page:
        -> general management:
            - nav bar setting
                > toggle page
            - edit footer
        -> Projects Management:
            - select highligted projects (displayed in home page)
            - add new projects
            - remove projects
        -> About Me Management:
            - Edit content of the blog
            - Add/Remove Images to the page
*/