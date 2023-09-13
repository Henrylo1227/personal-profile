'use client'
import { BiMenu } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import NavBtn from './navBtn';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const navSettingURL = '/api/active-navlist';

export default function NavBtnMenu() {

    const [isExtendMenu, setIsExtendMenu] = useState(false);
    const pathname = usePathname();
    const [navPageList, setNavPageList] = useState([]);

    const onExtendMenu = () => {
        setIsExtendMenu(true);
    }

    const onCollapesMenu = () => {
        setIsExtendMenu(false);
    }

    useEffect( () => {
        async function getActivePageList(){
            try{
                const {data} = await axios({method: 'get', url: navSettingURL});
                setNavPageList(data);
            } catch (error) {
                console.error({error});
                const navPageList = [ 
                    {linkRef: '/project', navText: 'Project',},
                    {linkRef: '/about-me', navText: 'About Me',},
                    {linkRef: '/contact-me', navText: 'Contact Me',}];
                setNavPageList(navPageList);
            }
        }
        getActivePageList();
    }, []);

    return (
        <div>
            {/* Menu button */}
            <div className='flex items-center justify-center flex-col w-10 h-10 mr-4 md:hidden hover:bg-gray-700' onClick={onExtendMenu}>
                <BiMenu/>
            </div>

            {/* Extended menu */}
            <div className={isExtendMenu? 'flex md:hidden' : 'hidden'}>
                <div className='fixed top-0 right-0 h-fit w-fit bg-dark-grey'>
                    {/* Close button*/}
                    <div className='flex items-center justify-end w-full' onClick={onCollapesMenu}>
                        <div className='flex items-center justify-center h-10 w-10 hover:bg-gray-700'>
                        <RxCross1/>
                        </div>
                    </div>
                    {/* Menu List */}
                    <div className='flex h-full flex-col justify-between items-center pb-2' onClick={onCollapesMenu}>
                        {navPageList.map((navPage, index)=>
                        <li key={index} className='list-none'>
                            <NavBtn linkRef={navPage.linkRef} isCurrent={false}>{navPage.navText}</NavBtn>
                         </li>)}
                    </div>
                </div>
            </div>

            {/* Static nav buttons */}
            <div className='hidden md:flex mr-3'>
                <div className='flex justify-between flex-row'>
                    {navPageList.map((navPage, index)=> {
                        const isCurrent = (navPage.linkRef === pathname);
                        return(
                            <li key={index} className='list-none'>
                                <NavBtn linkRef={navPage.linkRef} isCurrent={isCurrent} >{navPage.navText}</NavBtn>
                            </li>
                        );
                    })}
                </div>
            </div>

        </div>
        );
}