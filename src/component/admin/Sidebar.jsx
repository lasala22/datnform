import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  HomeOutlined,
  UserOutlined,
  CarryOutOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  {
    key: 'dashboard1',
    icon: <AppstoreOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'profile1',
    icon: <UserOutlined />,
    label: 'Profile',
  },
  {
    key: 'hotelcensorship1',
    icon: <CarryOutOutlined />,
    label: 'Hotel censorship',
  },
  {
    key: 'user1',
    label: 'User management',
    icon: <TeamOutlined />,
    children: [
      {
        key: 'customner1',
        label: 'Customer',
      },
      {
        key: 'partner1',
        label: 'Partner',
      },
      
    ],
  },
  {
    key: 'hotelmanagement1',
    label: 'Hotel management',
    icon: <HomeOutlined />,
    children: [
      {
        key: 'hotel1',
        label: 'Hotel',
      },
      {
        key: 'room1',
        label: 'Room',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
          },
        ],
      },
    ],
  },
];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
      
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        className='h-screen'
      />
    </div>
  );
};
export default Sidebar;