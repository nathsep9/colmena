import activity from "assets/img/activity.jpg";
import { Activities } from "components/Activities";
import { ImageContainer } from "components/ImageContainer";

export const Activity = () => {
  return (
    <>
      <ImageContainer image={activity} component={<Activities />} />
    </>
  );
};
