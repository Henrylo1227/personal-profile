import NavBtn from './navBtn';
import NavHomeBtn from './navHomeBtn';

const navPageList = [ 
    {linkRef: '/project', navText: 'Project',},
    {linkRef: '/about-me', navText: 'About Me',},
    {linkRef: '/contact-me', navText: 'Contact Me',}];

export default function navBar () {
    return (
        <div className='flex justify-between w-full fixed bg-dark-grey z-50'>
            <NavHomeBtn/>
            <div className='flex justify-between min-w-fit mr-[5%]'>
                {navPageList.map((navPage)=>{
                    const {linkRef, navText} = navPage;
                    return(
                        <NavBtn linkRef={linkRef}>{navText}</NavBtn>
                    )
                })}
            </div>
        </div>
    );
};