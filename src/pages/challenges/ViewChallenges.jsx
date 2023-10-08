import React, { useState, useEffect } from "react";
import "./viewChallenges.scss";
import ChallengeImage from "../../assets/Challenges.jpg";
import { Link } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";
const ViewChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(false); // New error state
  useEffect(() => {
    // Fetch challenges data from the JSON server
    axios
      .get("http://localhost:8000/challenges")
      .then((response) => {
        setChallenges(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setError(true); // Set error to true in case of error
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const handleDelete = (challengeId) => {
    // Send DELETE request to the JSON server
    axios
      .delete(`http://localhost:8000/challenges/${challengeId}`)
      .then((response) => {
        // Remove the deleted challenge from the state
        setChallenges(
          challenges.filter((challenge) => challenge.id !== challengeId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading) {
    // Render loading spinner while loading is true
    return (
      <div className="loadingContainer">
        <span className="loader"></span>
        <div className="text">Loading</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="errorContainer">
        <ErrorOutlineIcon className="errorIcon" />
        <div className="text">Error fetching data</div>
        <Link to="/" className="homeLink">
          Back to Home page?
        </Link>
      </div>
    );
  }
  return (
    <div className="viewChallenges">
      <div className="title">
        <div className="left">
          <h1>Challenges</h1>
          <EventIcon className="titleIcon" />
        </div>
        <Link to="add-challenge" className="right">
          <h1>Add New Challenge</h1>
          <CalendarMonthIcon className="titleIcon" />
        </Link>
      </div>
      <div className="challenges">
        {challenges.map((challenge) => (
          <div className="challenge" key={challenge.id}>
            <div className="content">
              <div className="left">
                {challenge.image ? (
                  <img
                    src={challenge.image}
                    alt="ChallengeImage"
                    width={256}
                    height={256}
                  />
                ) : (
                  <img
                    src={ChallengeImage}
                    alt="Default ChallengeImage"
                    width={256}
                    height={256}
                  />
                )}
                <Link
                  to={`/challenge/edit-challenge/${challenge.id}`}
                  className="btn"
                >
                  <EditCalendarIcon className="btnIcon" />
                  <span>Edit Challenge</span>
                </Link>
                <div className="btn" onClick={() => handleDelete(challenge.id)}>
                  <EventBusyIcon className="btnIcon" />
                  <span>Delete Challenge</span>
                </div>
              </div>
              <div className="text">
                <h1>{challenge.challengeTitle}</h1>
                <div className="items">
                  <span className="item">Client:</span>
                  <span className="info">{challenge.clientName}</span>
                </div>
                <div className="items">
                  <span className="item">Challenge Type:</span>
                  <span className="info">{challenge.challengeType}</span>
                </div>
                <div className="items">
                  <span className="item">Start date:</span>
                  <span className="info">{challenge.startDate}</span>
                </div>
                <div className="items">
                  <span className="item">End date:</span>
                  <span className="info">{challenge.endDate}</span>
                </div>
                <div className="items">
                  <span className="item">Details:</span>
                  <p className="info">{challenge.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewChallenges;
