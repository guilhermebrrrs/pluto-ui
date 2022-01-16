import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { definitions } from "utils";
import {
  LandingPageBody,
  LandingPageFooter,
  LandingPageHeader,
} from "./components";

const LandingPage: FunctionComponent = () => {
  return (
    <Flex
      alignItems={definitions.alignItems.center}
      flexDirection="column"
      gap={definitions.spacing.largest}
      width="100%"
    >
      <LandingPageHeader />
      <LandingPageBody />
      <LandingPageFooter />
    </Flex>
  );
};

export default LandingPage;
