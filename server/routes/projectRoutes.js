const express = require('express');
const router = express.Router();
const Project = require('../model/projectModel.js');

router.post('/create', async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const project = new Project({ name, description, image });
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/update/:_id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:_id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params._id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
