import React, { useState } from "react";
import {
  Add,
  Search,
  Edit,
  Delete,
  Inventory2,
  Close,
} from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import "./Products.css";

const initialProducts = [
  { id: 1, name: "Kraft Paper Bag", category: "Kraft Bags", size: "Medium", price: "₹5", status: "Active" },
  { id: 2, name: "Shopping Paper Bag", category: "Shopping Bags", size: "Large", price: "₹8", status: "Active" },
  { id: 3, name: "Flat Handle Paper Bag", category: "Handle Bags", size: "Small", price: "₹4", status: "Active" },
  { id: 4, name: "Twisted Handle Bag", category: "Handle Bags", size: "Medium", price: "₹7", status: "Inactive" },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    size: "",
    price: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name.trim()) return;

    if (editId) {
      setProducts(products.map((p) =>
        p.id === editId ? { ...form, id: editId } : p
      ));
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }

    handleClose();
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      size: product.size,
      price: product.price,
      status: product.status,
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleClose = () => {
    setOpen(false);
    setEditId(null);
    setForm({ name: "", category: "", size: "", price: "", status: "Active" });
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page products-page">

      <div className="page-heading">
        <div>
          <h1>Products</h1>
          <p>Manage your Yuvi Paper Bag products.</p>
        </div>

        <button className="primary-btn" onClick={() => setOpen(true)}>
          <Add /> Add Product
        </button>
      </div>

      <div className="page-summary">
        <div className="summary-card">
          <Inventory2 />
          <div>
            <h2>{products.length}</h2>
            <p>Total Products</p>
          </div>
        </div>
      </div>

      <div className="admin-table-panel">
        <div className="table-toolbar">
          <h3>All Products</h3>
          <div className="admin-search">
            <Search />
            <input
              placeholder="Search products..."
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
                <th>Product Name</th>
                <th>Category</th>
                <th>Size</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td className="table-primary-text">{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.size}</td>
                  <td>{product.price}</td>
                  <td>
                    <span className={`table-status ${product.status.toLowerCase()}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="edit-action" onClick={() => handleEdit(product)}>
                        <Edit />
                      </button>
                      <button className="delete-action" onClick={() => handleDelete(product.id)}>
                        <Delete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="7" className="empty-row">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {editId ? "Edit Product" : "Add New Product"}
          <button className="dialog-close" onClick={handleClose}><Close /></button>
        </DialogTitle>

        <DialogContent>
          <div className="product-form">
            <TextField fullWidth label="Product Name" name="name" value={form.name} onChange={handleChange} />
            <TextField fullWidth label="Category" name="category" value={form.category} onChange={handleChange} />
            <TextField fullWidth label="Size" name="size" value={form.size} onChange={handleChange} />
            <TextField fullWidth label="Price" name="price" value={form.price} onChange={handleChange} />
            <TextField select fullWidth label="Status" name="status" value={form.status} onChange={handleChange} SelectProps={{ native: true }}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </TextField>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editId ? "Update Product" : "Save Product"}
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default Products;