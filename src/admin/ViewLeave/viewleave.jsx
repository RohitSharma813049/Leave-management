import React, { useState } from "react";

const initialLeaveData = [
  {
    id: 1,
    employee: "John Doe",
    type: "Annual Leave",
    from: "2024-06-01",
    to: "2024-06-05",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Jane Smith",
    type: "Sick Leave",
    from: "2024-06-10",
    to: "2024-06-12",
    status: "Pending",
  },
  {
    id: 3,
    employee: "Alice Johnson",
    type: "Casual Leave",
    from: "2024-06-15",
    to: "2024-06-16",
    status: "Rejected",
  },
];

export default function ViewLeave() {
  const [leaves, setLeaves] = useState(initialLeaveData);

  function handleApprove(id) {
    setLeaves((prevLeaves) =>
      prevLeaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
  }

  function handleReject(id) {
    setLeaves((prevLeaves) =>
      prevLeaves.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Leave Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Employee</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">From</th>
              <th className="py-2 px-4 text-left">To</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-b">
                <td className="py-2 px-4">{leave.employee}</td>
                <td className="py-2 px-4">{leave.type}</td>
                <td className="py-2 px-4">{leave.from}</td>
                <td className="py-2 px-4">{leave.to}</td>
                <td
                  className={`py-2 px-4 font-semibold ${
                    leave.status === "Approved"
                      ? "text-green-600"
                      : leave.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {leave.status}
                </td>
                <td className="py-2 px-4">
                  {leave.status === "Pending" ? (
                    <div className="flex gap-2">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                        onClick={() => handleApprove(leave.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => handleReject(leave.id)}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-400">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
