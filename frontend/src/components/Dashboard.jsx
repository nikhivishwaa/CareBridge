import React from 'react';
import Appointments from './Appointments';
import BedAvailability from './BedAvailability';
import PatientQueue from './PatientQueue';

const Dashboard = () => {
  return (
    <div className="flex-1 p-8 space-y-6">
      <h1 className="text-3xl font-semibold">Appointment Schedule</h1>
      <Appointments />
      <BedAvailability />
      <PatientQueue />
    </div>
  );
};

export default Dashboard;
