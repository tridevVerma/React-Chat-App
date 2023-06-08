import React from "react";
import { StyledContainer } from "../styles";
import { Sidebar, Main, Blank } from "./index";
import { Routes, Route } from "react-router-dom";

const Container = () => {
  return (
    <StyledContainer>
      <Sidebar />

      <Routes>
        <Route path="/conversation/:id" element={<Main />} />
        <Route path="*" element={<Blank />} />
      </Routes>
    </StyledContainer>
  );
};

export default Container;
