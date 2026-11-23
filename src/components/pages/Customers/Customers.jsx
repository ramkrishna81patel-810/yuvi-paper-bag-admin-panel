
import React, { useState } from "react";
import {
  Box, Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, Chip, IconButton
} from "@mui/material";
import { Search, Visibility, Close } from "@mui/icons-material";
import "./Customers.css";

const customerData = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "Sharma Traders",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    country: "India",
    requests: 4,
    status: "Active",
  },
  {
    id: 2,
    name: "John Smith",
    company: "Global Packaging",
    email: "john@gmail.com",
    phone: "+1 9876543210",
    country: "USA",
    requests: 2,
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "Verma Enterprises",
    email: "amit@gmail.com",
    phone: "+91 9876543211",
    country: "India",
    requests: 1,
    status: "Inactive",
  },
];

function Customers() {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customerData.filter((customer) =>
    `${customer.name} ${customer.company} ${customer.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="customers-page">
      <div className="customers-heading">
        <div>
          <h2>Customers</h2>
          <p>Manage your website customers and their details.</p>
        </div>
        <span className="customer-count">
          Total Customers: {customerData.length}
        </span>
      </div>

      <div className="customers-card">
        <div className="customers-toolbar">
          <h3>All Customers</h3>
          <TextField
            size="small"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: "#888" }} />,
            }}
          />
        </div>

        <div className="customers-table-wrapper">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Requests</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="customer-name">{customer.name}</td>
                  <td>{customer.company}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.country}</td>
                  <td>{customer.requests}</td>
                  <td>
                    <Chip
                      label={customer.status}
                      size="small"
                      color={customer.status === "Active" ? "success" : "default"}
                    />
                  </td>
                  <td>
                    <IconButton
                      color="primary"
                      onClick={() => setSelectedCustomer(customer)}
                    >
                      <Visibility />
                    </IconButton>
                  </td>
                </tr>
              ))}
              {filteredCustomers.length === 0 && (
                <tr>
                  <td colSpan="8" className="customer-empty">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog
        open={Boolean(selectedCustomer)}
        onClose={() => setSelectedCustomer(null)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Customer Details
          <IconButton
            onClick={() => setSelectedCustomer(null)}
            sx={{ float: "right" }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedCustomer && (
            <Box className="customer-details">
              <p><strong>Name:</strong> {selectedCustomer.name}</p>
              <p><strong>Company:</strong> {selectedCustomer.company}</p>
              <p><strong>Email:</strong> {selectedCustomer.email}</p>
              <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
              <p><strong>Country:</strong> {selectedCustomer.country}</p>
              <p><strong>Total Requests:</strong> {selectedCustomer.requests}</p>
              <p><strong>Status:</strong> {selectedCustomer.status}</p>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedCustomer(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Customers;
