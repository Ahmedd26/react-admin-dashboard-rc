import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./editChallenge.scss";
import ChallengeImage from "../../../assets/Challenges.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const EditChallenge = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [challengeTitle, setChallengeTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [challengeType, setChallengeType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();
  const { challengeId } = useParams();

  useEffect(() => {
    console.log("challengeId:", challengeId); // Check the value of challengeId

    const fetchChallenge = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/challenges/${challengeId}`
        );
        const challenge = response.data;
        if (challenge) {
          setChallengeTitle(challenge.challengeTitle);
          setClientName(challenge.clientName);
          setChallengeType(challenge.challengeType);
          setStartDate(challenge.startDate);
          setEndDate(challenge.endDate);
          setDetails(challenge.details);
          setSelectedImage(challenge.image); // Assuming the challenge object has an "image" property
        }
      } catch (error) {
        console.error("Failed to fetch challenge data:", error);
      }
    };

    fetchChallenge();
  }, [challengeId]);

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

    // Create an object with the updated challenge data
    const updatedChallenge = {
      challengeTitle,
      clientName,
      challengeType,
      startDate,
      endDate,
      details,
      image: selectedImage, // Add the selectedImage property
    };

    // Send the updated challenge data to the server
    axios
      .put(`http://localhost:8000/challenges/${challengeId}`, updatedChallenge)
      .then((response) => {
        console.log(response.data); // Optional: Handle the response
        navigate(-1); // Navigate back to the previous page
      })
      .catch((error) => {
        console.error("Failed to update challenge:", error); // Optional: Handle errors
      });
  };

  return (
    <div className="editChallenge">
      <div className="title">
        <h1>Edit Challenge</h1>
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
          {/* Challenge Image */}
          <div className="formItem">
            <label>Challenge Image</label>
            <div className="image">
              <label htmlFor="imageUpload">
                <AddPhotoAlternateIcon className="uploadIcon" />
              </label>
              <input
                className="inputField"
                id="imageUpload"
                type="file"
                accept="Image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {/* Challenge Title */}
          <div className="formItem">
            <label>Challenge Title</label>
            <input
              className="inputField"
              type="text"
              value={challengeTitle}
              onChange={(event) => setChallengeTitle(event.target.value)}
              required
            />
          </div>

          {/* Client Name */}
          <div className="formItem">
            <label>Client Name</label>
            <input
              className="inputField"
              type="text"
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              required
            />
          </div>

          {/* Challenge Type */}
          <div className="formItem">
            <label>Challenge Type</label>
            <input
              className="inputField"
              type="text"
              value={challengeType}
              onChange={(event) => setChallengeType(event.target.value)}
              required
            />
          </div>

          {/* Start Date */}
          <div className="formItem">
            <label>Start Date</label>
            <input
              className="inputField"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              required
            />
          </div>

          {/* End Date */}
          <div className="formItem">
            <label>End Date</label>
            <input
              className="inputField"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              required
            />
          </div>

          {/* Details */}
          <div className="formItem">
            <label>Details</label>
            <textarea
              className="textArea inputField"
              placeholder="Challenge Description"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
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

export default EditChallenge;
