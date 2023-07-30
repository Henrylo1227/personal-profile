'use client'
import PrimaryBtn from '@/components/primaryBtn';
import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { Atma } from 'next/font/google';

const atma = Atma({subsets:['latin'], weight:'300'});

export const metadata = {
    title: 'Henry Lo | Contact Me',
    description: 'Reach out and contact Henry',
}

const ContactMe = () => {

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        //todo: send email
        console.log({data});
    }

    return (
        <div className='block h-screen w-screen  bg-gradient-to-b from-grey-light to-purple-200 blur-xs'>
            {/* contact form container */}
            <div className='flex text-black flex-col relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-fit w-[80%] bg-paper shadow-md rounded-xl md:w-[60%] lg:w-[40%]'>
                <div className={atma.className}>
                {/* Heading */}
                    <h1 className='text-center mt-3 text-2xl font-bold md:text-4xl'>Reach Out</h1>
                    <form className='display flex flex-col m-5 md:m-20' onSubmit={handleSubmit}>
                        {/* Name Text Input*/}
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <label className='block text-xl md:text-2xl'>First Name:</label>
                                <input className='w-[80%] mr-3 px-2 py-1 md:text-2xl' type='text' id='first-name' name='first-name' required/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='block text-xl md:text-2xl'>Last Name:</label>
                                <input className='w-[80%] px-2 py-1 md:text-2xl' type='text' id='last-name' name='last-name' required/>
                            </div>
                        </div>

                        {/* Email Text Input */}
                        <label className='mt-2 text-xl md:text-2xl md:mt-4'>Email:</label>
                        <input className='px-2 py-1 md:text-2xl' type='email' id='email' name='email' required/>

                        {/* Message Text Input */}
                        <label className='mt-2 text-xl md:text-2xl md:mt-4'>Message:</label>
                        <textarea className='px-2 py-1 md:text-2xl h-16 md:h-32' type='text' id='message' name='message' required/>
                        
                        {/* Send button */}
                        <div className=' self-end mt-2 md:mt-10'>
                            <PrimaryBtn type='submit'>
                                <div className='inline-block'>    
                                    <div className='inline-block'>
                                        <TfiEmail/>
                                    </div>
                                    <div className='pl-2 hidden -translate-y-1 md:inline-block'>
                                            Send Now!
                                    </div>
                                </div>
                            </PrimaryBtn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;