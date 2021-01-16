import {
  BackgroundContainer,
  Gradient,
  BlobContainerOne,
  BlobContainerTwo,
} from "./index.style";

import BackgroundBlobOne from "../../svg/BackgroundBlobOne.svg";
import BackgroundBlobTwo from "../../svg/BackgroundBlobTwo.svg";

const Background: React.FC = () => {
  return (
    <BackgroundContainer>
      <BlobContainerOne>
        <BackgroundBlobOne />
      </BlobContainerOne>
      <BlobContainerTwo>
        <BackgroundBlobTwo />
      </BlobContainerTwo>
      <Gradient />
    </BackgroundContainer>
  );
};

export default Background;
