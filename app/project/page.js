import DashBoard from '@/components/projectPage/dashBoard/dashBoard';
import ProjectCardGrp from '@/components/projectPage/__components/projectCardGrp';
import React from 'react';

export const metadata = {
    title: 'Henry Lo | Projects',
    description: 'The projects that I have completed',
}


const cardList = [
        {   "projectName": "Profile Project",
            "description": "A nice web-base profile site which support responsive design",
            "techStack": ["Next.Js", "TailwindCSS"],
            "isCompleted": false,
            "lastUpdateDate": "26/7/2023"
        },
        {   "projectName": "To-do-list Project (React)",
            "description": "A small attempt to React library, building the front-end of the application",
            "techStack": ["React.Js"],
            "isCompleted": true,
            "lastUpdateDate": "20/7/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": true,
            "lastUpdateDate": "26/6/2023"
        },
        {   "projectName": "Profile Project",
            "description": "A nice web-base profile site which support responsive design",
            "techStack": ["Next.Js", "TailwindCSS"],
            "isCompleted": false,
            "lastUpdateDate": "26/7/2023"
        },
        {   "projectName": "To-do-list Project (React)",
            "description": "A small attempt to React library, building the front-end of the application",
            "techStack": ["React.Js"],
            "isCompleted": true,
            "lastUpdateDate": "20/7/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": true,
            "lastUpdateDate": "26/6/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": false,
            "lastUpdateDate": "26/6/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": true,
            "lastUpdateDate": "26/6/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": true,
            "lastUpdateDate": "26/6/2023"
        },
        {   "projectName": "To-do-list Project",
            "description": "A full stack application, including a server-side database and a Bootstrap front-end",
            "techStack": ["JavaScript", "HTML", "Bootstrap", "express.js"],
            "isCompleted": true,
            "lastUpdateDate": "26/6/2023"
        }
    ]

export default function Project () {
    return (
        <div className='block h-screen w-screen items-center bg-gradient-to-b from-grey-light to-yellow-100 blur-xs'>
           <div className='flex relative top-[10%] justify-center md:justify-start md:left-[5%]'>
            <DashBoard/>
            </div>
           {/* TODO: Project Cards */}
           <div className='flex relative top-[15%] justify-center'>
            <ProjectCardGrp cardList={cardList}/>
           </div>
        </div>
    );
};
