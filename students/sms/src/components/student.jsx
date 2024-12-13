// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const StudentsList = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch students data from the API
//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/students')  // Your backend API URL
//       .then((response) => {
//         console.log('API Response:', response); 
//         setStudents(response.data);  // Set students data in state
//         setLoading(false);  // Set loading state to false
//       })
//       .catch((error) => {
//         console.error('Error fetching students:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Students List</h1>
//       {students.length === 0 ? (
//         <p>No students found</p>
//       ) : (
//         <ul>
//           {students.map((student) => (
//             <li key={student._id}>
//               <h3>{student.name}</h3>
//               <p>Age: {student.age}</p>
//               <p>Email: {student.email}</p>
//               <p>Department: {student.department.name}</p>
//               <p>Subjects: {student.subjects.map(sub => sub.name).join(", ")}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentsList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students data from the API
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/students')
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading students...</div>;
  }

  return (
    <div>
      <h2>Students List</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Department</th>
            <th>Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.department?.name || 'N/A'}</td>
              <td>
                {student.subjects && student.subjects.length > 0
                  ? student.subjects.map((sub) => sub.name).join(', ')
                  : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;


