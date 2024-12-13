import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch teachers data from the API
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/teachers') // Replace with your backend API endpoint
      .then((response) => {
        setTeachers(response.data); // Set teachers data in state
        setLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
        setLoading(false); // Set loading state to false even if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Teachers List</h1>
      {teachers.length === 0 ? (
        <p>No teachers found</p>
      ) : (
        <table border="1"  cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Teacher Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.department ? teacher.department.name : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeachersList;
