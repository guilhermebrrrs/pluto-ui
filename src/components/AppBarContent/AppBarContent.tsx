import { FunctionComponent } from "react";
import {
  Avatar,
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { MdLogout, MdMenu } from "react-icons/md";
import { AppType, OrganizationUser, User } from "types";
import { definitions } from "utils";
import { UseAppBarContentProps } from "./useAppBarContentProps";

interface AppBarContentProps {
  app: AppType | null;
  loggedUser: User | OrganizationUser | null;
  openDrawer: () => void;
}

const AppBarContent: FunctionComponent<AppBarContentProps> = ({
  app,
  loggedUser,
  openDrawer,
}) => {
  const { handleLogout } = UseAppBarContentProps();

  return (
    <Flex
      alignItems={definitions.alignItems.center}
      backgroundColor="gray.200"
      borderBottomWidth="2px"
      borderBottomColor="gray.600"
      height="75px"
      justifyContent={definitions.justifyContent.spaceBetween}
      padding={definitions.spacing.default}
      width="100vw"
    >
      <Flex
        alignItems={definitions.alignItems.center}
        gap={definitions.spacing.default}
      >
        <Button colorScheme="green" onClick={openDrawer}>
          <MdMenu size="24px" />
        </Button>
        <Text
          fontFamily={definitions.fontFamily.default}
          fontSize={definitions.fontSize.default}
          fontWeight={definitions.fontWeight.bold}
        >
          {app === AppType.APP_COLETAS ? "Coletas App" : "Reciclo App"}
        </Text>
      </Flex>
      <Popover isLazy placement="start-end">
        <PopoverTrigger>
          <Avatar
            backgroundColor="green.500"
            borderColor="gray.700"
            borderWidth="2px"
            color="gray.50"
            name={loggedUser?.name ?? "??"}
            size="md"
          />
        </PopoverTrigger>
        <PopoverContent width="250px">
          <PopoverHeader>
            <Text
              fontFamily={definitions.fontFamily.default}
              fontWeight={definitions.fontWeight.bold}
              noOfLines={1}
            >
              {loggedUser?.name ?? "??"}
            </Text>
          </PopoverHeader>
          <PopoverBody>
            <Button leftIcon={<MdLogout />} onClick={handleLogout}>
              Sair
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default AppBarContent;
