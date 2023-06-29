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
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
