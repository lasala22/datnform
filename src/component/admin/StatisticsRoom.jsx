import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import 'chart.js/auto';

const StatisticsRoom = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [roomBookingData, setRoomBookingData] = useState(null);
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bookings');
        const bookings = response.data;

        // Get distinct years from booking dates
        const years = [...new Set(bookings.map(booking => new Date(booking.bookingDate).getFullYear()))].sort();

        // Set available years for dropdown selection
        setAvailableYears(years);

        // Set selectedYear to current year if availableYears is set and selectedYear is not already set
        if (years.length > 0 && !selectedYear) {
          setSelectedYear(new Date().getUTCFullYear().toString());
        }

        // Initialize room booking data structure
        const roomData = {};

        // Loop through bookings and populate roomData
        bookings.forEach(booking => {
          const bookingDate = new Date(booking.bookingDate);
          const bookingYear = bookingDate.getFullYear();
          const bookingMonth = bookingDate.getMonth(); // Month is zero-indexed

          // Ensure the booking is within the selected year
          if (bookingYear === parseInt(selectedYear)) {
            if (!roomData[bookingYear]) {
              roomData[bookingYear] = {
                labels: Array.from({ length: 12 }, (_, index) => index + 1), // Labels for months
                datasets: [
                  { label: 'Vip', data: new Array(12).fill(0) },
                  { label: 'Default', data: new Array(12).fill(0) },
                  { label: 'Premium', data: new Array(12).fill(0) },
                  { label: 'Delux', data: new Array(12).fill(0) }
                ]
              };
            }

            // Increment the count for the corresponding room type and month
            switch (booking.roomType) {
              case 'Vip':
                roomData[bookingYear].datasets[0].data[bookingMonth]++;
                break;
              case 'Default':
                roomData[bookingYear].datasets[1].data[bookingMonth]++;
                break;
              case 'Premium':
                roomData[bookingYear].datasets[2].data[bookingMonth]++;
                break;
              case 'Delux':
                roomData[bookingYear].datasets[3].data[bookingMonth]++;
                break;
              default:
                break;
            }
          }
        });

        // Update state with the processed room data
        setRoomBookingData(roomData);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchBookingData();
  }, [selectedYear]); // Fetch data when selectedYear changes

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Monthly Room Booking Statistics for the Year ${selectedYear}`,
      },
    },
  };

  if (!roomBookingData) return <p>Loading...</p>; // Show loading message while data is fetching

  return (
    <div>
      <h2>Room Booking Statistics</h2>
      <select value={selectedYear} onChange={handleChange}>
        {availableYears.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      {roomBookingData[selectedYear] ? (
        <div className='w-10/12 m-auto'>
          <Bar data={roomBookingData[selectedYear]} options={options} />
        </div>
      ) : (
        <p>No data available for the selected year</p>
      )}
    </div>
  );
};

export default StatisticsRoom;
