import { Box, Container, AppBar } from "@mui/material";

interface ImageContainerProps {
  image: string;
  component?: React.ReactNode;
}

export const ImageContainer = ({ image, component }: ImageContainerProps) => {
  return (
    <>
      <AppBar position="relative" color="transparent">
        <Box sx={{ flexGrow: 3, backgroundColor: "#15120d00" }}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={image} alt="drink" width="auto" height="350px" />
          </Container>
        </Box>
      </AppBar>
      {component}
    </>
  );
};
