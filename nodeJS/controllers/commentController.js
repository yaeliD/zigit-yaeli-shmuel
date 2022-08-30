const Comment = require('../models/commentModel');

// Add a Comment To Project
const addCommentToProject = async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const comment = await newComment.save();
        res.status(200).json({
            message: "product added successfully",
            comment
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

// Add a Comment To Project
const getCommentByProjectId = async (req, res) => {
    try {
        const ProjectId = req.params.ProjectId;
        const comments = await Comment.find({ projectId: ProjectId });
        res.status(200).json({
            message: "product added successfully",
            comments
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    addCommentToProject,
    getCommentByProjectId
}