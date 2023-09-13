'use client'
import Loading from "@/components/common/loading";
import ProjectEditForm from "@/components/admin/project/projectEditForm";
import useProjectSetting from "@/utils/hooks/admin/useProjectSetting";
import useCreateNewProjectForm from "@/utils/hooks/admin/useCreateNewProjectForm";
import CreateNewProjectForm from "@/components/admin/project/createNewProjectForm";
import PrimaryBtnSm from "@/components/common/primaryBtnSm";
import Link from "next/link";


export default function projectSetting() {

    const projectSettingProps = useProjectSetting();
    const [createNewProjectForm, setCreateNewProjectForm] = useCreateNewProjectForm();

    // determine loading state
    function checkIsSettingLoaded(){
        // check the page has loaded
        if (projectSettingProps.projectList.length == 0) {
            // loading
            return false;
        } else {
            return true; // loaded
        }
    }

    // create new project modal control
    // open
    function handleOpenProjectModal(){
        // show project modal (form)
        setCreateNewProjectForm.setIsShow(true);
    }
    // close
    function handleCloseProjectModal(){
        // close project modal (form)
        setCreateNewProjectForm.setIsShow(false);
    }
    

    // select from project list -> edit specific project details
    function handleSelectProject(projectId) {
        projectSettingProps.onProjectFocus(projectId);
    }


    return (
        <section className='block h-screen w-screen bg-white'>
            {/* setting form container */}
            {/* <form className={`relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex h-[60vh] w-96 flex-col rounded-lg bg-amber-100 drop-shadow-sm shadow-black text-black ${formProps.isShowForm?'':'hidden'}`} */}
            <div className={`relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex h-[80vh] w-[80vw] flex-col rounded-lg bg-amber-100 drop-shadow-sm shadow-black text-black ${checkIsSettingLoaded()?'':'hidden'}`}>
                <h1 className='text-center font-bold text-xl p-5'>Project Settings</h1>
                <div className='block px-5'>
                    <h2 className='text-lg'>Project List</h2>
                    <div className="inline-block justify-between w-full align-top">
                        <div className='block w-max'>
                            {projectSettingProps.projectList&&projectSettingProps.projectList.map(project =>{
                                    return (
                                        <div className="bg-white w-40 border-black border p-1 px-2 cursor-pointer" key={project.projectId} onClick={()=>handleSelectProject(project.projectId)}>
                                            {project.projectName}
                                        </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
                <div className="absolute block bottom-0 right-0 m-2">
                    <div className="bg-gray-100 h-0 w-0 md:h-[70vh] md:w-[50vw] flex">
                        {/*project form container*/}
                        <div className={`h-full w-full text-center ${projectSettingProps.isPromptSelectTask?'':'hidden'}`}>
                            Please choose a task
                        </div>
                        <ProjectEditForm focusProject={projectSettingProps.currentFocusProject}/>
                    </div>
                </div>
                <div className="absolute right-0 top-0 hidden sm:block">
                    <PrimaryBtnSm onClick={handleOpenProjectModal}>Add New Project</PrimaryBtnSm>
                </div>
                <div className="absolute right-0 top-0 sm:hidden">
                    <PrimaryBtnSm >+</PrimaryBtnSm>
                </div>
                <div className="absolute left-0 top-0 p-5 hidden sm:block">
                    <Link href='/admin' className=" underline">←back</Link>
                </div>
                <div className="absolute left-0 top-0 p-5 sm:hidden">
                    <Link href='/admin' className=" underline">←</Link>
                </div>
            </div>
            <div className={`relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex h-48 w-48 rounded-lg bg-amber-100 text-black text-center items-center drop-shadow-sm ${checkIsSettingLoaded()?'hidden':''}`}>
                <Loading/>
            </div>
            {/* create new project form modal*/}
            <CreateNewProjectForm createNewProjectForm={createNewProjectForm} setCreateNewProjectForm={setCreateNewProjectForm} handleCloseForm={handleCloseProjectModal} />
        </section>
    );
}