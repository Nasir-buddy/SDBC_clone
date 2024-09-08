import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDU3MzVjZjhmNzI2NmVkZThjNWJhNjE4YjYwNDAyYiIsIm5iZiI6MTcyMTQ5ODQwNi4wNjQwNDEsInN1YiI6IjY2OWJmOTYzOTk2OTYxNTYwMTc3NzMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6tivdXcKDz8oaxZEydg6H5GU9nCQbVRK77p5XdvxS1U'
    }
})
export default instance;