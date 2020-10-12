import React from "react";
import { Container } from "reactstrap";
import MainNavbar from "../../navigation/MainNavbar";
import CustomContainer from "../CustomContainer";
import "./styles.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <MainNavbar />

      <Container>{children}</Container>
    </div>
  );
};

export default DashboardLayout;
