import React from 'react';

const PatientQueue = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">OPD Queue Management</h2>
      <ul className="space-y-2">
        {['John Doe', 'Jane Smith', 'Alex Johnson'].map((patient, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            {index + 1}. {patient}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Call Next</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add New Patient</button>
      </div>
    </div>
  );
};

export default PatientQueue;
