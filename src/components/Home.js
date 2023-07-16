import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [sortType, setSortType] = useState('relevance'); // Default sorting type
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('https://jobs.github.com/positions.json');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  // Sorting function
  const sortJobs = (type) => {
    setSortType(type);
  };

  // Filtering function
  const filterJobs = (location) => {
    setLocationFilter(location);
  };

  // Apply sorting and filtering
  let sortedJobs = [...jobs];
  if (sortType === 'date') {
    sortedJobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }
  if (locationFilter !== '') {
    sortedJobs = sortedJobs.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()));
  }

  return (
    <div className="container">
      {/* Header and other components */}

      {/* Sorting options */}
      <div className="sorting-options">
        <span>Sort by:</span>
        <button
          className={sortType === 'relevance' ? 'active' : ''}
          onClick={() => sortJobs('relevance')}
        >
          Relevance
        </button>
        <button
          className={sortType === 'date' ? 'active' : ''}
          onClick={() => sortJobs('date')}
        >
          Date
        </button>
      </div>

      {/* Filtering options */}
      <div className="filtering-options">
        <span>Location:</span>
        <input
          type="text"
          placeholder="Enter location"
          value={locationFilter}
          onChange={(e) => filterJobs(e.target.value)}
        />
      </div>

      {/* Job listings */}
      <ul className="jobs-list">
        {sortedJobs.map(job => (
          <li key={job.id} className="jobs-list-item">
            {/* Job item content */}
          </li>
        ))}
      </ul>

      <FeaturedJobs />
    </div>
  );
};

export default Home;
