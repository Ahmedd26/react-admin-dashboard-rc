import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addChallenge.scss";
import ChallengeImage from "../../../assets/Challenges.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddChallenge = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [challengeTitle, setChallengeTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [challengeType, setChallengeType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Create an object with the form data
    const formData = {
      challengeTitle,
      clientName,
      challengeType,
      startDate,
      endDate,
      details,
      image: selectedImage,
    };

    // Send the form data to the JSON server
    axios
      .post("http://localhost:8000/challenges", formData)
      .then((response) => {
        console.log(response.data); // Optional: Handle the response
        navigate(-1); // Navigate back to the previous page
      })
      .catch((error) => {
        console.error(error); // Optional: Handle errors
      });

    // Clear form fields
    setChallengeTitle("");
    setClientName("");
    setChallengeType("");
    setStartDate("");
    setEndDate("");
    setDetails("");
  };

  return (
    <div className="newChallenge">
      <div className="title">
        <h1>Add Challenge</h1>
        <CalendarMonthIcon className="titleIcon" />
      </div>
      <div className="content">
        <div className="left">
          <img
            src={selectedImage || ChallengeImage}
            alt="ChallengeImage"
            width={256}
            height={256}
          />
          <h1>Challenge Image Preview</h1>
        </div>
        <form className="challengeForm" onSubmit={handleSubmit}>
          <div className="formItem">
            <label>Challenge Image</label>
            <div className="image">
              <label htmlFor="imageUpload">
                <AddPhotoAlternateIcon className="uploadIcon" />
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="Image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="formItem">
            <label>Challenge title</label>
            <input
              placeholder="Title"
              className="inputField"
              type="text"
              value={challengeTitle}
              onChange={(event) => setChallengeTitle(event.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label>Client</label>
            <input
              placeholder="Client's name"
              className="inputField"
              type="text"
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label>Type</label>
            <input
              placeholder="Challenge Type"
              className="inputField"
              type="text"
              value={challengeType}
              onChange={(event) => setChallengeType(event.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label>Start Date</label>
            <input
              placeholder="Challenge Starting Date"
              className="inputField dateInput"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label>End Date</label>
            <input
              placeholder="Challenge Due Date"
              className="inputField dateInput"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              required
            />
          </div>
          <div className="formItem">
            <label>Details</label>
            <textarea
              className="textArea inputField"
              placeholder="Challenge Description"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              required
            ></textarea>
          </div>
          <div className="formItem">
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChallenge;
