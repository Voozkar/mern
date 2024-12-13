import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the department ID from the URL
import axios from 'axios';

const DepartmentDetails = () => {
  const { id } = useParams(); // Get department ID from the URL
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/departments/${id}`)
      .then((response) => {
        setDepartment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching department details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading department details...</div>;
  }

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div>
      <h2>Department Details</h2>
      <p><strong>Name:</strong> {department.name}</p>
      <p><strong>Head:</strong> {department.head?.name || 'N/A'}</p>
      <h3>Students in Department:</h3>
      <ul>
        {department.students && department.students.length > 0 ? (
          department.students.map((student) => (
            <li key={student._id}>
              {student.name} (Email: {student.email})
            </li>
          ))
        ) : (
          <p>No students found in this department</p>
        )}
      </ul>
    </div>
  );
};

export default DepartmentDetails;
