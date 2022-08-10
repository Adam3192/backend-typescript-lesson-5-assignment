"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.createJob = exports.addJobPage = exports.getJobById = exports.getAllJobs = exports.defaultJobs = void 0;
const job_data_1 = require("../models/job-data");
const defaultJobs = (req, res, next) => {
    res.redirect('/jobs');
};
exports.defaultJobs = defaultJobs;
const getAllJobs = (req, res, next) => {
    res.render('all-jobs', {
        jobList: job_data_1.jobList
    });
};
exports.getAllJobs = getAllJobs;
const getJobById = (req, res, next) => {
    // get the route parameter called "id"
    let jobId = req.params.id;
    // use the find method to get the job that matches the provided id
    let foundJob = job_data_1.jobList.find(job => {
        return job.id === parseInt(jobId);
    });
    // if the job was not found, return not found
    if (!foundJob) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        });
    }
    // render the view with the found job
    res.render('job-detail', {
        foundJob
    });
};
exports.getJobById = getJobById;
const addJobPage = (req, res, next) => {
    res.render('addJob');
};
exports.addJobPage = addJobPage;
const createJob = (req, res, next) => {
    // logging the received data to the console as a verification
    console.log(req.body);
    let newJob = req.body;
    job_data_1.jobList.push(newJob);
    res.redirect('/jobs');
};
exports.createJob = createJob;
const deleteJob = (req, res, next) => {
    let jobId = req.params.id;
    let foundIndex = job_data_1.jobList.findIndex(job => {
        return job.id === parseInt(jobId);
    });
    // delete the item at the index location
    job_data_1.jobList.splice(foundIndex, 1);
    res.redirect('/jobs');
};
exports.deleteJob = deleteJob;
