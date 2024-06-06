import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, ManOutlined, WomanOutlined } from "@ant-design/icons";
import 'tailwindcss/tailwind.css';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    phoneNum: "123-456-7890",
    gender: "male",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Validate data before saving
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phoneNum ||
      !formData.gender
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Perform save logic here (e.g., update database or API)
    console.log("Save data:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: value,
    }));
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full max-w-lg p-6 bg-white shadow-lg rounded-lg border-2 border-gray-300">
      <Form layout="vertical">
        <h2 className="text-center text-2xl font-bold mb-4">My Profile</h2>
        {/* First Name */}
        <Form.Item label="First Name">
          <Input
            prefix={<UserOutlined />}
            size="large"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            disabled={!isEditing}
            className="rounded-lg"
          />
        </Form.Item>
        {/* Last Name */}
        <Form.Item label="Last Name">
          <Input
            prefix={<UserOutlined />}
            size="large"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            disabled={!isEditing}
            className="rounded-lg"
          />
        </Form.Item>
        {/* Email */}
        <Form.Item label="Email">
          <Input
            prefix={<MailOutlined />}
            size="large"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="rounded-lg"
          />
        </Form.Item>
        {/* Phone Number */}
        <Form.Item label="Phone Number">
          <Input
            prefix={<PhoneOutlined />}
            size="large"
            name="phoneNum"
            value={formData.phoneNum}
            onChange={handleChange}
            disabled={!isEditing}
            className="rounded-lg"
          />
        </Form.Item>
        {/* Gender */}
        <Form.Item label="Gender">
          <Select
            size="large"
            value={formData.gender}
            onChange={handleSelectChange}
            disabled={!isEditing}
            className="rounded-lg"
          >
            <Select.Option value="male">
              <ManOutlined /> Male
            </Select.Option>
            <Select.Option value="female">
              <WomanOutlined /> Female
            </Select.Option>
            <Select.Option value="other">
              <UserOutlined /> Other
            </Select.Option>
          </Select>
        </Form.Item>
        <div className="flex justify-end mt-4 space-x-4">
          {!isEditing ? (
            <Button onClick={handleEdit} className="rounded-lg">
              Edit Profile
            </Button>
          ) : (
            <>
              <Button onClick={handleCancel} className="rounded-lg">
                Cancel
              </Button>
              <Button type="primary" onClick={handleSave} className="rounded-lg">
                Save Changes
              </Button>
            </>
          )}
        </div>
      </Form>
    </div>
  );
}
