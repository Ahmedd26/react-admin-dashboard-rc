import React, { useState } from "react";
import "./addAnnouncement.scss";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HideImageIcon from "@mui/icons-material/HideImage";

const AddAnnouncement = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const announcementData = {
        title,
        body,
        image: selectedImage,
      };

      // Send the data to the server
      await axios.post("http://localhost:8000/announcements", announcementData);

      // Navigate to the previous page
      navigate(-1);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  return (
    <div className="addAnnouncement">
      <div className="title">
        <h1>Add New Announcement</h1>
        <AddAlertIcon className="titleIcon" />
      </div>
      <div className="container">
        <div className="left">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="AnnouncementImage"
              width={224}
              height={224}
            />
          ) : (
            <div className="imagePlaceholder">
              <HideImageIcon className="notFound" />
              <p className="placeholderText">No Image Provided</p>
            </div>
          )}
        </div>
        <div className="right">
          <form className="announcementForm" onSubmit={handleSubmit}>
            <div className="formItem">
              <label>Title</label>
              <input
                type="text"
                placeholder="Announcement Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Details</label>
              <input
                type="text"
                placeholder="Announcement Details"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="formItem buttons">
              <div className="imageIcon">
                <label htmlFor="image">
                  <AddPhotoAlternateIcon className="icon" />
                  Upload an image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  onChange={handleImageUpload}
                />
              </div>
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement;
