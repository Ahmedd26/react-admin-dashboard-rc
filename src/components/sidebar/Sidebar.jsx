import "./sidebar.scss";
import profilePic from "../../assets/userAvatar.png";
// import logo from "../../assets/Rhythmic Chamber Logo.png";
import lightLogo from "../../assets/Rhythmic Chamber Logo light.png";
import darkLogo from "../../assets/Rhythmic Chamber Logo dark.png";
// Mui
import {
  Dashboard,
  PersonOutlined,
  Gavel,
  Event,
  AccountCircleOutlined,
  ExitToApp,
  Payments,
  ReportGmailerrorred,
  NotificationAdd,
  AdminPanelSettings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { darkMode } = useContext(DarkModeContext);
  const logoImage = darkMode ? darkLogo : lightLogo;
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">
            <img src={logoImage} alt="logo" />
            <h1>Rhythmic Chamber</h1>
          </span>
        </Link>
      </div>
      <div className="center">
        <div className="center-top">
          <img src={profilePic} alt="userAvatar" />
          <h2>John Doe</h2>
          <p>CEO, Rhythmic Chamber</p>
        </div>
        <div className="center-bottom">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <Link to="/">
                <Dashboard className="icon" />
                <span>Dashboard</span>
              </Link>
            </li>
            <p className="title">LISTS</p>
            <li>
              <Link to="/users">
                <PersonOutlined className="icon" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/admins">
                <AdminPanelSettings className="icon" />
                <span>Admins</span>
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <ReportGmailerrorred className="icon" />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/plans">
                <Payments className="icon" />
                <span>Plans</span>
              </Link>
            </li>
            <li>
              <Link to="/licenses">
                <Gavel className="icon" />
                <span>Licenses</span>
              </Link>
            </li>
            <p className="title">Add</p>

            <li>
              <Link to="/challenge">
                <Event className="icon" />
                <span>Challenge</span>
              </Link>
            </li>
            <li>
              <Link to="/announcements">
                <NotificationAdd className="icon" />
                <span>Announcement</span>
              </Link>
            </li>

            <p className="title">USER</p>
            <li>
              <Link to="/profile">
                <AccountCircleOutlined className="icon" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <ExitToApp className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
