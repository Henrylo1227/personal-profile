/* database 

*/
const mongoose = require('mongoose')

const TechSchema = new mongoose.Schema({
    tech: String,
    colorCode: String,
}, {autoIndex: false});

const ProjectInfoSchema = new mongoose.Schema({
    projectName: String,
    description: String,
    techStack: [TechSchema],
    isCompleted: Boolean,
    lastUpdateDate: Date, 
});

const ProjectDetailsSchema = new mongoose.Schema({
    projectInfo: ProjectInfoSchema,
    paragraph: String,
});

const ProjectDetailsModel = mongoose.models.ProjectDetails || new mongoose.model('ProjectDetails', ProjectDetailsSchema);

module.exports = {ProjectDetailsModel, ProjectDetailsSchema};