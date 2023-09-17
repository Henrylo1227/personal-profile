'use client';

import { useState } from 'react';

export default function useCreateNewProjectForm() {


    const [isShow, setIsShow] = useState(false);

    // data field
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [techStack, setTechStack] = useState([]);
    const [paragraph, setParagraph] = useState("");

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
    
    const createNewProjectForm = {
        isShow,
        projectName,
        description,
        isCompleted,
        techStack,
        paragraph,
    }
    const setCreateNewProjectForm = {
        setIsShow,
        updateProjectName,
        updateDescription,
        updateIsCompleted,
        updateTechStack,
        updateParagraph,
    }

    return [createNewProjectForm, setCreateNewProjectForm];
    
}