'use client'

import { useState } from "react";

export default function useEditProjectForm(focusProject) {

    if (focusProject === undefined){
        return;
    }
    
    const [projectId, setProjectId] = useState(focusProject.projectInfo._id);
    const [projectName, setProjectName] = useState(focusProject.projectInfo.projectName);
    const [description, setDescription] = useState(focusProject.projectInfo.description);
    const [isCompleted, setIsCompleted] = useState(focusProject.projectInfo.isCompleted);
    const [techStack, setTechStack] = useState(focusProject.projectInfo.techStack);
    const [paragraph, setParagraph] = useState(focusProject.paragraph);

    function updateProjectName(name) {
        setProjectName(name);
    }

    function updateDescription(description) {
        setDescription(description);
    }

    function updateIsCompleted(state) {
        setIsCompleted(state);
    }

    function updateTechStack(stack) {
        setTechStack(stack);
    }

    function updateParagraph(paragraph) {
        setParagraph(paragraph);
    }

    function updateFocusProject() {
        setProjectId(focusProject.projectInfo._id);
        setProjectName(focusProject.projectInfo.projectName);
        setDescription(focusProject.projectInfo.description);
        setIsCompleted(focusProject.projectInfo.isCompleted);
        setTechStack(focusProject.projectInfo.techStack);
        setParagraph(focusProject.paragraph);
    }

    const setEditProjectForm = {
        updateFocusProject,
        updateProjectName,
        updateDescription,
        updateIsCompleted,
        updateTechStack,
        updateParagraph,
    }

    const editProjectForm = {
        projectId,
        projectName,
        description,
        isCompleted,
        techStack,
        paragraph,
    }


    return [editProjectForm, setEditProjectForm];
}