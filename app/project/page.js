import DashBoard from '@/components/projectPage/dashBoard';
import React from 'react';

export const metadata = {
    title: 'Henry Lo | Projects',
    description: 'The projects that I have completed',
}

export default function Project () {
    return (
        <div className='block h-screen w-screen items-center bg-gradient-to-b from-grey-light to-yellow-100 blur-xs'>
           {/* TODO: Dashboard */}
           <DashBoard/>
           {/* TODO: Project Cards */}
        </div>
    );
};
