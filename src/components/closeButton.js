import { Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ setShow }) => {
  return (
    <Button onClick={() => setShow(true)}>
      <CloseIcon sx={{ fontSize: 40 }} />
    </Button>
  );
};
export default CloseButton;
