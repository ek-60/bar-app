import { Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ setShow }) => {
  return (
    <Button
      sx={{ paddingTop: 10, paddingLeft: 7.5 }}
      onClick={() => setShow(true)}
    >
      <CloseIcon sx={{ fontSize: 40, color: "red" }} />
    </Button>
  );
};
export default CloseButton;
