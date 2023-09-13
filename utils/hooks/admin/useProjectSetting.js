import axios from "axios";
import { useEffect, useState } from "react";

const projectListAPI = '/api/projects/all-project-brief';
const aProjectDetailAPI = '/api/projects/a-project-detail';

export default function useProjectSetting () {

    const [isPromptSelectTask, setIsPromptSelectTask] = useState(true);
    const [projectList, setProjectList] = useState([]);
    const [currentFocusProjectId, setCurrentFocusProjectId] = useState('');
    const [currentFocusProject, setCurrentFocusProject] = useState();

    useEffect(()=>{
        async function loadingProjectList(){
            try {
                const {data} = await axios({
                    method: 'get',
                    url: projectListAPI,
                });
                setProjectList(data);
            } catch (error) {
                console.error({error});
            }
        }
        loadingProjectList();
    }, []);

    useEffect(()=> {
        async function loadCurrentFocusProject() {
            if (currentFocusProjectId !==null && currentFocusProjectId !== ''){
                try {
                    const {data} = await axios({
                        method: 'get',
                        url: aProjectDetailAPI,
                        params: {
                            projectId: currentFocusProjectId
                        }
                    });
                    setCurrentFocusProject(data);
                    console.log(data);
                    setIsPromptSelectTask(false);
                } catch (error) {
                    console.error({error});
                }
            }
        }
        loadCurrentFocusProject(currentFocusProjectId);
    }, [currentFocusProjectId])

    function onProjectFocus(projectId){
        setCurrentFocusProjectId(projectId);
    }

    const props = {
        projectList, currentFocusProjectId, 
        currentFocusProject,
        isPromptSelectTask,
        onProjectFocus,        
    }

    return props;
}

