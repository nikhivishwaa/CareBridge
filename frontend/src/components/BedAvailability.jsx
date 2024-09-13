import React from 'react';

const BedAvailability = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Bed Availability</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { ward: 'Ward 1', available: 3, occupied: 7 },
          { ward: 'Ward 2', available: 5, occupied: 5 },
          { ward: 'ICU', available: 1, occupied: 9 },
        ].map((bed, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-medium">{bed.ward}</h3>
            <p>Available: {bed.available}</p>
            <p>Occupied: {bed.occupied}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedAvailability;
