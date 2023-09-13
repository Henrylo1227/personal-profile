import { getAllProjectBrief } from "@/database/connection/dbConnectionLocal"
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const projectBriefList = await getAllProjectBrief();
        return NextResponse.json(projectBriefList);
    } catch (error) {
        console.error({error});
    }
}