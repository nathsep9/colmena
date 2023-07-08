import { Container as MuiContainer, AppBar, Box } from "@mui/material";

import { Card } from "../components/Card";
import statistics from "assets/img/statistics.jpg";

export const Graphics = () => {
  return (
    <AppBar position="relative" color="transparent">
      <Box sx={{ flexGrow: 3, backgroundColor: "#190325" }}>
        <MuiContainer>
          <img src={statistics} alt="drink" width="100%" height="100%" />
        </MuiContainer>
      </Box>
      <div>
        <Card />
      </div>
    </AppBar>
  );
};
