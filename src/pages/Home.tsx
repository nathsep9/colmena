import home from "assets/img/home.jpg";
import { Cards } from "components/Cards";
import { ImageContainer } from "components/ImageContainer";

export const Home = () => (
  <>
    <ImageContainer image={home} />
    <Cards />
  </>
);
