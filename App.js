import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Home";
import Signup from "./SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { WPage } from "./WPage";

function App() {


  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/signup" element={<Signup />} />
          <Route path="/home" element={<WPage />} />
        </Routes>
      </UserAuthContextProvider>


    </div>
  );
}

export default App;
