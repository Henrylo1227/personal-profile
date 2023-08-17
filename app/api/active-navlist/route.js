import { NextResponse } from "next/server";
import { generateStaticNavbarConfig, getLocalStaticNavbarConfig, updateLocalStaticNavbarConfig } from '@/utils/navbarConfig.js'

export async function GET () {
    try{
        const navPageList = await getLocalStaticNavbarConfig();
        console.debug('retriveing navbar config locally')
        return NextResponse.json(navPageList);
    } catch (error) {
        // failed get static navPageList
        console.error({error});
        // get and update the static navPageList from db
        console.debug('retrieving navbar config from database');
        const newNavPageList = await generateStaticNavbarConfig();
        updateLocalStaticNavbarConfig(newNavPageList)
        return NextResponse.json(newNavPageList)
    }
}