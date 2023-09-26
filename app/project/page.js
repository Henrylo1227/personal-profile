'use client';
import DashBoard from '@/components/projectPage/dashBoard/dashBoard';
import ProjectCardGrpMobile from '@/components/projectPage/__components/mobileView/projectCardGrpMobile';
import ProjectCardGrpDesktop from '@/components/projectPage/__components/desktopView/projectCardGrpDesktop';
import { useState, useEffect } from 'react';
import axios from 'axios';

const metadata = {
    title: 'Henry Lo | Projects',
    description: 'The projects that I have completed',
}

const allProjectAPI = '/api/projects/all-project'

// todo: get card List from api
// const cardList = projectPage.content.cardList;

function projectListToCardList(projectFullList) {
    const resultList = [];
    console.log(projectFullList);
    projectFullList.forEach((project) => {
        const card = {
            projectId: project._id,
            projectName: project.projectInfo.projectName,
            description: project.projectInfo.description,
            techStack: project.projectInfo.techStack,
            isCompleted: project.projectInfo.isCompleted,
            lastUpdateDate: project.projectInfo.lastUpdateDate,
        }
        resultList.push(card);
    });
    return resultList;
}

export default function Project () {

    const [cardList, setCardList] = useState([]);

    // get project list for cards
    useEffect(()=>{
        async function loadAllProjectList() {
            try{
                const allProjectList = await axios({
                    method: 'get',
                    url: allProjectAPI,
                });
                console.log(allProjectList.data.projectFullList);
                const loadedCardList = projectListToCardList(allProjectList.data.projectFullList);
                setCardList(loadedCardList);
            } catch (error) {
                console.error({error});
            } 
        }
        loadAllProjectList();
    }, [])

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
