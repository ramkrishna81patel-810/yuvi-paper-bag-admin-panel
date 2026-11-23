import React from "react";
import {
  Inventory2,
  Description,
  Chat,
  CheckCircle,
  CalendarMonth,
  BarChart,
  Bolt,
  Visibility,
  ArrowForward,
} from "@mui/icons-material";
import "./Dashboard.css";

const stats = [
  {
    title: "Total Products",
    value: "24",
    icon: <Inventory2 />,
    color: "blue",
  },
  {
    title: "Total Quotes",
    value: "56",
    icon: <Description />,
    color: "green",
  },
  {
    title: "New Inquiries",
    value: "12",
    icon: <Chat />,
    color: "orange",
  },
  {
    title: "Pending Quotes",
    value: "08",
    icon: <CheckCircle />,
    color: "purple",
  },
];

const quotes = [
  {
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    product: "Paper Bag",
    quantity: "10,000 pcs",
    status: "New",
    date: "Nov 24, 2026",
  },
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    product: "Kraft Bag",
    quantity: "5,000 pcs",
    status: "Under Review",
    date: "Nov 23, 2026",
  },
  {
    name: "Amit Verma",
    email: "amit@example.com",
    product: "Shopping Bag",
    quantity: "20,000 pcs",
    status: "Quotation Sent",
    date: "Nov 22, 2026",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      <div className="dashboard-heading">
        <div>
          <h1>Welcome Back, Admin!</h1>
          <p>Here's what's happening with your Yuvi Paper Bag website.</p>
        </div>

        <div className="dashboard-date">
          <CalendarMonth />
          Today: Nov 24, 2026
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        {stats.map((item) => (
          <div className={`stat-card ${item.color}`} key={item.title}>
            <div className="stat-icon">{item.icon}</div>
            <div>
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overview and Quick Actions */}
      <div className="dashboard-middle">

        <div className="dashboard-panel overview-panel">
          <div className="panel-heading">
            <h3><BarChart /> Website Overview</h3>
            <select defaultValue="30">
              <option value="30">Last 30 Days</option>
              <option value="7">Last 7 Days</option>
              <option value="365">Last 12 Months</option>
            </select>
          </div>

          <div className="chart-legend">
            <span className="blue-dot">● Quote Requests</span>
            <span className="green-dot">● Contact Inquiries</span>
          </div>

          <div className="chart-placeholder">
            <div className="chart-y-labels">
              <span>40</span>
              <span>30</span>
              <span>20</span>
              <span>10</span>
              <span>0</span>
            </div>

            <svg viewBox="0 0 700 200" preserveAspectRatio="none">
              {[20, 60, 100, 140, 180].map((y) => (
                <line key={y} x1="0" y1={y} x2="700" y2={y} className="chart-grid-line" />
              ))}

              <polyline
                points="0,125 70,110 140,130 210,100 280,115 350,85 420,95 490,45 560,65 630,35 700,50"
                className="chart-blue-line"
              />

              <polyline
                points="0,165 70,180 140,155 210,160 280,145 350,160 420,130 490,145 560,120 630,135 700,110"
                className="chart-green-line"
              />
            </svg>
          </div>

          <div className="chart-x-labels">
            <span>Nov 01</span>
            <span>Nov 08</span>
            <span>Nov 15</span>
            <span>Nov 22</span>
          </div>
        </div>

        <div className="dashboard-panel quick-panel">
          <h3><Bolt /> Quick Actions</h3>

          <div className="quick-grid">
            <button className="quick-action blue">
              <Inventory2 />
              <span>Manage Products</span>
              <ArrowForward />
            </button>

            <button className="quick-action green">
              <Description />
              <span>View Quotes</span>
              <ArrowForward />
            </button>

            <button className="quick-action orange">
              <Chat />
              <span>View Inquiries</span>
              <ArrowForward />
            </button>

            <button className="quick-action purple">
              <CheckCircle />
              <span>Website Settings</span>
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Quotes */}
      <div className="dashboard-panel recent-panel">
        <div className="panel-heading">
          <h3><Description /> Recent Quote Requests</h3>
          <button className="view-all-btn">View All <ArrowForward /></button>
        </div>

        <div className="table-responsive">
          <table className="quotes-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {quotes.map((quote, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{quote.name}</td>
                  <td>{quote.email}</td>
                  <td>{quote.product}</td>
                  <td>{quote.quantity}</td>
                  <td>
                    <span className={`status-badge ${quote.status.toLowerCase().replaceAll(" ", "-")}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td>{quote.date}</td>
                  <td>
                    <button className="view-btn" aria-label="View quote">
                      <Visibility />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;