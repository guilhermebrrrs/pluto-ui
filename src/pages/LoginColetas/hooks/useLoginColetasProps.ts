import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";
import { AppAuthenticationContext } from "contexts";

const useLoginColetasProps = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setApp, setLoggedUser } = useContext(AppAuthenticationContext);
  const [organizationEmail, setOrganizationEmailState] = useState<string>();
  const [email, setEmailState] = useState<string>();
  const [password, setPasswordState] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  return {};
};

export { useLoginColetasProps };
