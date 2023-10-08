import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./editLicense.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const EditLicense = () => {
  const { licenseId } = useParams();
  const navigate = useNavigate();

  const [license, setLicense] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [filesToDeliver, setFilesToDeliver] = useState("");

  useEffect(() => {
    const fetchLicense = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/licenses/${licenseId}`
        );
        if (response.status === 200) {
          const licenseData = response.data;
          setLicense(licenseData);
          setTitle(licenseData.title);
          setDescription(licenseData.description);
          setFeatures(licenseData.features);
          setPrice(licenseData.price);
          setFilesToDeliver(licenseData.files_to_deliver);
        } else {
          console.error("Failed to fetch license data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching license data.", error);
      }
    };

    fetchLicense();
  }, [licenseId]);

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const deleteFeature = (index) => {
    if (features.length > 1) {
      const updatedFeatures = [...features];
      updatedFeatures.splice(index, 1);
      setFeatures(updatedFeatures);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedLicense = {
      ...license,
      title,
      description,
      features,
      price,
      files_to_deliver: filesToDeliver,
    };

    try {
      const response = await axios.put(
        `http://localhost:8000/licenses/${licenseId}`,
        updatedLicense
      );
      if (response.status === 200) {
        navigate("/licenses");
      } else {
        console.error("Failed to update the license.");
      }
    } catch (error) {
      console.error("An error occurred while updating the license.", error);
    }
  };

  if (!license) {
    return <div>Loading...</div>;
  }

  return (
    <div className="editLicense">
      <div>
        <div className="title">
          <h1>Edit License {licenseId}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="License Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* <div className="formItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="License Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div> */}
          <div className="formItem">
            <label>Description</label>
            <textarea
              className="descriptionTextarea"
              placeholder="License Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {features.map((feature, index) => (
            <div className="formItem" key={index}>
              <label>Feature {index + 1}</label>
              <input
                type="text"
                placeholder="Feature"
                value={feature}
                onChange={(e) => {
                  const updatedFeatures = [...features];
                  updatedFeatures[index] = e.target.value;
                  setFeatures(updatedFeatures);
                }}
              />
              <div className="actionBtn">
                <div
                  className={`deleteIcon ${
                    features.length === 1 ? "disabled" : ""
                  }`}
                  onClick={() => deleteFeature(index)}
                >
                  <DeleteIcon />
                </div>

                <div className="addIcon" onClick={addFeature}>
                  <AddCircleOutlineIcon />
                </div>
              </div>
            </div>
          ))}

          <div className="formItem">
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="formItem">
            <label>Files to Deliver</label>
            <input
              type="text"
              placeholder="Files to Deliver"
              value={filesToDeliver}
              onChange={(e) => setFilesToDeliver(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditLicense;
