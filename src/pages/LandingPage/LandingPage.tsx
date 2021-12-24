import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { LandingPageBody } from "./Body";
import { LandingPageHeader } from "./Header";
import { definitions } from "utils";

const LandingPage: FunctionComponent = () => (
  <Flex
    alignItems={definitions.alignItems.center}
    flexDirection="column"
    width="100vw"
  >
    <LandingPageHeader />
    <LandingPageBody />
  </Flex>
);

export default LandingPage;
