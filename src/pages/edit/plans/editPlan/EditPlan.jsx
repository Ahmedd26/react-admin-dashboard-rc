import "./editPlan.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import PaymentsIcon from "@mui/icons-material/Payments";

const EditPlan = () => {
  const { planId } = useParams();
  const navigate = useNavigate();

  const [plan, setPlan] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        // Fetch the plan data from the JSON server based on planId
        const response = await fetch(`http://localhost:8000/plans/${planId}`);
        if (response.ok) {
          const planData = await response.json();
          setPlan(planData);
          setTitle(planData.title);
          setPrice(planData.price);
          setFeatures(planData.features);
          setServices(planData.services);
        } else {
          console.error("Failed to fetch plan data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching plan data.", error);
      }
    };

    fetchPlan();
  }, [planId]);

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const deleteFeature = (index) => {
    if (features.length > 1) {
      const updatedFeatures = [...features];
      updatedFeatures.splice(index, 1);
      setFeatures(updatedFeatures);
    }
  };

  const addService = () => {
    setServices([...services, ""]);
  };

  const deleteService = (index) => {
    if (services.length > 1) {
      const updatedServices = [...services];
      updatedServices.splice(index, 1);
      setServices(updatedServices);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an updated plan object
    const updatedPlan = {
      ...plan,
      title,
      price,
      features,
      services,
    };

    try {
      // Send a PUT request to update the plan
      const response = await fetch(`http://localhost:8000/plans/${planId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPlan),
      });

      if (response.ok) {
        // Redirect to ViewPlans on successful submission
        navigate("/plans");
      } else {
        // Handle error if request fails
        console.error("Failed to update the plan.");
      }
    } catch (error) {
      console.error("An error occurred while updating the plan.", error);
    }
  };

  if (!plan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="editPlan">
      <div>
        <div className="title">
          <h1>Edit Plan {parseInt(planId) + 1}</h1>
          <PaymentsIcon className="titleIcon" />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Plan Name */}
          <div className="formItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Plan's Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Plan Price */}
          <div className="formItem">
            <label>Pricing</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <div className="formItem" key={index}>
              <label>Feature {index + 1}</label>
              <input
                type="text"
                placeholder="Feature"
                value={feature}
                onChange={(e) => {
                  const updatedFeatures = [...features];
                  updatedFeatures[index] = e.target.value;
                  setFeatures(updatedFeatures);
                }}
              />
              <div className="actionBtn">
                <div
                  className={`deleteIcon ${
                    features.length === 1 ? "disabled" : ""
                  }`}
                  onClick={() => deleteFeature(index)}
                >
                  <DeleteIcon />
                </div>

                <div className="addIcon" onClick={addFeature}>
                  <AddCircleOutlineIcon />
                </div>
              </div>
            </div>
          ))}

          {/* After Sales Services */}
          {services.map((service, index) => (
            <div className="formItem" key={index}>
              <label>After Sales Service {index + 1}</label>
              <input
                type="text"
                placeholder="After Sales Services"
                value={service}
                onChange={(e) => {
                  const updatedServices = [...services];
                  updatedServices[index] = e.target.value;
                  setServices(updatedServices);
                }}
              />
              <div className="actionBtn">
                <div
                  className={`deleteIcon ${
                    services.length === 1 ? "disabled" : ""
                  }`}
                  onClick={() => deleteService(index)}
                >
                  <DeleteIcon />
                </div>

                <div className="addIcon" onClick={addService}>
                  <AddCircleOutlineIcon />
                </div>
              </div>
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditPlan;
