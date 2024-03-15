const Project = require('../models/Project');
exports.createProject = async (req, res) => {
    const project = new Project({
        ...req.body,
        createdBy: req.user._id
    })
    try {
        await project.save();
        res.status(201).send(project);
    } catch (error) {
        res.status(404).send(error);
    }
}

exports.getProjects = async (req, res)=>{
    try {
        const projects = await Project.find({members: req.user._id});
        res.send(projects);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getProjectById = async (req, res)=> {
    try {
        const project = await Project.findById(req.params.id);
        if(!project){
            return res.status(404).send();
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateProject = async (req, res)=> {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates'})
    }
    try {
        const project = await  Project.findByIdAndUpdate(req.params.id);
        if(!project){
            return res.status(404).send();
        }
        updates.forEach(update => project[update]= req.body[update]);
        await project.save();
        res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if(!project){
            return res.status(404).send();
        }
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
}