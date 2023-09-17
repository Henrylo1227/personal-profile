import useCreateNewTech from "@/utils/hooks/admin/useCreateNewTech";
import AdminTechStack from "@/components/projectPage/__components/adminTechStack";
import axios from "axios";

export default function CreateNewProjectForm({createNewProjectForm, setCreateNewProjectForm, handleCloseForm}) {

    if (createNewProjectForm.isShow) {

        // custom hooks for create new tech
        const {newTech, isNewTechSlotEmpty, setNewTech, setNewColorCode, clearNewTechSlot} = useCreateNewTech();

        function handleProjectNameChange(event) {
            const value = event.target.value;
            setCreateNewProjectForm.updateProjectName(value);
        }

        function handleDescirptionChange(event) {
            const value = event.target.value;
            setCreateNewProjectForm.updateDescription(value);
        }

        function handleIsCompletedChange() {
            const status = createNewProjectForm.isCompleted;
            setCreateNewProjectForm.updateIsCompleted(!status);
        }

        function handleRemoveATech(index) {
            const newTechStack = [... createNewProjectForm.techStack];
            const removeTech = newTechStack.splice(index, 1);
            setCreateNewProjectForm.updateTechStack(newTechStack);
        }

        function handleAddTech() {
            if (isNewTechSlotEmpty()){
                alert('please input the new tech name and corresponding color code');
                return;
            }
            const newTechStack = [... createNewProjectForm.techStack, newTech];
            clearNewTechSlot();
            setCreateNewProjectForm.updateTechStack(newTechStack);
            document.getElementById('input-newProject-newTech-tech').value = '';
            document.getElementById('input-newProject-newTech-colorCode').value = '';
        }

        function handleParagraphChange(event){
            const value = event.target.value;
            setCreateNewProjectForm.updateParagraph(value);
        }

        function handleSubmit(event){

            if (createNewProjectForm.projectName === ""){
                event.preventDefault();
                alert('Project Name cannot be empty!');
                return;
            }

            const newProjectData = {
                "projectInfo": {
                    "projectName": createNewProjectForm.projectName,
                    "description": createNewProjectForm.description,
                    "isCompleted": createNewProjectForm.isCompleted,
                    "lastUpdateDate": Date.now(),
                    "techStack": createNewProjectForm.techStack,
                },
                "paragraph": createNewProjectForm.paragraph,
            }

            const createNewProjectAPI = '/api/projects/a-project-detail';
            async function createNewProject(newProjectData) {
                try {
                    await axios({
                        method: 'put',
                        url: createNewProjectAPI,
                        data: newProjectData
                    });
                } catch (error) {
                    console.error({error});
                }
            }
            createNewProject(newProjectData);
        }

        return (
            <div className="absolute top-0 h-[100vh] w-[100vw] flex justify-center items-center">
                <div className="bg-black h-full w-full opacity-60"
                    onClick={handleCloseForm}></div>
                <div className="absolute bg-white">
                {/* form container */}
                    <form className="flex text-base w-[80vw] flex-col p-5 pb-10 text-black" onSubmit={handleSubmit}>
                        {/* title */}
                        <div className="flex text-xl w-full justify-center items-center text-center">
                            <h1 className=" ">Create New Project</h1>
                        </div>
                        {/* project name */}
                        <div className="flex w-full justify-between m-1">
                            <label className="w-[140px]">Project Name: </label>
                            <input className="w-[300px] border-2 border-black px-2"
                                type='text'
                                id="project-name"
                                name="project-name"
                                onChange={handleProjectNameChange}
                                >
                            </input>
                        </div>
                        {/* description */}
                        <div className="flex w-full justify-between m-1">
                            <label className="w-[140px]">Description: </label>
                            <textarea className="w-[300px] h-[120px] border-2 border-black px-2"
                                type='text'
                                id='description'
                                name='description'
                                onChange={handleDescirptionChange}
                            ></textarea>
                        </div>
                        {/* is completed */}
                        <div className="flex w-full justify-start m-1">
                            <label className="w-[140px]">Completed Project</label>
                            <div className="flex justify-center items-center">
                                <input type="checkbox" className="mx-2" checked={createNewProjectForm.isCompleted} onChange={handleIsCompletedChange}></input>
                                <label>is the project completed?</label>
                            </div>
                        </div>
                        {/* tech stack */}
                        <div className="flex w-full justify-between items-start m-1">
                            <div className="flex w-[280px] justify-start flex-row">
                                <label className="pr-5">Tech Stack:</label>
                                <div>
                                    <div className="flex bg-white p-3">
                                        <label className="text-base">Tech:</label>
                                        <input className="text-base px-2 mx-2 w-20 h-fit border-2 border-black"
                                            name="newProject-newTech-tech"
                                            id='input-newProject-newTech-tech'
                                            onChange={()=>setNewTech(event.target.value)}></input>
                                        <label className="text-base w-24">color code:</label>
                                        <input className="text-base px-2 mx-2 w-20 h-fit border-2 border-black"
                                            name='newTech-colorCode'
                                            placeholder="#000000"
                                            id='input-newProject-newTech-colorCode'
                                            onChange={()=>setNewColorCode(event.target.value)}></input>
                                        <button className='text-base h-7 w-7 px-2 shadow-sm shadow-black border-2 border-black rounded-full bg-slate-100 hover:brightness-105'
                                            type="button"
                                            onClick={handleAddTech}>+</button>
                                    </div>
                                    <AdminTechStack techList={createNewProjectForm.techStack} onRemove={handleRemoveATech}/>
                                </div>
                            </div>
                        </div>
                        {/* paragraph */}
                        <div className="flex w-full justify-between m-1">
                            <label className="w-[140px]">Detailed Paragraph: </label>
                            <textarea className='w-[300px] h-[120px] border-2 border-black px-2'
                                type='text'
                                id='paragraph'
                                name='paragraph'
                                onChange={handleParagraphChange}
                            ></textarea>
                        </div>
                        {/* submit button */}
                        <div>
                            <button className="absolute bottom-1 right-1 bg-green-600 text-white px-3 py-1 rounded-md border border-black hover:brightness-105"
                            type='submit'>create</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}