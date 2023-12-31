import { getGeneralSetting, updateGeneralSetting } from "@/database/connection/dbConnectionLocal";
import { convertPageManagementToNavPageList, updateLocalStaticNavbarConfig } from "@/utils/navbarConfig";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const generalSetting = await getGeneralSetting();
        return NextResponse.json({generalSetting});
    } catch (error) {
        console.error({error});
        return NextResponse.json({error: `Internal Server Error: ${error.message}`}, {status: 500});
    }
}

export async function POST(request) {
    try{
        const {body} = await request.json();
        await updateGeneralSetting(body);
        try{
            const {pageManagement} = body;
            const navPageList = convertPageManagementToNavPageList(pageManagement);
            await updateLocalStaticNavbarConfig(navPageList)
        } catch (error) {
            console.error({error});
            return NextResponse.json({status: 500});
        }
        return NextResponse.json({status: 200});
    } catch (error) {
        console.error({error});
        return NextResponse.json({error: `Internal Server Error: ${error.message}`}, {status: 500});
    }

}