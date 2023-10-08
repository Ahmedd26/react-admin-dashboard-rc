import React, { useState } from "react";
import "./addLicense.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLicense = () => {
  const navigate = useNavigate();

  const [features, setFeatures] = useState([{ id: 1, value: "" }]);

  const addFeature = () => {
    const newFeatureId =
      features.length > 0 ? features[features.length - 1].id + 1 : 1;
    setFeatures([...features, { id: newFeatureId, value: "" }]);
  };

  const handleFeatureChange = (id, value) => {
    const updatedFeatures = features.map((feature) =>
      feature.id === id ? { ...feature, value } : feature
    );
    setFeatures(updatedFeatures);
  };

  const deleteFeature = (id) => {
    if (features.length > 1) {
      const updatedFeatures = features.filter((feature) => feature.id !== id);
      setFeatures(updatedFeatures);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new license object
    const newLicense = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      features: features.map((feature) => feature.value),
      price: e.target.elements.price.value,
      files_to_deliver: e.target.elements.filesToDeliver.value,
    };

    try {
      // Send a POST request to create a new license
      const response = await axios.post(
        "http://localhost:8000/licenses",
        newLicense
      );

      if (response.status === 201) {
        // Redirect to ViewLicenses on successful submission
        navigate("/licenses");
      } else {
        // Handle error if request fails
        console.error("Failed to create a new license.");
      }
    } catch (error) {
      console.error("An error occurred while creating a new license.", error);
    }
  };

  return (
    <div className="addLicense">
      <div className="title">
        <h1>Add New License</h1>
        <AddCircleOutlineIcon className="titleIcon" />
      </div>
      <form onSubmit={handleSubmit}>
        {/* License Title */}
        <div className="formItem">
          <label>Title</label>
          <input type="text" name="title" placeholder="License Title" />
        </div>

        {/* License Description */}
        <div className="formItem">
          <label>Description</label>
          <textarea
            className="descriptionTextarea"
            name="description"
            // placeholder="License Description"
          ></textarea>
        </div>

        {/* License Features */}
        {features.map((feature, index) => (
          <div className="formItem" key={feature.id}>
            <label>Feature {index + 1}</label>
            <input
              type="text"
              placeholder="Feature"
              value={feature.value}
              onChange={(e) => handleFeatureChange(feature.id, e.target.value)}
            />
            <div className="actionBtn">
              <div className="addIcon" onClick={addFeature}>
                <AddCircleOutlineIcon />
              </div>
              <div
                className={`deleteIcon ${feature.id === 1 ? "disabled" : ""}`}
                onClick={() => deleteFeature(feature.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}

        {/* License Price */}
        <div className="formItem">
          <label>Price</label>
          <input type="text" name="price" placeholder="Price" />
        </div>

        {/* Files to Deliver */}
        <div className="formItem">
          <label>Files to Deliver</label>
          <input
            type="text"
            name="filesToDeliver"
            placeholder="Files to Deliver"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddLicense;
