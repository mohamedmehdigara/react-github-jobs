import React, { useEffect, useState } from 'react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  const addBookmark = (job) => {
    const updatedBookmarks = [...bookmarks, job];
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter(job => job.id !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h2>Bookmarked Jobs</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarked jobs</p>
      ) : (
        <ul>
          {bookmarks.map(job => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button onClick={() => removeBookmark(job.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
