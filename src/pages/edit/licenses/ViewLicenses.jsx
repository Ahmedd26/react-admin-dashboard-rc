import React, { useEffect, useState } from "react";
import "./viewLicenses.scss";
import GavelIcon from "@mui/icons-material/Gavel";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const ViewLicenses = () => {
  const [licenseList, setLicenseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/licenses")
      .then((response) => {
        console.log(response.data);
        setLicenseList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const deleteLicense = (id) => {
    axios
      .delete(`http://localhost:8000/licenses/${id}`)
      .then(() => {
        const updatedList = licenseList.filter((license) => license.id !== id);
        setLicenseList(updatedList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <div className="viewLicenses">
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="errorLoading">
        <ReportGmailerrorredIcon className="errorIcon" />
        <p>Error loading licenses. Please try again later.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="viewLicenses">
      <div className="LicensesContent">
        <div className="titles">
          <Link to="/edit-license">
            <h1>Edit License</h1>
            <GavelIcon className="titleIcon" />
          </Link>

          <Link to="add-license">
            <h1>Add License</h1>
            <AddCircleOutlineIcon className="titleIcon" />
          </Link>
        </div>
        <div className="licensesContainer">
          {licenseList.length > 0 ? (
            licenseList.map((license) => (
              <div className="license" key={license.id}>
                <div className="top">
                  <h2 className="licenseTitle">{license.title}</h2>
                  <p className="licenseDescription">{license.description}</p>
                </div>
                <div className="middle">
                  <h3 className="feature">Feature list</h3>
                  <ul>
                    {license.features.map((feature, index) => (
                      <li key={index}>🎙 {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bottom">
                  <div className="priceAndFiles">
                    <div className="price">
                      <h3>Price</h3>
                      <p>$ {license.price}</p>
                    </div>
                    <div className="files">
                      <h3>Files To Deliver</h3>
                      <p>{license.files_to_deliver}</p>
                    </div>
                  </div>
                  <div className="buttons">
                    <div
                      className="licenseButton"
                      onClick={() => deleteLicense(license.id)}
                    >
                      <DeleteIcon className="deleteIcon" />
                    </div>
                    <div className="licenseButton">
                      <Link
                        to={`/licenses/edit-license/${license.id}`}
                        className="editLink"
                      >
                        <EditIcon className="editIcon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No licenses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewLicenses;
