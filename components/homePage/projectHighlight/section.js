import homePage from '../../../pageData/homePage.json';
import { Inter } from 'next/font/google';
import ProjectCardGrp from './__components/projectCardGrp';
import Link from 'next/link';

const inter700 = Inter({subsets: ['latin'], weight: '700'});
const inter400 = Inter({subsets: ['latin'], weight: '400'});

export default function ProjectHighlight() {
    const {content} = homePage;
    const {heading, subHeading, projectCards} = content.projectHighlight;

    return (
        <section id='project-highlight'>
            {/* Section Screen */}
            <div className="block h-screen w-screen items-center bg-grey-light">
                {/* text box */}
                <div className='relative top-[10%] flex text-center item-center flex-col'>
                    {/* Section Heading */}
                    <div className='text-4xl py-2 -tracking-[0.125rem] bg-gradient-to-r from-purple-dark to-purple-light text-transparent bg-clip-text md:text-7xl md:py-5 md:tracking-[0.2rem]'>
                        <h1 className={inter700.className}>
                            {heading}
                        </h1>
                    </div>
                    {/* Section Subheading */}
                    <div className='flex justify-center text-sm text-gray-700 md:text-4xl md:-tracking-[0.125rem] underline' >
                        <Link href='/project'>
                            <div className={inter400.className}>
                                {subHeading}
                            </div>
                        </Link>
                    </div>
                </div>
                {/* highlighted project cards */}
                <div className='relative flex h-[70%] w-[100%] justify-center items-center top-[10%]'>
                    <ProjectCardGrp cardList={projectCards}/>
                </div>
            </div>
        </section>
    );
}