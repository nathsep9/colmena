import { Graphics } from "../components/Graphics";
import graphics from "assets/img/graphics.jpg";
import { ImageContainer } from "components/ImageContainer";

export const Graph = () => {
  return (
    <>
      <ImageContainer image={graphics} component={<Graphics />} />
    </>
  );
};
