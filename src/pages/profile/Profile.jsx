import { useState } from "react";
import "./profile.scss";
import ProfilePic from "../../assets/userAvatar.png";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
      username,
      email,
      password,
      fullName,
      title,
      image: selectedImage,
    };

    // Send the form data to the JSON server
    axios
      .post("http://localhost:8000/admin", formData)
      .then((response) => {
        console.log(response.data); // Optional: Handle the response
        navigate(-1); // Navigate back to the previous page
      })
      .catch((error) => {
        console.error(error); // Optional: Handle errors
      });

    // Clear form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setFullName("");
    setTitle("");
  };
  return (
    <div className="profile">
      <div className="title">
        <h1>Profile</h1>
        <AccountCircleOutlinedIcon className="titleIcon" />
      </div>
      <form id="updateAdminProfile" className="info" onSubmit={handleSubmit}>
        <div className="top">
          <div className="left">
            <img src={selectedImage || ProfilePic} alt="userAvatar" />
          </div>
          <div className="right">
            <h1>John Doe</h1>
            <div className="email-role">
              <span>johndoe@example.domain</span>
              <span>-</span>
              <span>CEO</span>
            </div>
            <div className="changeProfilePicture">
              <input
                type="file"
                accept="Image/*"
                id="profilePic"
                onChange={handleImageUpload}
              />
              <label htmlFor="profilePic">
                <span>Change profile picture</span>
                <CollectionsIcon className="picIcon" />
              </label>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h1>Account</h1>
            <label htmlFor="username">Username</label>
            <label htmlFor="email">Email</label>
            <label htmlFor="password">Password</label>
            <label htmlFor="fullName">Full name</label>
            <label htmlFor="title">Title</label>
          </div>
          <div className="right">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="button">
        <Link to="/">back to home</Link>
        <button type="submit" form="updateAdminProfile">
          Update your info
        </button>
      </div>
    </div>
  );
};

export default Profile;
