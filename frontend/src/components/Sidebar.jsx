import React from "react";
import {
  FaClipboardList,
  FaUserMd,
  FaBed,
  FaUserInjured,
  FaClipboard,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white shadow-lg p-6">
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaClipboardList />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaUserMd />
            <span>Doctors</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaUserInjured />
            <span>Patient Queue</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaBed />
            <span>Bed Availability</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaClipboard />
            <span>Reports</span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-600">
            <FaCog />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
