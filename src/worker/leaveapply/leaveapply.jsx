export function LeaveApply(){
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" id="leaveForm">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for Leave</h2>
        <div className="mb-4">
          <label htmlFor="leaveType" className="block text-gray-700 mb-2">Leave Type</label>
          <select
            id="leaveType"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Leave Type --</option>
            <option value="Casual">Casual Leave</option>
            <option value="Sick">Sick Leave</option>
            <option value="Earned">Earned Leave</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 mb-2">Start Date</label>
          <input
            type="date"
            id="startDate"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 mb-2">End Date</label>
          <input
            type="date"
            id="endDate"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="reason" className="block text-gray-700 mb-2">Reason</label>
          <textarea
            id="reason"
            required
            placeholder="Enter reason for leave"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit Leave Request
        </button>
      </form>
    </div>
  )
}