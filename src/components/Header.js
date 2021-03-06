import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import BasicButtonGroup from "./ButtonGroup";

const Header = ({ setShow, size }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // marginBottom: 8.5,
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: "#667292" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            // onClick={() => setShow(true)}
            sx={{ flexGrow: 1, marginLeft: 4 }}
          >
            LOGO
          </Typography>
          <Button color="inherit" onClick={() => setShow(false)}>
            <Badge color="secondary" badgeContent={size}>
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
        {/* <BasicButtonGroup /> */}
      </AppBar>
    </Box>
  );
};

export default Header;
