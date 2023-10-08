import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewAnnouncements.scss";
import CampaignIcon from "@mui/icons-material/Campaign";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import DeleteIcon from "@mui/icons-material/Delete";
import HideImageIcon from "@mui/icons-material/HideImage";
import { Link } from "react-router-dom";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
const ViewAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:8000/announcements");
      setAnnouncements(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const LoadingIndicator = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDots((prevDots) => (prevDots.length >= 3 ? "" : prevDots + "."));
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return <div className="text">Loading{dots}</div>;
  };

  const handleDeleteAnnouncement = async (announcementId) => {
    try {
      await axios.delete(
        `http://localhost:8000/announcements/${announcementId}`
      );
      fetchAnnouncements();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <span class="loader"></span>
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    // return <div>Error: {error.message}</div>; // Display an error message if fetching fails
    return (
      <div className="errorContainer">
        <ErrorOutlineOutlinedIcon className="errorIcon" />
        <h1>Please try again later</h1>
        <h2>Error occurred while fetching the data</h2>
        <Link to="/" className="navToHome">
          <HomeOutlinedIcon className="homeIcon" />
          <span>Back to Home page?</span>
        </Link>
      </div>
    );
  }
  return (
    <div className="announcementContainer">
      <div className="titles">
        <div className="left">
          <h1>Announcements</h1>
          <CampaignIcon className="titleIcon" />
        </div>

        <Link to="add-announcement" className="right">
          <h1>Add New</h1>
          <AddAlertIcon className="titleIcon" />
        </Link>
      </div>
      <div className="viewAnnouncements">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement">
            <div className="content">
              {announcement.image ? (
                <img src={announcement.image} alt="AnnouncementImage" />
              ) : (
                <div className="imagePlaceholder">
                  <HideImageIcon className="notFound" />
                  <p className="placeholderText">No Image Provided</p>
                </div>
              )}
              <div className="text">
                <h1 className="title">{announcement.title}</h1>
                <p className="body">{announcement.body}</p>
              </div>
            </div>
            <button
              className="deleteBtn"
              onClick={() => handleDeleteAnnouncement(announcement.id)}
            >
              <DeleteIcon className="deleteIcon" />
              <span className="btnTxt">Delete Announcement</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAnnouncements;
