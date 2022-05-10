import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-scroll";

export default function BasicButtonGroup() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            <Link to="beers" spy={true} smooth={true} duration={500}>
              Oluet
            </Link>
          </Button>
          <Button>
            <Link to="ciders" spy={true} smooth={true} duration={500}>
              Siiderit
            </Link>
          </Button>
          <Button>
            <Link to="longDrinks" spy={true} smooth={true} duration={500}>
              Lonkerot
            </Link>
          </Button>
          {/* <Button>Drinkit</Button>
          <Button>Viinit</Button>
          <Button>Limut</Button> */}
        </ButtonGroup>
        {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Drinkit</Button>
          <Button>Viinit</Button>
          <Button>Limut</Button>
        </ButtonGroup> */}
      </Box>
    </div>
  );
}
