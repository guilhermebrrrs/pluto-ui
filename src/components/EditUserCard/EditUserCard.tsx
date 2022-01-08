import { FunctionComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { OrganizationUser } from "types";
import { definitions } from "utils";

interface EditUserCardProps {
  organizationUser: OrganizationUser;
}

const EditUserCard: FunctionComponent<EditUserCardProps> = ({
  organizationUser,
}) => (
  <Flex
    borderColor="gray.500"
    borderRadius="5px"
    borderWidth="2px"
    padding={definitions.spacing.small}
    width="100%"
  >
    {organizationUser.name}
  </Flex>
);

export default EditUserCard;
