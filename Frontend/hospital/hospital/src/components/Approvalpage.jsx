import React from 'react';
import {  useNavigate } from "react-router-dom";
const Approvalpage = (Approve) => {
  const data = [
    { name: 'Jhone', age:25, speciality: 'Dental', Approvalstatus: "Yes" },
    { name: 'Ram', age:25, speciality: 'Cardiology', Approvalstatus: "Yes" },
    { name: 'Sam', age: 28, speciality: 'Neurology', Approvalstatus: "No" },
    { name: 'Durga', age: 29, speciality: 'Opthamology', Approvalstatus: "Yes" },
    { name: 'Babitha', age: 35, speciality: 'Oncology', Approvalstatus: "Yes" },
  ];

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Speciality</th>
          <th style={thStyle}>Approvalstatus</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={tdStyle}>{item.name}</td>
            <td style={tdStyle}>{item.age}</td>
            <td style={tdStyle}>{item.speciality}</td>
            <td style={tdStyle}>{item.Approvalstatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Approvalpage;
