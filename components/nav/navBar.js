import Link from 'next/link';
import NavBtn from './navBtn';
import NavHomeBtn from './navHomeBtn';

const navPageList = [ 
    {linkRef: '/project',
     navText: 'Project',},
    {linkRef: '/about-me',
     navText: 'About Me',},
    {linkRef: '/contact-me',
     navText: 'Contact Me',}
    ]

const navBar = () => {
    return (
        <div className='flex justify-between bg-dark-grey '>
            <NavHomeBtn/>
            <div className='flex justify-between '>
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

export default navBar;