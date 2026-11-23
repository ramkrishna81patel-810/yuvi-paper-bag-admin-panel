import React, { useState } from "react";
import { Search, Visibility, Mail } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./Inquiries.css";

const initialInquiries = [
  {
    id: 1,
    name: "Rahul Mehta",
    email: "rahul@example.com",
    phone: "9876543210",
    subject: "Product Information",
    message: "I want to know more about your kraft paper bags.",
    date: "24 Nov 2026",
    status: "New",
  },
  {
    id: 2,
    name: "Neha Singh",
    email: "neha@example.com",
    phone: "9876543211",
    subject: "Bulk Order",
    message: "Please share your bulk order details and pricing.",
    date: "23 Nov 2026",
    status: "Read",
  },
  {
    id: 3,
    name: "Vikas Jain",
    email: "vikas@example.com",
    phone: "9876543212",
    subject: "General Inquiry",
    message: "Do you provide customized printing?",
    date: "22 Nov 2026",
    status: "New",
  },
];

const Inquiries = () => {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const openInquiry = (item) => {
    setSelected(item);
    setInquiries(inquiries.map((q) =>
      q.id === item.id ? { ...q, status: "Read" } : q
    ));
  };

  const filteredInquiries = inquiries.filter((q) =>
    `${q.name} ${q.email} ${q.subject}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">

      <div className="page-heading">
        <div>
          <h1>Contact Inquiries</h1>
          <p>View and manage messages from your website visitors.</p>
        </div>
      </div>

      <div className="inquiry-summary-grid">
        <div><h2>{inquiries.length}</h2><p>Total Messages</p></div>
        <div><h2>{inquiries.filter(q => q.status === "New").length}</h2><p>New Messages</p></div>
        <div><h2>{inquiries.filter(q => q.status === "Read").length}</h2><p>Read Messages</p></div>
      </div>

      <div className="admin-table-panel">
        <div className="table-toolbar">
          <h3>All Contact Messages</h3>
          <div className="admin-search">
            <Search />
            <input
              placeholder="Search inquiries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="admin-table-responsive">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredInquiries.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="table-primary-text">{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`inquiry-status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="inquiry-view-btn" onClick={() => openInquiry(item)}>
                      <Visibility />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredInquiries.length === 0 && (
                <tr><td colSpan="7" className="empty-row">No inquiries found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} fullWidth maxWidth="sm">
        {selected && (
          <>
            <DialogTitle>
              <Mail /> Contact Message
            </DialogTitle>
            <DialogContent dividers>
              <div className="inquiry-details">
                <p><strong>Name:</strong> {selected.name}</p>
                <p><strong>Email:</strong> {selected.email}</p>
                <p><strong>Phone:</strong> {selected.phone}</p>
                <p><strong>Subject:</strong> {selected.subject}</p>
                <p><strong>Date:</strong> {selected.date}</p>
                <div className="inquiry-message">
                  <strong>Message</strong>
                  <p>{selected.message}</p>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelected(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </div>
  );
};

export default Inquiries;