import React from 'react';

const Appointments = () => {
  const departments = [
    { name: 'Geriatrician', color: 'bg-blue-500' },
    { name: 'Internist', color: 'bg-red-500' },
    { name: 'Cardiologist', color: 'bg-green-500' },
    { name: 'Orthopedics', color: 'bg-yellow-500' },
    { name: 'Radiology', color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {departments.map((dept, index) => (
        <div key={index} className="flex items-center bg-white shadow-lg rounded-lg p-4">
          <div className={`h-full w-1 ${dept.color} rounded-l-lg`} /> {/* Color-coded border */}
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{dept.name}</h2>
            <p className="text-gray-500">10 mins</p>
            <p className="text-green-500">Active</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
