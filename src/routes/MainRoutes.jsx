import React from "react";
import { Route, Routes } from "react-router-dom";
import DrawerComponents from "../components/miscellaneous/DrawerComponents";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/foodOrder" element={<h1>Food Order</h1>} />
      <Route path="/fevoriteMenu" element={<h1>Fevorite Menu</h1>} />
      <Route path="/messages" element={<h1>Messages</h1>} />
      <Route path="/orderHistory" element={<h1>Order History</h1>} />
      <Route path="/notification" element={<h1>notification</h1>} />
      <Route path="/bills" element={<h1>Bills</h1>} />
      <Route path="/restaurant" element={<h1>restaurant</h1>} />
      <Route path="/driver" element={<h1>Driver</h1>} />
      <Route path="/setting" element={<h1>Setting</h1>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/signup" element={<h1>Signup</h1>} />
    </Routes>
  );
};

export default MainRoutes;
