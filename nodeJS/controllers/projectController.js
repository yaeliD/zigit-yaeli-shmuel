const Project = require('../models/projectModel');

// Add a Project
const addProject = async (req, res) => {
    const newProject = new Project(req.body);
    try {
        const project = await newProject.save();
        res.status(200).json({
            message: "product added successfully",
            project
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({
            projects
        })
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    addProject,
    getAllProjects,
}