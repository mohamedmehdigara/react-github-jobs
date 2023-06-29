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
        <div className="top-bar">
          <div className="logo-and-search">
            <img
              className="github-logo"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
            />
            <input className="search-bar" type="text" placeholder="Search" />
          </div>
          <div className="navigation">
            <Link to="/">Pull requests</Link>
            <Link to="/">Issues</Link>
            <Link to="/">Codespaces</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Explore</Link>
          </div>
          <div className="profile">
            <img
              className="profile-logo"
              src="https://avatars.githubusercontent.com/u/1?s=60&v=4"
              alt="Profile"
            />
            <button className="add-button">+</button>
          </div>
        </div>
        <h1>GitHub Jobs</h1>
        <p>Find your next opportunity at GitHub</p>
      </div>
      <ul className="jobs-list">
        {jobs.map(job => (
          <li key={job.id} className="jobs-list-item">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description.substring(0, 200)}...</p>
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
