import React from 'react';
import { Routes, Route } from "react-router-dom";
import { MainPageComponent } from "../MainPageComponent";

export const RootComponent = () => {
  return (
    <Routes>
      {/* myPlugin.routes.root will take the user to this page */}
      <Route path="/" element={<MainPageComponent/>} />
    </Routes>
  );
};