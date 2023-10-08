import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./styles/dark.scss";
import "./styles/light.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
// import New from "./pages/new/New";
// import { userInputs } from "./formSource";
// import {  productInputs } from "./formSource";
import NotificationsPage from "./pages/notificationspage/Notificationspage";
import MessagesPage from "./pages/messagesPage/MessagesPage";
import Admins from "./pages/admins/Admins";
import AddAdmin from "./components/addAdmin/addAdmin";
import AddPlan from "./pages/edit/plans/addPlans/AddPlan";
import ViewPlans from "./pages/edit/plans/ViewPlans.jsx";
import EditPlans from "./pages/edit/plans/editPlan/EditPlan";
import ViewLicenses from "./pages/edit/licenses/ViewLicenses";
import AddLicense from "./pages/edit/licenses/addLicense/AddLicense";
import EditLicense from "./pages/edit/licenses/editLicense/EditLicense";
import ViewAnnouncements from "./pages/announcements/ViewAnnouncements";
import Reports from "./pages/reports/Reports";
import AddAnnouncement from "./pages/announcements/addAnnouncement/AddAnnouncement";
import ViewChallenges from "./pages/challenges/ViewChallenges";
import AddChallenge from "./pages/challenges/addChallenge/AddChallenge";
import EditChallenge from "./pages/challenges/editChallenge/EditChallenge";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/editProfile/EditProfile";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Sidebar />
        <main className="content">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* login */}
              <Route path="login" element={<Login />} />
              {/* Notifications */}
              <Route path="notifications" element={<NotificationsPage />} />
              {/* Messages */}
              <Route path="messages" element={<MessagesPage />} />
              {/* reports */}
              <Route path="/reports" element={<Reports />} />
              {/* Challenges */}
              <Route path="challenge">
                <Route index element={<ViewChallenges />} />
                <Route path="add-challenge" element={<AddChallenge />} />
                <Route
                  path="edit-challenge/:challengeId"
                  element={<EditChallenge />}
                />
              </Route>
              {/* Plans */}
              <Route path="plans">
                <Route index element={<ViewPlans />} />
                <Route path="add-plan" element={<AddPlan />} />
                <Route path="edit-plan/:planId" element={<EditPlans />} />
              </Route>
              {/* Licenses */}
              <Route path="licenses">
                <Route index element={<ViewLicenses />} />
                <Route path="add-license" element={<AddLicense />} />
                <Route
                  path="edit-license/:licenseId"
                  element={<EditLicense />}
                />
              </Route>
              {/* announcements */}
              <Route path="announcements">
                <Route>
                  <Route index element={<ViewAnnouncements />} />
                  <Route
                    path="add-announcement"
                    element={<AddAnnouncement />}
                  />
                </Route>
              </Route>
              {/* admins */}
              <Route path="admins">
                <Route>
                  <Route index element={<Admins />} />
                  <Route path=":adminId" element={<AddAdmin />} />
                </Route>
              </Route>
              {/* Profile */}
              <Route path="profile">
                <Route>
                  <Route index element={<Profile />} />
                  <Route path="edit-profile" element={<EditProfile />} />
                </Route>
              </Route>

              {/* UnKnown */}
              {/* UnKnown */}
              {/* UnKnown */}
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                {/* <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New Admin" />}
                /> */}
              </Route>

              {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
