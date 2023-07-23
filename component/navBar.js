import Link from 'next/link';

const navBar = () => {
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/project'>Project</Link>
            <Link href='/about-me'>About me</Link>
            <Link href='/contact-me'>Contact me</Link>
        </div>
    );
};

export default navBar;