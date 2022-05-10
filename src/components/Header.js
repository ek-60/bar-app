import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const Header = ({ itemCount }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: 8.5,
      }}
    >
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 4 }}
          >
            LOGO
          </Typography>
          <Button color="inherit">
            <Badge color="secondary" badgeContent={itemCount}>
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

// export default function Header() {

//   return (
//     <Box
//     sx={{
//       flexGrow: 1,
//       marginBottom: 8.5
//       }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 4}}>
//             LOGO
//           </Typography>
//           <Button color="inherit">
//             <Badge color="secondary" badgeContent={0}>
//               <ShoppingCartIcon />
//             </Badge>
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
