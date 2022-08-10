import { Router } from 'express';
import { getAllJobs, getJobById, addJobPage, createJob, deleteJob } from '../controllers/jobsController';

const router = Router();

// GET /jobs - renders a list of all jobs
router.get('/', getAllJobs);

// GET /jobs/new - renders an add job page
router.get('/new', addJobPage);

// POST /jobs/new - creates new job
router.post('/new', createJob);

// POST /jobs/delete/:id - deletes a job
router.post('/delete/:id', deleteJob);

// GET /jobs/:id - render the job requested
router.get('/:id', getJobById);

export default router;
