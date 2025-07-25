import React from "react";

const leaveHistoryData = [
  {
    id: 1,
    type: "Sick Leave",
    from: "2024-06-01",
    to: "2024-06-03",
    status: "Approved",
  },
  {
    id: 2,
    type: "Casual Leave",
    from: "2024-05-15",
    to: "2024-05-16",
    status: "Rejected",
  },
  {
    id: 3,
    type: "Annual Leave",
    from: "2024-04-10",
    to: "2024-04-12",
    status: "Pending",
  },
];

const statusColors = {
  Approved: "green",
  Rejected: "red",
  Pending: "orange",
};

function LeaveHistory() {
  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
      <h2 style={{ marginBottom: 24 }}>Leave History</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Type</th>
            <th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>From</th>
            <th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>To</th>
            <th style={{ padding: 12, borderBottom: "1px solid #ddd" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveHistoryData.map((leave) => (
            <tr key={leave.id}>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>{leave.type}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>{leave.from}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee" }}>{leave.to}</td>
              <td style={{ padding: 12, borderBottom: "1px solid #eee", color: statusColors[leave.status] }}>
                {leave.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveHistory;