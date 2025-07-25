import React from "react";
import { Route, Routes } from "react-router";
import Register from "./validation/register/register";
import Login from "./validation/login/login";
import Validation from "./validation/validation";
import LeaveLayout from "./user/userlayout";
import { LeaveApply } from "./worker/leaveapply/leaveapply";
import LeaveHistory from "./worker/leavehistory/leavehistory";
import Dashboard from "./admin/Dashbord/dashbord";
import ViewLeave from "./admin/ViewLeave/viewleave";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Validation />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/work" element={<LeaveLayout />}>
        <Route index element={<Dashboard/>} />
        <Route path="leaveapply" element={<LeaveApply />} /> 
        <Route  path="leavehistory" element={<LeaveHistory/>}/>
      </Route>
      <Route path="/admin" element={<LeaveLayout/>}>
         <Route index element={<Dashboard/>} />
         <Route path="viewleave" element={<ViewLeave/>}/>
         <Route  path="leavehistory" element={<LeaveHistory/>}/>
      </Route>
    </Routes>
  );
}

export default App;
