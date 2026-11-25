
import React, { useState } from "react";

import {
    Box,
    Button,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Checkbox,
    FormControlLabel,
    Alert,
} from "@mui/material";

import {
    EmailOutlined,
    LockOutlined,
    Visibility,
    VisibilityOff,
    ShoppingBagOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import "./auth.css";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        if (!formData.email || !formData.password) {
            setError("Please fill in all required fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        console.log("Login Data:", {
            ...formData,
            rememberMe,
        });

        alert("Login form validated successfully!");
    };

    return (
        <Box className="auth-page">
            <Box className="auth-wrapper">

                {/* Left Image Section */}
                <Box className="auth-image-section">
                    <img
                         src="/assest/images/Login-Paper-bag.jpg"
                        alt="Yuvi Paper Bag Banner"
                        className="auth-banner-image"
                    />

                   
                </Box>

                {/* Right Login Section */}
                <Box className="auth-form-section">
                    <Box className="auth-form-container">

                        <Box className="auth-mobile-logo">
                            <ShoppingBagOutlined />
                            <Typography variant="h6">
                                YUVI PAPER BAG
                            </Typography>
                        </Box>

                        <Box className="auth-heading">
                            <Typography variant="h4">
                                Welcome Back!
                            </Typography>

                            <Typography>
                                Login to access your account and manage
                                your business.
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

                            {/* Password */}
                            <Box className="auth-field">
                                <Typography className="auth-label">
                                    Password
                                </Typography>

                                <TextField
                                    fullWidth
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
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

                            {/* Remember and Forgot */}
                            <Box className="auth-options">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) =>
                                                setRememberMe(e.target.checked)
                                            }
                                        />
                                    }
                                    label="Remember me"
                                />

                                <Link
                                    to="/forgot-password"
                                    className="auth-link"
                                >
                                    Forgot Password?
                                </Link>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="auth-submit"
                            >
                                Login to Account
                            </Button>

                        </Box>

                        <Typography className="auth-switch">
                            Don't have an account?
                            <Link to="/signup" className="auth-link">
                                Create Account
                            </Link>
                        </Typography>

                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default Login;
