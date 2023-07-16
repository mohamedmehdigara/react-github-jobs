import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await axios.get(`https://jobs.github.com/positions/${id}.json`);
      setJob(response.data);
    };

    fetchJobDetails();
  }, [id]);

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.type}</p>
      <p>{job.location}</p>
      {job.company_logo && <img src={job.company_logo} alt="Company Logo" />}
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
      <a href={job.url} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
};

export default JobDetails;
