import { useMutation } from "@apollo/client";
import { AppAuthenticationContext } from "contexts";
import { useToast } from "@chakra-ui/react";
import { CREATE_COLLECTION_PATH } from "data";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CreateCollectionPathInput,
  Organization,
  OrganizationUser,
} from "types";

const useRegisterCollectionPathProps = () => {
  const toast = useToast();
  const { loggedUser } = useContext(AppAuthenticationContext);

  const [description, setDescriptionState] = useState<string>("");
  const [name, setNameState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const setDescription = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      value && setDescriptionState(value);
    },
    []
  );

  const setName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      value && setNameState(value);
    },
    []
  );

  const [executeMutation, { data = null as boolean | null, error, reset }] =
    useMutation(CREATE_COLLECTION_PATH, {
      variables: {
        createCollectionPathInput: {
          description,
          name,
          organizationId:
            loggedUser?.__typename === "Organization"
              ? (loggedUser as Organization)._id
              : (loggedUser as OrganizationUser)?.organization?._id,
        } as CreateCollectionPathInput,
      },
    });

  const handleRegisterCollectionPath = useCallback(async () => {
    setLoading(true);

    if (!description || !name) {
      toast({
        title: "Não foi possível criar a rota",
        description: "É necessário informar descrição e nome.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    await executeMutation();
    reset();
    setLoading(false);
  }, [description, executeMutation, name, reset, toast]);

  useEffect(() => {
    if (data) {
      toast({
        title: "Sucesso!",
        description: "Rota criada com sucesso!",
        status: "success",
        duration: 7500,
        isClosable: true,
      });

      setDescriptionState("");
      setNameState("");
      reset();
    }
  }, [data, reset, toast]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível criar uma rota.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [data, description, error, name, toast]);

  return {
    description,
    handleRegisterCollectionPath,
    loading,
    name,
    setDescription,
    setName,
  };
};

export { useRegisterCollectionPathProps };
