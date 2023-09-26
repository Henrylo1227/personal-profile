import { getAllProject } from "@/database/connection/dbConnectionLocal";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projectFullList = await getAllProject();
        console.log(projectFullList);
        return NextResponse.json({projectFullList});
    } catch (error) {
        console.error({error});
    }
}