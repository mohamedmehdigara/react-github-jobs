import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';
import FeaturedJobs from './FeaturedJobs';
import Bookmarks from './Bookmarks';

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
      <header className="header">
        <div className="header-top">
          <div className="logo-and-search">
            <img
              className="github-logo"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
            />
            <input className="search-bar" type="text" placeholder="Search" />
          </div>
          <nav className="navigation">
            <Link to="/">Pull requests</Link>
            <Link to="/">Issues</Link>
            <Link to="/">Codespaces</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Explore</Link>
          </nav>
          <div className="profile">
            <img
              className="profile-logo"
              src="https://avatars.githubusercontent.com/u/1?s=60&v=4"
              alt="Profile"
            />
            <button className="add-button">+</button>
          </div>
        </div>
        <div className="header-content">
          <h1 className="header-title">Find your next opportunity at GitHub</h1>
          <p className="header-description">GitHub is where people build software. We're looking for talented individuals to join our growing team.</p>
        </div>
      </header>
      <FeaturedJobs />
      <section className="jobs-section">
        <h2 className="jobs-section-title">Job Listings</h2>
        <ul className="jobs-list">
          {jobs.map(job => (
            <li key={job.id} className="job-list-item">
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-location">{job.location}</p>
              </div>
              <p className="job-description">{job.description.substring(0, 200)}...</p>
              <Link className="job-link" to={`/job/${job.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Bookmarks />
    </div>
  );
};

export default Home;
