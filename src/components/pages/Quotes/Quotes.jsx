import React, { useState } from "react";
import { Search, Visibility, Description } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./Quotes.css";

const initialQuotes = [
  { id: 1, name: "Rajesh Kumar", email: "rajesh@example.com", phone: "9876543210", product: "Kraft Paper Bag", quantity: "10000 pcs", date: "24 Nov 2026", status: "New", message: "Need customized kraft bags." },
  { id: 2, name: "Priya Sharma", email: "priya@example.com", phone: "9876543211", product: "Shopping Bag", quantity: "5000 pcs", date: "23 Nov 2026", status: "Under Review", message: "Need printed shopping bags." },
  { id: 3, name: "Amit Verma", email: "amit@example.com", phone: "9876543212", product: "Handle Paper Bag", quantity: "20000 pcs", date: "22 Nov 2026", status: "Quotation Sent", message: "Please share bulk pricing." },
];

const Quotes = () => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [search, setSearch] = useState("");
  const [selectedQuote, setSelectedQuote] = useState(null);

  const updateStatus = (id, status) => {
    setQuotes(quotes.map((q) => q.id === id ? { ...q, status } : q));
  };

  const filteredQuotes = quotes.filter((q) =>
    `${q.name} ${q.email} ${q.product}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">

      <div className="page-heading">
        <div>
          <h1>Quote Requests</h1>
          <p>Manage customer quotation requests.</p>
        </div>
      </div>

      <div className="quote-summary-grid">
        <div><h2>{quotes.length}</h2><p>Total Requests</p></div>
        <div><h2>{quotes.filter(q => q.status === "New").length}</h2><p>New Requests</p></div>
        <div><h2>{quotes.filter(q => q.status === "Under Review").length}</h2><p>Under Review</p></div>
        <div><h2>{quotes.filter(q => q.status === "Quotation Sent").length}</h2><p>Quotation Sent</p></div>
      </div>

      <div className="admin-table-panel">
        <div className="table-toolbar">
          <h3>All Quote Requests</h3>
          <div className="admin-search">
            <Search />
            <input
              placeholder="Search customer..."
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
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredQuotes.map((q, index) => (
                <tr key={q.id}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{q.name}</strong><br />
                    <small>{q.email}</small>
                  </td>
                  <td>{q.product}</td>
                  <td>{q.quantity}</td>
                  <td>{q.date}</td>
                  <td>
                    <select
                      className="quote-status-select"
                      value={q.status}
                      onChange={(e) => updateStatus(q.id, e.target.value)}
                    >
                      <option>New</option>
                      <option>Under Review</option>
                      <option>Contacted</option>
                      <option>Quotation Sent</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                  <td>
                    <button className="quote-view-btn" onClick={() => setSelectedQuote(q)}>
                      <Visibility />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredQuotes.length === 0 && (
                <tr><td colSpan="7" className="empty-row">No quote requests found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={Boolean(selectedQuote)} onClose={() => setSelectedQuote(null)} fullWidth maxWidth="sm">
        {selectedQuote && (
          <>
            <DialogTitle>
              <Description /> Quote Request Details
            </DialogTitle>
            <DialogContent dividers>
              <div className="quote-details">
                <p><strong>Customer:</strong> {selectedQuote.name}</p>
                <p><strong>Email:</strong> {selectedQuote.email}</p>
                <p><strong>Phone:</strong> {selectedQuote.phone}</p>
                <p><strong>Product:</strong> {selectedQuote.product}</p>
                <p><strong>Quantity:</strong> {selectedQuote.quantity}</p>
                <p><strong>Date:</strong> {selectedQuote.date}</p>
                <p><strong>Message:</strong> {selectedQuote.message}</p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedQuote(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </div>
  );
};

export default Quotes;