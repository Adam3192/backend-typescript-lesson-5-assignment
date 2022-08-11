import { RequestHandler } from "express";
import { Job } from "../models/Job";
import { jobList } from '../models/job-data';

export const defaultJobs: RequestHandler = (req, res, next) => {
    res.redirect('/jobs');
}

export const getAllJobs: RequestHandler = (req, res, next) => {
    res.render('all-jobs', {
        jobList
    });
}

export const getJobById: RequestHandler = (req, res, next) => {

    // get the route parameter called "id"
    let jobId = req.params.id;

    // use the find method to get the job that matches the provided id
    let foundJob = jobList.find(job => {
        return job.id === parseInt(jobId);
    })

    console.log(jobId);
    console.log(typeof jobId);
    
    // if the job was not found, return not found
    if (!foundJob) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        })
    }

    // render the view with the found job
    res.render('job-detail', {
        foundJob
    })
}

export const addJobPage: RequestHandler = (req, res, next) => {
    res.render('addJob');
}

export const createJob: RequestHandler = (req, res, next) => {
    // logging the received data to the console as a verification
    console.log(req.body);

    let newJob: Job = req.body;
    jobList.push(newJob);
    res.redirect('/jobs');
}

export const deleteJob: RequestHandler = (req, res, next) => {
    let jobId = req.params.id;

    let foundIndex = jobList.findIndex(job => {
        return job.id === parseInt(jobId);
    });

    console.log(jobId);

    // delete the item at the index location
    jobList.splice(foundIndex, 1);
    
    res.redirect('/jobs');
}