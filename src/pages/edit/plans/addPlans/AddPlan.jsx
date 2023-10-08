import "./addPlan.scss";
import PaymentsIcon from "@mui/icons-material/Payments";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPlan = () => {
  const navigate = useNavigate();

  const [features, setFeatures] = useState([{ id: 1, value: "" }]);
  const [afterSalesServices, setAfterSalesServices] = useState([
    { id: 1, value: "" },
  ]);

  const addFeature = () => {
    const newFeatureId =
      features.length > 0 ? features[features.length - 1].id + 1 : 1;
    setFeatures([...features, { id: newFeatureId, value: "" }]);
  };

  const addAfterSalesService = () => {
    const newServiceId =
      afterSalesServices.length > 0
        ? afterSalesServices[afterSalesServices.length - 1].id + 1
        : 1;
    setAfterSalesServices([
      ...afterSalesServices,
      { id: newServiceId, value: "" },
    ]);
  };

  const handleFeatureChange = (id, value) => {
    const updatedFeatures = features.map((feature) =>
      feature.id === id ? { ...feature, value } : feature
    );
    setFeatures(updatedFeatures);
  };

  const handleAfterSalesServiceChange = (id, value) => {
    const updatedAfterSalesServices = afterSalesServices.map((service) =>
      service.id === id ? { ...service, value } : service
    );
    setAfterSalesServices(updatedAfterSalesServices);
  };

  const deleteFeature = (id) => {
    if (features.length > 1) {
      const updatedFeatures = features.filter((feature) => feature.id !== id);
      setFeatures(updatedFeatures);
    }
  };

  const deleteAfterSalesService = (id) => {
    if (afterSalesServices.length > 1) {
      const updatedAfterSalesServices = afterSalesServices.filter(
        (service) => service.id !== id
      );
      setAfterSalesServices(updatedAfterSalesServices);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new plan object
    const newPlan = {
      title: e.target.elements.title.value,
      price: e.target.elements.price.value,
      features: features.map((feature) => feature.value),
      services: afterSalesServices.map((service) => service.value),
    };

    try {
      // Send a POST request to create a new plan
      const response = await fetch("http://localhost:8000/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlan),
      });

      if (response.ok) {
        // Redirect to ViewPlans on successful submission
        navigate("/plans");
      } else {
        // Handle error if request fails
        console.error("Failed to create a new plan.");
      }
    } catch (error) {
      console.error("An error occurred while creating a new plan.", error);
    }
  };

  return (
    <div className="addPlan">
      <div className="title">
        <h1>Add New Plan</h1>
        <PaymentsIcon className="titleIcon" />
      </div>
      <form onSubmit={handleSubmit}>
        {/* Plan Name */}
        <div className="formItem">
          <label>Title</label>
          <input type="text" name="title" placeholder="Plan's Title" />
        </div>

        {/* Plan Price */}
        <div className="formItem">
          <label>Pricing</label>
          <input type="text" name="price" placeholder="Price" />
        </div>

        {/* Features */}
        {features.map((feature, index) => (
          <div className="formItem" key={feature.id}>
            <label>Feature {index + 1}</label>
            <input
              type="text"
              placeholder="Feature"
              value={feature.value}
              onChange={(e) => handleFeatureChange(feature.id, e.target.value)}
            />
            <div className="actionBtn">
              <div className="addIcon" onClick={addFeature}>
                <AddCircleOutlineIcon />
              </div>
              <div
                className={`deleteIcon ${feature.id === 1 ? "disabled" : ""}`}
                onClick={() => deleteFeature(feature.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}

        {/* After Sales Services */}
        {afterSalesServices.map((service, index) => (
          <div className="formItem" key={service.id}>
            <label>After Sales Service {index + 1}</label>
            <input
              type="text"
              placeholder="After Sales Services"
              value={service.value}
              onChange={(e) =>
                handleAfterSalesServiceChange(service.id, e.target.value)
              }
            />
            <div className="actionBtn">
              <div className="addIcon" onClick={addAfterSalesService}>
                <AddCircleOutlineIcon />
              </div>
              <div
                className={`deleteIcon ${service.id === 1 ? "disabled" : ""}`}
                onClick={() => deleteAfterSalesService(service.id)}
              >
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlan;
