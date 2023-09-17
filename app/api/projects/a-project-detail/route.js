import { getProjectDetails, createNewProject, updateProject, removeProject } from "@/database/connection/dbConnectionLocal";
import { NextResponse } from "next/server";



export async function GET (request) {
    const searchParams = await request.nextUrl.searchParams;
    const projectId = searchParams.get('projectId');
    try{
        if (projectId==undefined){
            throw new Error('projectId is undefined');
        }
        const projectDetail = await getProjectDetails(projectId);
        return NextResponse.json(projectDetail);
    } catch (error) {
        console.error({error});
    }
}

export async function PUT (request) {
    // update or create new new project
    try {
        const body = await request.json();
        if (body._id != undefined) {
            const {_id, projectInfo, paragraph } = body;
            const projectDetail = {
                "projectInfo": projectInfo,
                "paragraph": paragraph,
            }
            // update existing project
            await updateProject(_id, projectDetail);
            return NextResponse.json({status: 200});
        } else {
            // create new project
            const { projectInfo, paragraph } = body;
            const projectDetail = {
                projectInfo: projectInfo,
                paragraph: paragraph,
            }
            await createNewProject(projectDetail);
            return NextResponse.json({status: 200});
        }
    } catch (error) {
        console.error({error});
        return NextResponse.json({status: 500});
    }
}

export async function DELETE (request) {
    // delete existing project
    try {
        const body = await request.json();
        await removeProject(body.projectId);
        return NextResponse.json({status: 200});
    } catch (error){
        console.error({error});
        return NextResponse.json({status: 500});
    }

}