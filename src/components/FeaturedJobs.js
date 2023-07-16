import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      const response = await axios.get('https://jobs.github.com/positions.json?featured=true');
      setFeaturedJobs(response.data);
    };

    fetchFeaturedJobs();
  }, []);

  return (
    <div className="featured-jobs">
      <h2>Featured Jobs</h2>
      <ul className="jobs-list">
        {featuredJobs.map(job => (
          <li key={job.id} className="jobs-list-item">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-type">{job.type}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description.substring(0, 150)}...</p>
            {/* Additional job details */}
            <a href={job.url} className="job-apply" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedJobs;
