'use client'

import { useEffect, useState } from "react";
import axios from "axios";

const apiEndPoint = '/admin/api/general-setting';

export default function useGeneralSettingForm () {

    const [isShowForm, setIsShowForm] = useState(false)
    const [isShowProjectPage, setIsShowProjectPage] = useState(false);
    const [isShowAboutMePage, setIsShowAboutMePage] = useState(false);
    const [isShowContactPage, setIsShowContactPage] = useState(false);
    const [footerText, setFooterText] = useState('');
    
    useEffect(() => {
        async function loadGeneralSetting () {
            try{
                const {data} = await axios({
                    method:'get',
                    url: apiEndPoint
                });
                const {pageManagement, footer} = data.generalSetting;
                setIsShowAboutMePage(pageManagement.isShowAboutMePage);
                setIsShowProjectPage(pageManagement.isShowProjectPage);
                setIsShowContactPage(pageManagement.isShowContactPage);
                setFooterText(footer);
                // show form when the setting data is loaded
                setIsShowForm(true);
            } catch (error) {
                console.error({error});
            }
        }
        loadGeneralSetting();
    },[])

    function handleToggle(getter, setter){
        setter(!getter);
    }

    function handleToggleShowProjectPage(){
        handleToggle(isShowProjectPage, setIsShowProjectPage);
    }
    function handleToggleShowAboutMePage(){
        handleToggle(isShowAboutMePage, setIsShowAboutMePage);
    }
    function handleToggleShowContactPage(){
        handleToggle(isShowContactPage, setIsShowContactPage);
    }
    function handleSetText(text){
        setFooterText(text);
    }

    function handleUpdateSetting(){
        async function updateGeneralSetting(){
            const pageManagement = {
                isShowProjectPage: isShowProjectPage,
                isShowAboutMePage: isShowAboutMePage,
                isShowContactPage: isShowContactPage,
            }
            const footer = footerText;
            const generalSetting = {pageManagement, footer};
            try {
                await axios({
                    method: 'post',
                    url: apiEndPoint,
                    data: {generalSetting}
                });
            } catch (error) {
                console.error({error});
            }
        }
        updateGeneralSetting();
    }

    const formProps = {
        isShowForm,
        isShowAboutMePage, isShowContactPage, isShowProjectPage, footerText,
        handleToggleShowAboutMePage, handleToggleShowContactPage, handleToggleShowProjectPage,
        handleUpdateSetting, handleSetText
    }

    return formProps;
}