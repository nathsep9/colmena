import {
  Grid,
  Container,
  CardActionArea,
  CardMedia,
  Card as CardMui,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { PathRoutes } from "enums/PathRoutes";
import graphics from "assets/img/graphics.jpg";
import activity from "assets/img/activity.jpg";

export const Cards = () => {
  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <CardMui>
            <CardActionArea component={Link} to={PathRoutes.GRAPHICS}>
              <CardMedia component="img" image={graphics} height="210" />
              <CardContent
                sx={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  justifyContent={"center"}
                  mt={2}
                >
                  Graficos
                </Typography>
                <Typography variant="body2" mt={2}>
                  Analiza la gráfica y realiza el filtro que desees
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardMui>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMui>
            <CardActionArea component={Link} to={PathRoutes.ACTIVITIES}>
              <CardMedia component="img" image={activity} height="210" />
              <CardContent
                sx={{
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  justifyContent={"center"}
                  mt={2}
                >
                  Plan de actividades
                </Typography>
                <Typography variant="body2" mt={2}>
                  Crea tu plan de actividades y marca las que ya realizaste
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardMui>
        </Grid>
      </Grid>
    </Container>
  );
};
