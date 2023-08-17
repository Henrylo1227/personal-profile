'use client';

import Loading from "@/components/common/loading";
import PrimaryBtnSm from "@/components/common/primaryBtnSm";
import useGeneralSettingForm from "@/utils/hooks/admin/useGeneralSettingForm";
import Link from "next/link";

const GeneralSetting = () => {

    const formProps = useGeneralSettingForm();

    function handleSubmitForm(){
        formProps.handleUpdateSetting();
    }

    return (
        <section className='block h-screen w-screen bg-white'>
            {/* setting form container */}
            <form className={`relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex h-[60vh] w-96 flex-col rounded-lg bg-amber-100 drop-shadow-sm shadow-black text-black ${formProps.isShowForm?'':'hidden'}`}
                onSubmit={handleSubmitForm}>
                <h1 className='text-center font-bold text-xl p-5'>General Settings</h1>
                <div className='block px-5 justify-start text-start items-start flex-col'>
                    <h2 className='text-lg'>Nav Bar management</h2>
                    <div className='mx-2'>
                        <div className='flex w-48 justify-between'>
                            <label className=''>Project Page</label>
                            <input type='checkbox'checked={formProps.isShowProjectPage} onChange={formProps.handleToggleShowProjectPage} className='h-4 w-4' ></input>
                        </div>
                        <div className='flex w-48 justify-between'>
                            <label className=''>About Me Page</label>
                            <input type='checkbox'checked={formProps.isShowAboutMePage} onChange={formProps.handleToggleShowAboutMePage} className='h-4 w-4' ></input>
                        </div>
                        <div className='flex w-48 justify-between'>
                            <label className=''>Contact Page</label>
                            <input type='checkbox'checked={formProps.isShowContactPage} onChange={formProps.handleToggleShowContactPage} className='h-4 w-4' ></input>
                        </div>
                    </div>
                    <h2 className="text-lg">Footer</h2>
                    <div>
                        <div className="flex flex-col">
                            <label>footer text</label>
                            <textarea name="footer" onInputCapture={(e)=>formProps.handleSetText(e.target.value)} placeholder={formProps.footerText}></textarea>
                        </div>
                    </div>
                    </div>
                <div className="absolute right-0 bottom-0">
                    <PrimaryBtnSm type='submit'>Save</PrimaryBtnSm>
                </div>
                <div className="absolute left-0 top-0 p-5">
                    <Link href='/admin' className=" underline">←back</Link>
                </div>
            </form>
            <div className={`relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex h-48 w-48 rounded-lg bg-amber-100 text-black text-center items-center drop-shadow-sm ${formProps.isShowForm?'hidden':''}`}>
                <Loading/>
            </div>
        </section>
    );
};

export default GeneralSetting;