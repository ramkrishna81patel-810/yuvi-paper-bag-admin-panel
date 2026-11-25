
import React, { useState } from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";

import {
  EmailOutlined,
  LockOutlined,
  PhoneOutlined,
  Visibility,
  VisibilityOff,
  ShoppingBagOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import './auth.css'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Signup Data:", {
      name,
      email,
      phone,
      password,
    });

    alert("Signup form validated successfully!");
  };

  return (
    <Box className="auth-page">
      <Box className="auth-wrapper">

        {/* Left Image Section */}
        <Box className="auth-image-section">
          <Box className="auth-image-overlay">

            <Box className="auth-logo">
              <ShoppingBagOutlined />

              <Typography variant="h5">
                YUVI PAPER BAG
              </Typography>
            </Box>

            <Box className="auth-image-content">
              <Typography variant="h3">
                Create Your
                <br />
                Business Account.
              </Typography>

              <Typography>
                Join Yuvi Paper Bag and manage your
                products, quotations and business
                inquiries from one place.
              </Typography>

              <Box className="auth-image-tagline">
                PACK <span>•</span> PRINT <span>•</span> PROMOTE
              </Box>
            </Box>

            <Typography className="auth-image-copyright">
              © 2026 Yuvi Paper Bag. All rights reserved.
            </Typography>

          </Box>
        </Box>

        {/* Right Signup Section */}
        <Box className="auth-form-section">
          <Box className="auth-form-container signup-container">

            <Box className="auth-mobile-logo">
              <ShoppingBagOutlined />
              <Typography variant="h6">
                YUVI PAPER BAG
              </Typography>
            </Box>

            <Box className="auth-heading">
              <Typography variant="h4">
                Create Account
              </Typography>

              <Typography>
                Enter your details to create your account.
              </Typography>
            </Box>

            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              className="auth-form"
            >

              {/* Name */}
              <Box className="auth-field">
                <Typography className="auth-label">
                  Full Name
                </Typography>

                <TextField
                  fullWidth
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <PersonOutline /> */}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Email */}
              <Box className="auth-field">
                <Typography className="auth-label">
                  Email Address
                </Typography>

                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Phone */}
              <Box className="auth-field">
                <Typography className="auth-label">
                  Mobile Number
                </Typography>

                <TextField
                  fullWidth
                  name="phone"
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  inputProps={{
                    maxLength: 10,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Password */}
              <Box className="auth-field">
                <Typography className="auth-label">
                  Password
                </Typography>

                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPassword(!showPassword)
                          }
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Confirm Password */}
              <Box className="auth-field">
                <Typography className="auth-label">
                  Confirm Password
                </Typography>

                <TextField
                  fullWidth
                  name="confirmPassword"
                  type={
                    showConfirmPassword ? "text" : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlined />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="auth-submit"
              >
                Create Account
              </Button>

            </Box>

            <Typography className="auth-switch">
              Already have an account?
              <Link to="/login" className="auth-link">
                Login
              </Link>
            </Typography>

          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Signup;
