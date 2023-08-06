import DashBoard from '@/components/projectPage/dashBoard/dashBoard';
import ProjectCardGrpMobile from '@/components/projectPage/__components/mobileView/projectCardGrpMobile';
import ProjectCardGrpDesktop from '@/components/projectPage/__components/desktopView/projectCardGrpDesktop';
import projectPage from '../../pageData/projectPage.json';

export const metadata = {
    title: 'Henry Lo | Projects',
    description: 'The projects that I have completed',
}

const cardList = projectPage.content.cardList;


export default function Project () {
    return (
        <div className='block h-screen w-screen items-center bg-gradient-to-b from-grey-light to-yellow-100 blur-xs'>
            <div className='flex relative top-[5%] justify-center flex-col md:items-start md:flex-row'>
                <div className='flex justify-center mt-10'>
                    <DashBoard/>
                </div>
                {/*  Project Cards - mobile */}
                <div className='flex justify-center pt-3 transition-all md:hidden'>
                    <ProjectCardGrpMobile cardList={cardList}/>
                </div>
                {/*  Project Cards - desktop */}
                <div className='hidden relative md:flex h-[85vh] overflow-auto'>
                    <ProjectCardGrpDesktop cardList={cardList}/>
                </div>
            </div>
        </div>
    );
};
