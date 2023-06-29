import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('https://jobs.github.com/positions.json');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>GitHub Jobs</h1>
        <p>Find your next opportunity at GitHub</p>
      </div>
      <ul className="jobs-list">
        {jobs.map(job => (
          <li key={job.id} className="jobs-list-item">
            <h2>{job.title}</h2>
            <p className="job-description">{job.description}</p>
            <Link className="link-button" to={`/job/${job.id}`}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
