// import React from 'react';
// import StudentsList from './components/student';
// import DepartmentsList from './components/department';

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to the Student Management System</h1>
//       <StudentsList /> 
//       <DepartmentsList />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentsList from './components/student';
import DepartmentsList from './components/department';
import DepartmentDetails from './components/departmentDetail';
import Navbar from './components/Navbar'; 
import TeachersList from './components/TeacherList'; // Teachers component
import SubjectsList from './components/SubjectList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div  style={{ padding: '20px' }}>
        <h1>Welcome to the Student Management System</h1>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/departments" element={<DepartmentsList />} />
          <Route path="/departments/:id" element={<DepartmentDetails />} />
          <Route path="/teachers" element={<TeachersList />}></Route>
          <Route path="/subjects" element={<SubjectsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
