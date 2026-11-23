
import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Avatar,
} from "@mui/material";

import {
  NotificationsNone,
  SaveOutlined,
  EmailOutlined,
  FormatQuoteOutlined,
  MarkEmailUnreadOutlined,
} from "@mui/icons-material";

import "./Settings.css";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@yuvipaperbag.com",
    phone: "+91 9876543210",
    company: "Yuvi Paper Bag",
  });

  const [notifications, setNotifications] = useState({
    quotes: true,
    inquiries: true,
    email: false,
  });

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field, value) => {
    setNotifications((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert("Settings saved in this demo.");
  };

  return (
    <div className="settings-page">

      {/* Page Heading */}
      <div className="settings-heading">
        <div>
          <h2>Settings</h2>
          <p>Manage your account information and preferences.</p>
        </div>
      </div>

      <div className="settings-layout">

        {/* Profile Settings */}
        <section className="settings-card">

          <div className="settings-card-heading">
            <div className="settings-heading-icon">
              {/* <PersonOutline /> */}
            </div>

            <div>
              <h3>Profile Settings</h3>
              <p>Manage your administrator account details.</p>
            </div>
          </div>

          {/* Profile Header */}
          <div className="settings-profile-header">
            <Avatar className="settings-avatar">
              {profile.name.charAt(0).toUpperCase()}
            </Avatar>

            <div>
              <h4>{profile.name}</h4>
              <span>Administrator Account</span>
            </div>
          </div>

          {/* Profile Form */}
          <div className="settings-form">

            <div className="settings-field">
              <label>Admin Name</label>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter admin name"
                value={profile.name}
                onChange={(e) =>
                  handleProfileChange("name", e.target.value)
                }
              />
            </div>

            <div className="settings-field">
              <label>Email Address</label>
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder="Enter email address"
                value={profile.email}
                onChange={(e) =>
                  handleProfileChange("email", e.target.value)
                }
              />
            </div>

            <div className="settings-field">
              <label>Phone Number</label>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter phone number"
                value={profile.phone}
                onChange={(e) =>
                  handleProfileChange("phone", e.target.value)
                }
              />
            </div>

            <div className="settings-field">
              <label>Company Name</label>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter company name"
                value={profile.company}
                onChange={(e) =>
                  handleProfileChange("company", e.target.value)
                }
              />
            </div>

            <div className="settings-actions">
              <Button
                variant="contained"
                startIcon={<SaveOutlined />}
                onClick={handleSave}
              >
                Save Profile
              </Button>
            </div>

          </div>
        </section>

        {/* Notification Settings */}
        <section className="settings-card">

          <div className="settings-card-heading">
            <div className="settings-heading-icon notification-icon">
              <NotificationsNone />
            </div>

            <div>
              <h3>Notification Settings</h3>
              <p>Choose which updates you want to receive.</p>
            </div>
          </div>

          <div className="notification-list">

            <div className="notification-item">
              <div className="notification-item-icon">
                <FormatQuoteOutlined />
              </div>

              <div className="notification-item-content">
                <h4>New Quote Requests</h4>
                <p>Get notified when customers request a quotation.</p>
              </div>

              <Switch
                checked={notifications.quotes}
                onChange={(e) =>
                  handleNotificationChange("quotes", e.target.checked)
                }
              />
            </div>

            <div className="notification-item">
              <div className="notification-item-icon">
                <EmailOutlined />
              </div>

              <div className="notification-item-content">
                <h4>Contact Inquiries</h4>
                <p>Receive updates about new customer inquiries.</p>
              </div>

              <Switch
                checked={notifications.inquiries}
                onChange={(e) =>
                  handleNotificationChange("inquiries", e.target.checked)
                }
              />
            </div>

            <div className="notification-item">
              <div className="notification-item-icon">
                <MarkEmailUnreadOutlined />
              </div>

              <div className="notification-item-content">
                <h4>Email Notifications</h4>
                <p>Receive admin updates through your email.</p>
              </div>

              <Switch
                checked={notifications.email}
                onChange={(e) =>
                  handleNotificationChange("email", e.target.checked)
                }
              />
            </div>

          </div>

          <div className="settings-actions notification-save">
            <Button
              variant="contained"
              startIcon={<SaveOutlined />}
              onClick={handleSave}
            >
              Save Preferences
            </Button>
          </div>

        </section>

      </div>
    </div>
  );
}

export default Settings;
