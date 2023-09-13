'use client';
import AdminTechStack from "@/components/projectPage/__components/adminTechStack";
import useEditProjectForm from "@/utils/hooks/admin/useEditProjectForm";
import useCreateNewTech from "@/utils/hooks/admin/useCreateNewTech";
import { BiTrash } from "react-icons/bi";
    export default function ProjectEditForm({ focusProject }){

        
        if (focusProject != undefined) {
            
        // custome hooks for edit project form
        const [editProjectForm, setEditProjectForm] = useEditProjectForm(focusProject);
        // custome hooks for create new tech 
        const {newTech, isNewTechSlotEmpty ,setNewTech, setNewColorCode, clearNewTechSlot} = useCreateNewTech();

        function handleProjectNameChange(event) {
            const value = event.target.value;
            setEditProjectForm.updateProjectName(value);
        }

        function handleDescriptionChange(event) {
            const value = event.target.value;
            setEditProjectForm.updateDescription(value);
        }

        function handleIsCompletedChange() {
            const value = !editProjectForm.isCompleted;
            setEditProjectForm.updateIsCompleted(value);
        }

        function handleRemoveATech(index){
            // tempory remove a tech with index from tech stack
            const newTechStack = [... editProjectForm.techStack];
            const removeTech = newTechStack.splice(index, 1);
            setEditProjectForm.updateTechStack(newTechStack);
        }

        function handleAddTech() {
            // tempory create a new tech in the tech Stack, required to have both Tech and color code
            if (isNewTechSlotEmpty()){
                alert('please input the new tech name and reponding color code');
                return;
            }
            // add new Tech to temp list
            const newTechStack = [... editProjectForm.techStack, newTech];
            clearNewTechSlot();
            setEditProjectForm.updateTechStack(newTechStack);
            // clear inputs
            document.getElementById('input-newTech-tech').value = '';
            document.getElementById('input-newTech-colorCode').value = '';
        }

        function handleParagraphChange(event) {
            const value = event.target.value;
            setEditProjectForm.updateParagraph(value);
        }

        function handleSubmit (event) {
            // todo: submit update project form, with api
            event.preventDefault();
            // sumbit the modify request after checking
            console.log({editProjectForm});
        }

        return (
            <form className="flex justify-content w-full flex-col p-5" onSubmit={handleSubmit}>

                <div className="flex text-base w-full justify-between m-1">
                    <label className=" w-[140px]">Project Id: </label>
                    <label className=" w-[300px]">{editProjectForm.projectId}</label>
                </div>
                <div className="flex text-xl w-full justify-between m-1">
                    <label className=" w-[140px]">Project Name: </label>
                    <input className='w-[300px] border-2 border-black px-2'
                        placeholder={editProjectForm.projectName}
                        type='text'
                        id='project-name'
                        name='project-name'
                        onChange={handleProjectNameChange}
                    ></input>
                </div>
                <div className="flex text-xl w-full justify-between m-1">
                    <label className="w-[140px]">Description: </label>
                    <textarea className='w-[300px] h-[120px] border-2 border-black px-2'
                        placeholder={editProjectForm.description}
                        type='text'
                        id='project-description'
                        name='project-description'
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <div className="flex text-xl w-full justify-start items-center m-1">
                    <label className="w-[140px]">Completed Project: </label>
                    <label className='w-[140px]'>{`${editProjectForm.isCompleted? 'Completed':'In progress'}`}</label>
                    <div className="flex flex-col justify-center items-center">
                        <button className = 'text-base px-2 shadow-sm shadow-black border-2 border-black bg-slate-100 hover:brightness-105' 
                            type='button'
                            onClick={handleIsCompletedChange}>
                            update
                        </button>
                        <label className="relative bottom-0 w-[140px] text-xs text-center">{``}</label>
                    </div>
                </div>
                <div className="flex text-xl w-full justify-between items-start m-1">
                    <div className="flex w-[280px] justify-start flex-row">
                        <label className="pr-5">Tech Stack:</label>
                        <div>
                            <div className="flex bg-white p-3">
                                <label className="text-base">Tech:</label>
                                <input className="text-base px-2 mx-2 w-20 h-fit border-2 border-black"
                                    name="newTech-tech"
                                    id='input-newTech-tech'
                                    onChange={()=>setNewTech(event.target.value)}></input>
                                <label className="text-base w-24">color code:</label>
                                <input className="text-base px-2 mx-2 w-20 h-fit border-2 border-black"
                                    name='newTech-colorCode'
                                    id='input-newTech-colorCode'
                                    onChange={()=>setNewColorCode(event.target.value)}></input>
                                <button className='text-base h-7 w-7 px-2 shadow-sm shadow-black border-2 border-black rounded-full bg-slate-100 hover:brightness-105'
                                    type="button"
                                    onClick={handleAddTech}>+</button>
                            </div>
                            <AdminTechStack techList={editProjectForm.techStack} onRemove={handleRemoveATech}/>
                        </div>
                    </div>
                </div>
                <div className="flex text-xl w-full justify-between m-1">
                    <label className="w-[140px]">Detailed Paragraph: </label>
                    <textarea className='w-[300px] h-[120px] border-2 border-black px-2'
                        placeholder={editProjectForm.paragraph}
                        type='text'
                        id='paragraph'
                        name='paragraph'
                        onChange={handleParagraphChange}
                    ></textarea>
                </div>
                <button className="absolute h-12 bottom-2 left-2 bg-red-500 px-2 py-1 rounded-md border border-back hover:brightness-105 text-white text-base items-center flex justify-center">
                    <BiTrash className="text-xl"/>
                    Delete Project
                </button>
                <button className="absolute bottom-1 right-1 bg-yellow-300 px-3 py-1 rounded-md border border-black hover:brightness-105"
                    type='submit'>save changes</button>

            </form>
        );
    }
}