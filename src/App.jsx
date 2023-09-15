import React from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./pages/analytics/Summary";
import Layout from "./pages/dashboardlayout/Layout";
import Solutions from "./pages/contentmanagement/Solutions";
import RunSolutionRemotly from "./pages/adminconsole/RunSolutionRemotly";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AgentVersion from "./pages/selfheal/AgentVersion";
import ProactiveSolution from "./pages/contentmanagement/ProactiveSolution";
import UserVersions from "./pages/userversion/UserVersions";
import UserFeedback from "./pages/analytics/UserFeedback";
import Dashboard from "./pages/dashboardlayout/Dashboard";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import SystemTable from "./pages/system/SystemTable";
import UserTable from "./pages/system/UserTable";
import "react-toastify/dist/ReactToastify.css";
import Setting from "./pages/setting/Setting";
import Category from "./pages/category/Category";
import Subcategory from "./pages/subcategory/Subcategory";
import UploadCategory from "./pages/category/UploadCategory";
import Location from "./pages/location/Location";
import CloseSetting from "./pages/closesetting/CloseSetting";
import Chatbot from "./pages/chatbox/Chatbot";
import AddChatbot from "./pages/addchatbot/AddChatbot";
import Report from "./pages/report/Report";
import UploadSubCategory from "./pages/subcategory/UploadSubcategory";
import Area from "./pages/area/Area";
import Query from "./pages/query/query"
import UploadArea from "./pages/area/UploadArea"
import UploadQuery from "./pages/query/UploadQuery"


const App = () => {
  return (
    <div className=" font-roboto">
      
      <Routes>
        <Route path="*" element={<ComingSoon />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="summary" element={<Summary />} />
          <Route path="feedback" element={<UserFeedback />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="runsolutionremotly" element={<RunSolutionRemotly />} />
          <Route path="agentversion" element={<AgentVersion />} />
          <Route path="proactivesolution" element={<ProactiveSolution />} />
          <Route path="userversions" element={<UserVersions />} />
          <Route path="comingsoon" element={<ComingSoon />} />
          <Route path="systemtable" element={<SystemTable />} />
          <Route path="userinfo" element={<UserTable />} />
          <Route path="categoryinfo" element={<Category />} />
          <Route path="uploadcategory" element={<UploadCategory />} />
          <Route path="subcategoryinfo" element={<Subcategory />} />
          <Route path="uploadsubcategory" element={<UploadSubCategory />} />
          <Route path="uploadarea" element={<UploadArea />} />
          <Route path="uploadquery" element={<UploadQuery />} />



          <Route path="areainfo" element={<Area />} />
          <Route path="queryinfo" element={<Query />} />

          <Route path="setting" element={<Setting />} />
          <Route path="location" element={<Location />} />
          <Route path="closesetting" element={<CloseSetting />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="addchatbox" element={<AddChatbot />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
