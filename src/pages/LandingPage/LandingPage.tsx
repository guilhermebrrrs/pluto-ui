import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { LandingPageBody } from "./Body";
import { LandingPageFooter } from "./Footer";
import { LandingPageHeader } from "./Header";
import { definitions } from "utils";

const LandingPage: FunctionComponent = () => {
  console.log(process.env.REACT_APP_GRAPHQL_URL);

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
