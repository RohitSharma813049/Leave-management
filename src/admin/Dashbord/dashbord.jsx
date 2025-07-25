import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className=' font-bold text-2xl'>Admin Dashboard</h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <h2>Total Employees</h2>
          <p>120</p>
        </div>
        <div style={{ flex: 1, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <h2>Pending Leave Requests</h2>
          <p>8</p>
        </div>
        <div style={{ flex: 1, background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <h2>Approved Leaves</h2>
          <p>45</p>
        </div>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <h2>Recent Leave Requests</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Employee</th>
              <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Type</th>
              <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>From</th>
              <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>To</th>
              <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5rem' }}>John Doe</td>
              <td style={{ padding: '0.5rem' }}>Sick Leave</td>
              <td style={{ padding: '0.5rem' }}>2024-06-01</td>
              <td style={{ padding: '0.5rem' }}>2024-06-03</td>
              <td style={{ padding: '0.5rem' }}>Pending</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>Jane Smith</td>
              <td style={{ padding: '0.5rem' }}>Annual Leave</td>
              <td style={{ padding: '0.5rem' }}>2024-06-05</td>
              <td style={{ padding: '0.5rem' }}>2024-06-10</td>
              <td style={{ padding: '0.5rem' }}>Approved</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>Alice Brown</td>
              <td style={{ padding: '0.5rem' }}>Casual Leave</td>
              <td style={{ padding: '0.5rem' }}>2024-06-02</td>
              <td style={{ padding: '0.5rem' }}>2024-06-02</td>
              <td style={{ padding: '0.5rem' }}>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;