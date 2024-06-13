import React from 'react';
import { Card } from 'antd';
import {CalendarOutlined, TeamOutlined, HomeOutlined, EuroCircleOutlined, FileTextOutlined} from  "@ant-design/icons";
export default function HistoryBooking() {
  // Dữ liệu mẫu
  const hotel = {
    title: "Hotel ABC",
    image: "https://vcdn1-dulich.vnecdn.net/2022/07/29/hypat-1659069584-1659081355-1659095800.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=DOVzqNrlo-W0PARbtYdxWw",
    checkInDate: "2024-06-15",
    checkOutDate: "2024-06-20",
    numberOfGuests: 2,
    type_name:"Delux",
    numberOfRooms: 1,
    totalPrice: "$500",
    isPaid: true
  };

  const { title, image, checkInDate, checkOutDate, numberOfGuests, numberOfRooms, totalPrice, isPaid, type_name } = hotel;

  return (
    <Card
    title={<span className="text-black">{title}</span>} // Thêm lớp màu đen cho tiêu đề
    style={{ width: '100%' }}
  >
    
      <div className="grid grid-cols-3 gap-4">
        <p className="text-lg font-semibold mb-2"><CalendarOutlined /> Check-in: <span className="text-blue-500">{checkInDate}</span></p>
        <p className="text-lg font-semibold mb-2"><CalendarOutlined /> Check-out: <span className="text-blue-500">{checkOutDate}</span></p>
        <p className="text-lg font-semibold mb-2"><TeamOutlined /> Number of Guests: <span className="text-blue-500">{numberOfGuests}</span></p>
        <p className="text-lg font-semibold mb-2"><HomeOutlined /> Number of Rooms: <span className="text-blue-500">{numberOfRooms}</span></p>
        <p className="text-lg font-semibold mb-2"><HomeOutlined /> Room Type: <span className="text-blue-500">{type_name}</span></p>
        <p className="text-lg font-semibold mb-2"><EuroCircleOutlined /> Total Price: <span className="text-blue-500">{totalPrice}</span></p>
        <p className="text-lg font-semibold mb-2"><FileTextOutlined /> Status: <span className="text-blue-500">{isPaid ? 'Paid' : 'Not Paid'}</span></p>
      </div>
  
  </Card>
  
  );
}
