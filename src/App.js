import React from "react";
import Layout from "pages/layout/layout";
import Create from "pages/create/create";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/create" replace />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
