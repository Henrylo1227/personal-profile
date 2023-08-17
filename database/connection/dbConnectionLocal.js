const mongoose = require('mongoose');
require('dotenv').config();
const { ProjectDetailsModel } = require('../model/project');
const { GeneralSettingModel} = require('../model/setting');

const url = process.env.LOCAL_DB_URL;
const databaseTimeoutMs = process.env.LOCAL_DB_TIMEOUT_MS;

// admin operation with database
// general management
async function getGeneralSetting(){
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

async function updateGeneralSetting(setting){
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
async function insertAProject(projectDetails) {
    try{
        const { projectName, description, techStack, isCompleted, lastUpdateDate, paragraph } = projectDetails;
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

module.exports = { getGeneralSetting, updateGeneralSetting }
