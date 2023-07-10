import { Link as LinkRouter } from "react-router-dom";
import { AppBar, Toolbar as MuiToolbar, Link } from "@mui/material";

export const Toolbar = () => {
  return (
    <AppBar position="sticky">
      <MuiToolbar>
        <Link
          variant="h5"
          color="inherit"
          sx={{ flexGrow: 1 }}
          fontWeight={"500"}
          component={LinkRouter}
          to="/"
          underline="none"
        >
          Colmena
        </Link>
      </MuiToolbar>
    </AppBar>
  );
};
