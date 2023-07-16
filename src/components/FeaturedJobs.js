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
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              {/* Additional job details */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FeaturedJobs;
  