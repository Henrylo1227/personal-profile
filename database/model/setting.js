const { ProjectDetailsSchema } = require('./project');
const mongoose = require('mongoose')

const GeneralSettingSchema = new mongoose.Schema({
    pageManagement: {
        isShowProjectPage: Boolean,
        isShowAboutMePage: Boolean,
        isShowContactPage: Boolean,
    },
    footer: String,
}, {autoCreate: true, autoIndex: false});
const GeneralSettingModel = mongoose.models.GeneralSetting || new mongoose.model('GeneralSetting', GeneralSettingSchema);

const ProjectSettingSchema = new mongoose.Schema({
    projectList: [ProjectDetailsSchema],
    highlightedProjectIdList: [String],
})
const ProjectSettingModel = mongoose.models.ProjectSetting || new mongoose.model('ProjectSetting', ProjectSettingSchema);

const AboutMeSettingSchema = new mongoose.Schema({
    blog: String
})
const AboutMeSettingModel = mongoose.models.AboutMeSetting || new mongoose.model('AboutMeSetting', AboutMeSettingSchema);

module.exports = { GeneralSettingModel, ProjectSettingModel, AboutMeSettingModel }