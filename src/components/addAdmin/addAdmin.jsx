import "./addAdmin.scss";
// MUI Icons
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const AddAdmin = () => {
  return (
    <div className="admins">
      <div className="title">
        <h1>Add New Admin</h1>
        <ManageAccountsIcon className="icon" />
      </div>
      <form>
        <div className="formItem">
          <label>Full Name</label>
          <input className="input" type="text" placeholder="Admin Name" />
        </div>
        <div className="formItem">
          <label>Email</label>
          <input
            className="input"
            type="email"
            placeholder="adminemail@example.domain"
          />
        </div>
        <div className="formItem">
          <label>Password</label>
          <input className="input" type="password" placeholder="Password" />
        </div>
        <div className="formItem">
          <label>Confirm password</label>
          <input
            className="input"
            type="password"
            placeholder="Confirm password"
          />
        </div>
        <div className="formItem">
          <label>Role</label>
          <input className="input" type="text" placeholder="i.e. CEO" />
        </div>
        <div className="formItem">
          <label>Admin ID</label>
          <input className="input" type="text" placeholder="1515 5242 125" />
        </div>
        <div className="formItem">
          <label>Phone Number</label>
          <input
            className="input"
            type="text"
            placeholder="+20 1184 6255 178"
          />
        </div>
        <div className="formItem">
          <label>Profile Picture</label>
          <div className="input uploadButton">
            <input type="file" accept="image/*" id="uploadPic" />
            <label htmlFor="uploadPic">
              <UploadFileIcon className="uploadIcon" />
              Upload
            </label>
          </div>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddAdmin;
