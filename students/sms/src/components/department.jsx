// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DepartmentsList = () => {
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch departments data from the API
//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/departments')  // Your backend API URL
//       .then((response) => {
//         setDepartments(response.data);  // Set departments data in state
//         setLoading(false);  // Set loading state to false
//       })
//       .catch((error) => {
//         console.error('Error fetching departments:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Departments List</h1>
//       {departments.length === 0 ? (
//         <p>No departments found</p>
//       ) : (
//         <ul>
//           {departments.map((department) => (
//             <li key={department._id}>
//               <h3>{department.name}</h3>
//               <p>Head: {department.head.name}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DepartmentsList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DepartmentsList = () => {
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch departments data from the API
//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/api/departments')
//       .then((response) => {
//         setDepartments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching departments:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading departments...</div>;
//   }

//   return (
//     <div>
//       <h2>Departments List</h2>
//       <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Head</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((department) => (
//             <tr key={department._id}>
//               <td>{department.name}</td>
//               <td>{department.head?.name || 'N/A'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DepartmentsList;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import axios from 'axios';

const DepartmentsList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/departments')
      .then((response) => {
        setDepartments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading departments...</div>;
  }

  return (
    <div>
      <h2>Departments List</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Head</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department._id}>
              <td>{department.name}</td>
              <td>{department.head?.name || 'N/A'}</td>
              <td>
                <Link to={`/departments/${department._id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentsList;


