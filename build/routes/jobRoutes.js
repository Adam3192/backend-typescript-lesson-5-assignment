"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobsController_1 = require("../controllers/jobsController");
const router = (0, express_1.Router)();
// GET /jobs - renders a list of all jobs
router.get('/', jobsController_1.getAllJobs);
// GET /jobs/new - renders an add job page
router.get('/new', jobsController_1.addJobPage);
// POST /jobs/new - creates new job
router.post('/new', jobsController_1.createJob);
// POST /jobs/delete/:id - deletes a job
router.post('/delete/:id', jobsController_1.deleteJob);
// GET /jobs/:id - render the job requested
router.get('/:id', jobsController_1.getJobById);
exports.default = router;
