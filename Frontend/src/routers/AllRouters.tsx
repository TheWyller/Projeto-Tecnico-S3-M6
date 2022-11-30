import { Route, Routes } from "react-router-dom";
import CreateContact from "../pages/CreateContact";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MyContacts from "../pages/MyContacts";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contacts" element={<MyContacts />} />
      <Route path="/newcontact" element={<CreateContact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
