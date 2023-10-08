import React, { useState, useEffect } from "react";
import "./viewPlans.scss";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ViewPlans = () => {
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON server
    fetch("http://localhost:8000/plans")
      .then((response) => response.json())
      .then((data) => setPlanList(data))
      .catch((error) => console.log(error));
  }, []);
  const deletePlan = (id) => {
    fetch(`http://localhost:8000/plans/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the deleted plan from the state
        const updatedList = planList.filter((plan) => plan.id !== id);
        setPlanList(updatedList);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="viewPlans">
      <div className="title">
        <div className="right">
          <h1>Edit Plans</h1>
          <PaymentsIcon className="titleIcon" />
        </div>
        <Link to="add-plan" className="left">
          <h2>Add New plans</h2>
          <AddCircleOutlineIcon className="titleIcon" />
        </Link>
      </div>
      <div className="contentContainer">
        {planList.map((plan) => (
          <div className="plan" key={plan.id}>
            <h1>Plan {plan.id}</h1>
            <div className="planCard">
              <div className="top">
                <h2>{plan.title}</h2>
                <h2>$ {plan.price}</h2>
              </div>
              <div className="middle">
                <h2>Features</h2>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="bottom">
                <h2>After Sale Services</h2>
                <ul>
                  {plan.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="buttons">
              <div className="planButton" onClick={() => deletePlan(plan.id)}>
                <DeleteIcon className="deleteIcon" />
              </div>
              <div className="planButton">
                <Link to={`/plans/edit-plan/${plan.id}`} className="editLink">
                  <EditIcon className="editIcon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPlans;
