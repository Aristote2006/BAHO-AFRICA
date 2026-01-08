const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   POST api/projects
// @desc    Create a new project
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, description, startDate, endDate, status, imageUrl, category } = req.body;

    // Create new project
    const newProject = new Project({
      title,
      description,
      startDate,
      endDate,
      status,
      imageUrl,
      category
    });

    // Save to database
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/projects/:id
// @desc    Get a specific project
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/projects/:id
// @desc    Update a project
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const { title, description, startDate, endDate, status, imageUrl, category } = req.body;

    const projectFields = {};
    if (title) projectFields.title = title;
    if (description) projectFields.description = description;
    if (startDate) projectFields.startDate = startDate;
    if (endDate) projectFields.endDate = endDate;
    if (status) projectFields.status = status;
    if (imageUrl) projectFields.imageUrl = imageUrl;
    if (category) projectFields.category = category;

    let project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    
    project = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: projectFields },
      { new: true }
    );
    
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    
    await Project.findByIdAndRemove(req.params.id);
    
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;