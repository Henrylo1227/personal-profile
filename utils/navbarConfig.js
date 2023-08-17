import { getGeneralSetting } from "@/database/connection/dbConnectionLocal";
import {resolve} from 'path';
import * as fs from 'fs';

const filePath = resolve('./public/staticProps/navbarConfig.json');
export async function generateStaticNavbarConfig(){
    // return the navbar config
    try {
        const generalSetting = await getGeneralSetting();
            const {pageManagement, footer} = generalSetting;
        return convertPageManagementToNavPageList(pageManagement);
    } catch (error) {
        console.error({error});
    }
}

export function convertPageManagementToNavPageList(pageManagement){
    const newNavPageList = [];
    if (pageManagement.isShowProjectPage) {
        newNavPageList.push({linkRef: '/project', navText: 'Project'});
    }
    if (pageManagement.isShowAboutMePage) {
        newNavPageList.push({linkRef: '/about-me', navText: 'About Me'});
    }
    if (pageManagement.isShowContactPage) {
        newNavPageList.push({linkRef: '/contact-me', navText: 'Contact Me'});
    }
    return newNavPageList;
}

export async function getLocalStaticNavbarConfig(){
    const navPageList = fs.readFileSync(filePath, 'utf-8');
    if (navPageList === ""){
        throw new Error(`Failed to use pre-compiled navbarConfig filePath: ${filePath}`);
    }
    console.log({navPageList});

    return JSON.parse(navPageList);
}

export async function updateLocalStaticNavbarConfig(newConfig){
    fs.writeFile(filePath, JSON.stringify(newConfig), error => {
        if (error) {
            console.error({error});
        }
    })
}