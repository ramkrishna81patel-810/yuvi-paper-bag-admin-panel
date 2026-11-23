
import React, { useState } from "react";
import {
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, IconButton
} from "@mui/material";
import { Edit, Close } from "@mui/icons-material";
import "./WebsiteContent.css";

const initialSections = [
  {
    id: 1,
    title: "Hero Banner",
    description: "Welcome to Yuvi Paper Bag. Quality packaging solutions for your business.",
    image: "",
  },
  {
    id: 2,
    title: "About Us",
    description: "Learn more about our company and packaging solutions.",
    image: "",
  },
  {
    id: 3,
    title: "Quality Section",
    description: "Our focus is on quality, consistency and customer satisfaction.",
    image: "",
  },
  {
    id: 4,
    title: "Manufacturing Process",
    description: "Explore our paper bag manufacturing process.",
    image: "",
  },
  {
    id: 5,
    title: "Customization",
    description: "Customized paper bags according to your requirements.",
    image: "",
  },
  {
    id: 6,
    title: "Industries",
    description: "Packaging solutions for different industries.",
    image: "",
  },
  {
    id: 7,
    title: "Sustainability",
    description: "Discover our approach to responsible packaging.",
    image: "",
  },
  {
    id: 8,
    title: "FAQ",
    description: "Frequently asked questions about our products and services.",
    image: "",
  },
  {
    id: 9,
    title: "Contact Section",
    description: "Get in touch with our team for business inquiries.",
    image: "",
  },
];

function WebsiteContent() {
  const [sections, setSections] = useState(initialSections);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleChange = (field, value) => {
    setSelectedSection((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === selectedSection.id ? selectedSection : section
      )
    );
    setSelectedSection(null);
  };

  return (
    <div className="website-content-page">
      <div className="website-content-heading">
        <div>
          <h2>Website Content</h2>
          <p>Manage the content displayed on your website.</p>
        </div>
      </div>

      <div className="website-content-grid">
        {sections.map((section) => (
          <div className="website-content-card" key={section.id}>
            <div className="website-content-card-top">
              <span className="website-content-label">HOMEPAGE SECTION</span>
              <IconButton
                color="primary"
                onClick={() => setSelectedSection({ ...section })}
              >
                <Edit />
              </IconButton>
            </div>

            <h3>{section.title}</h3>
            <p>{section.description}</p>

            <Button
              variant="outlined"
              size="small"
              startIcon={<Edit />}
              onClick={() => setSelectedSection({ ...section })}
            >
              Edit Content
            </Button>
          </div>
        ))}
      </div>

      <Dialog
        open={Boolean(selectedSection)}
        onClose={() => setSelectedSection(null)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Edit Website Section
          <IconButton
            onClick={() => setSelectedSection(null)}
            sx={{ float: "right" }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {selectedSection && (
            <div className="website-content-form">
              <TextField
                fullWidth
                label="Section Name"
                value={selectedSection.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              <TextField
                fullWidth
                multiline
                minRows={4}
                label="Description"
                value={selectedSection.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
              <TextField
                fullWidth
                label="Image URL"
                placeholder="https://example.com/image.jpg"
                value={selectedSection.image}
                onChange={(e) => handleChange("image", e.target.value)}
              />
            </div>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setSelectedSection(null)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WebsiteContent;
