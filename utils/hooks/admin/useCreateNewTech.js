'use client'

import { useState } from "react";

export default function useCreateNewTech() {
    
    const [tech, setTech] = useState();
    const [colorCode, setColorCode] = useState();

    const newTech = {
        tech: tech,
        colorCode: colorCode
    }

    function isNewTechSlotEmpty(){
        if (tech == undefined) {
            return true;
        } else if (colorCode == undefined) {
            return true;
        }
    }

    function setNewTech(tech){
        setTech(tech);
    }
    
    function setNewColorCode(colorCode){
        setColorCode(colorCode);
    }

    function clearNewTechSlot(){
        setTech(undefined);
        setColorCode(undefined);
    }

    return {newTech, isNewTechSlotEmpty, setNewTech, setNewColorCode, clearNewTechSlot};
}