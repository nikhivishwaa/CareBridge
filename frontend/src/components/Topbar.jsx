import React, { useState } from 'react';
import { FaBell, FaHospital } from 'react-icons/fa';
import AssistantIcon from '@mui/icons-material/Assistant';
import { Modal, Button, Typography, Box, IconButton, Badge, Menu, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import { Add } from '@mui/icons-material';

const Topbar = () => {
  const [hover, setHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [notifications] = useState(['Emergency Case: John Doe', 'Appointment Reminder: Jane Smith']);
  const hospitalLogo = ''; // Simulate if the hospital logo is empty

  // Sample data for search
  const data = [
    { name: 'Cardiology Department' },
    { name: 'Dr. Smith' },
    { name: 'Patient: John Doe' },
    { name: 'Orthopedics Department' },
    { name: 'Patient: Jane Smith' },
    { name: 'Neurology Department' }
  ];

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleBellClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBellClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="bg-white shadow-lg px-6 py-4 flex justify-between items-center">
      {/* CareBridge Logo */}
      <div className="flex items-center">
        {hospitalLogo ? (
          <img
            src={AssistantIcon}
            alt="Hospital Logo"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        ) : (
          <FaHospital className="h-10 w-10 text-gray-500" />
        )}
        <Typography variant="h5" className="font-semibold text-blue-500 ml-2">
          CareBridge
        </Typography>
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          placeholder="Search for departments, doctors, patients..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Search Suggestions */}
        {filteredResults.length > 0 && (
          <List className="absolute left-0 right-0 top-12 bg-white shadow-lg border rounded-lg z-50">
            {filteredResults.map((result, index) => (
              <ListItem key={index} button onClick={() => setSearchTerm(result.name)}>
                <ListItemText primary={result.name} />
              </ListItem>
            ))}
          </List>
        )}
      </div>

      {/* Right-Side Buttons */}
      <div className="flex items-center space-x-6">
        {/* New Appointment Button */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={handleOpenModal}
        >
          New Appointment
        </Button>

        {/* Notification Bell */}
        <IconButton color="inherit" onClick={handleBellClick}>
          <Badge badgeContent={notifications.length} color="error">
            <FaBell />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleBellClose}
          PaperProps={{
            style: {
              maxHeight: 200,
              width: '250px',
            },
          }}
        >
          {notifications.length > 0 ? notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleBellClose}>
              {notification}
            </MenuItem>
          )) : (
            <MenuItem onClick={handleBellClose}>No notifications</MenuItem>
          )}
        </Menu>

        {/* Hospital Logo Hover */}
        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hospitalLogo ? (
            <img src={hospitalLogo} alt="Hospital Logo" className="h-10 w-10 rounded-full cursor-pointer" />
          ) : (
            <FaHospital className="h-10 w-10 text-gray-500" />
          )}
          {hover && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48 p-4">
              <Typography className="text-gray-700 font-semibold">Hospital Name</Typography>
              <Typography className="text-gray-500 text-sm">Hospital ID: 12345</Typography>
              <Button fullWidth variant="contained" color="secondary" className="mt-2">
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for New Appointment */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6"
          width={400}
        >
          <Typography variant="h6" className="mb-4">
            New Appointment
          </Typography>
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Patient Name"
          />
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Appointment Date"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleCloseModal}>
            Book Appointment
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Topbar;
