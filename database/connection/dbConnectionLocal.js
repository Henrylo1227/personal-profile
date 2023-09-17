const mongoose = require('mongoose');
require('dotenv').config();
const { ProjectDetailsModel } = require('../model/project');
const { GeneralSettingModel} = require('../model/setting');

const url = process.env.LOCAL_DB_URL;
const databaseTimeoutMs = process.env.LOCAL_DB_TIMEOUT_MS;

// admin operation with database
// general management
export async function getGeneralSetting(){
    try {
        await mongoose.connect(url, { serverSelectionTimeoutMS: databaseTimeoutMs});
        //operation
        const generalSetting = await GeneralSettingModel.findOne();
        return generalSetting;
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}

export async function updateGeneralSetting(setting){
    try {
        const {pageManagement, footer} = setting;
        await mongoose.connect(url, { serverSelectionTimeoutMS: databaseTimeoutMs});
        // operation
        const generalSetting = await GeneralSettingModel.findOne();
        // create if not exists
        if (generalSetting === null) {
            await GeneralSettingModel.create({
                pageManagement, footer
            });
        } else {
            generalSetting.pageManagement = pageManagement;
            generalSetting.footer = footer;
            await generalSetting.save();
        }
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}

// project management
export async function getAllProjectBrief() {
    // return a list of project ids and project names
    try {
        await mongoose.connect(url, {serverSelectionTimeoutMS: databaseTimeoutMs});
        const response = await ProjectDetailsModel.aggregate([
            {$project: {_id: 1 , "projectInfo.projectName": 1}},
        ]);
        const projectBriefList = []
        response.forEach( project => {
            const idStr = project._id.toString();
            projectBriefList.push({projectId: idStr, projectName: project.projectInfo.projectName})
        });
        return projectBriefList;
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}

export async function getProjectDetails(projectId){
    // return a project detail profile with all properties of the project using the projectId.
    try {
        await mongoose.connect(url, {serverSelectionTimeoutMS: databaseTimeoutMs});
        const projectDetails = await ProjectDetailsModel.findById(projectId).exec(); //todo
        const response = projectDetails
        response.projectInfo._id = projectId;
        return response;
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}


export async function createNewProject(projectDetails) {
    try{
        const {projectInfo, paragraph} = projectDetails;
        const { projectName, description, techStack, isCompleted, lastUpdateDate } = projectInfo;
        await mongoose.connect(url, { serverSelectionTimeoutMS: databaseTimeoutMs});
        //operation
        await ProjectDetailsModel.create({
            projectInfo: {
                projectName: projectName,
                description: description,
                techStack: techStack,
                isCompleted: isCompleted,
                lastUpdateDate: lastUpdateDate, 
            },
            paragraph: paragraph,
        });
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}

export async function updateProject(projectId, newProjectDetail) {
    try {
        const { projectInfo, paragraph } = newProjectDetail;
        const { projectName, description, techStack, isCompleted, lastUpdateDate } = projectInfo;
        await mongoose.connect(url, { serverSelectionTimeoutMS: databaseTimeoutMs});
        //operation
        const projectDoc = await ProjectDetailsModel.findById(projectId).exec();
        projectDoc.projectInfo = {
            projectName: projectName,
            description: description,
            techStack: techStack,
            isCompleted: isCompleted,
            lastUpdateDate: lastUpdateDate,
        };
        projectDoc.paragraph = paragraph;

        await projectDoc.save();
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect(); 
    }
}

export async function removeProject(projectId) {
    try {
        // operation
        await mongoose.connect(url, {serverSelectionTimeoutMS: databaseTimeoutMs});
        await ProjectDetailsModel.deleteOne({_id: projectId});
    } catch (error) {
        console.error({error});
    } finally {
        await mongoose.disconnect();
    }
}
