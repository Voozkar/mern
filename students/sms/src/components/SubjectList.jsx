import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subjects data from the API
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/subjects')  // Replace with your backend API endpoint
      .then((response) => {
        setSubjects(response.data);  // Set subjects data in state
        setLoading(false);  // Set loading state to false
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
        setLoading(false);  // Set loading state to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Subjects List</h1>
      {subjects.length === 0 ? (
        <p>No subjects found</p>
      ) : (
        <table border="1"  cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Code</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject._id}>
                <td>{subject.name}</td>
                <td>{subject.code}</td>
                <td>{subject.teacher ? subject.teacher.name : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubjectsList;
