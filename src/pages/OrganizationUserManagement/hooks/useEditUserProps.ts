import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import {
  DELETE_ORGANIZATION_USER_BY_ID,
  FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID,
  UPDATE_ORGANIZATION_USER_PERSONAL_DATA,
} from "data";
import {
  OrganizationUser,
  OrganizationUserPersonalDataInput,
  UpdateOrganizationUserPersonalDataInput,
} from "types";

interface useEditUserHookProps {
  cancelEdit: () => void;
  selectedOrganizationUser: OrganizationUser;
}

const useEditUserProps = ({
  cancelEdit,
  selectedOrganizationUser,
}: useEditUserHookProps) => {
  const toast = useToast();

  const [isRemoveUserModalOpened, setIsRemoveUserModalOpened] =
    useState<boolean>(false);

  const [email, setEmailState] = useState<string>(
    selectedOrganizationUser?.email ?? ""
  );

  const [name, setNameState] = useState<string>(
    selectedOrganizationUser?.name ?? ""
  );

  const [isActive, setIsActiveState] = useState<boolean>(
    selectedOrganizationUser?.isActive ?? false
  );

  const [password, setPasswordState] = useState<string>(
    selectedOrganizationUser?.password ?? ""
  );

  const setEmail = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setEmailState(value),
    []
  );

  const setName = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setNameState(value),
    []
  );

  const setIsActive = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>) =>
      setIsActiveState(checked),
    []
  );

  const setPassword = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setPasswordState(value),
    []
  );

  const [
    executeSaveMutation,
    {
      data: { updateOrganizationUserPersonalData: wasSaved = null } = {},
      error: errorOnSave,
      reset: resetSaveMutation,
    },
  ] = useMutation(UPDATE_ORGANIZATION_USER_PERSONAL_DATA, {
    variables: {
      updateOrganizationUserPersonalDataInput: {
        _id: selectedOrganizationUser?._id,
        data: {
          email,
          isActive,
          name,
          password,
        } as OrganizationUserPersonalDataInput,
      } as UpdateOrganizationUserPersonalDataInput,
    },
    refetchQueries: [FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID],
  });

  const [
    executeDeleteMutation,
    {
      data: { deleteOrganizationUserById: wasDeleted = null } = {},
      error: errorOnDelete,
      reset: resetDeleteMutation,
    },
  ] = useMutation(DELETE_ORGANIZATION_USER_BY_ID, {
    variables: { id: selectedOrganizationUser?._id },
    refetchQueries: [FIND_ALL_ORGANIZATION_USERS_BY_ORGANIZATION_ID],
  });

  useEffect(() => {
    setEmailState(selectedOrganizationUser?.email);
    setNameState(selectedOrganizationUser?.name);
    setPasswordState(selectedOrganizationUser?.password);
    setIsActiveState(selectedOrganizationUser?.isActive ?? false);
  }, [selectedOrganizationUser]);

  useEffect(() => {
    if (errorOnDelete)
      toast({
        title: "Erro!",
        description: "Não foi possível realizar a remoção.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
  }, [errorOnDelete, toast]);

  useEffect(() => {
    if (errorOnSave)
      toast({
        title: "Erro!",
        description: "Não foi possível salvar as mudanças.",
        status: "error",
        duration: 7500,
        isClosable: true,
      });
  }, [errorOnSave, toast]);

  useEffect(() => {
    if (wasSaved) {
      cancelEdit();
      toast({
        title: "Dados salvos!",
        description: "Dados salvos com sucesso!.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [wasSaved, toast, cancelEdit]);

  useEffect(() => {
    if (wasDeleted) {
      cancelEdit();
      toast({
        title: "Usuário Removido",
        description: "Dados removido com sucesso!.",
        status: "success",
        duration: 7500,
        isClosable: true,
      });
    }
  }, [wasDeleted, toast, cancelEdit]);

  const removerUser = useCallback(async () => {
    await executeDeleteMutation();
    resetDeleteMutation();
  }, [executeDeleteMutation, resetDeleteMutation]);

  const saveChanges = useCallback(async () => {
    await executeSaveMutation();
    resetSaveMutation();
  }, [executeSaveMutation, resetSaveMutation]);

  const openRemoveUserModal = useCallback(() => {
    setIsRemoveUserModalOpened(true);
  }, []);

  const closeRemoveUserModal = useCallback(() => {
    setIsRemoveUserModalOpened(false);
  }, []);

  return {
    closeRemoveUserModal,
    email,
    isActive,
    isRemoveUserModalOpened,
    name,
    openRemoveUserModal,
    password,
    removerUser,
    saveChanges,
    setEmail,
    setIsActive,
    setName,
    setPassword,
  };
};

export { useEditUserProps };
