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

  const [isOpenedRemoveUserModal, setIsOpenedRemoveUserModal] =
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
    fetchSaveMutation,
    {
      data: { updateOrganizationUserPersonalData: wasSaved = null } = {},
      error: errorOnSave,
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
    fetchDeleteMutation,
    {
      data: { deleteOrganizationUserById: wasDeleted = null } = {},
      error: errorOnDelete,
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

  const removerUser = useCallback(
    () => fetchDeleteMutation(),
    [fetchDeleteMutation]
  );

  const saveChanges = useCallback(
    () => fetchSaveMutation(),
    [fetchSaveMutation]
  );

  const openRemoveUserModal = useCallback(() => {
    setIsOpenedRemoveUserModal(true);
  }, []);

  const closeRemoveUserModal = useCallback(() => {
    setIsOpenedRemoveUserModal(false);
  }, []);

  return {
    closeRemoveUserModal,
    email,
    isActive,
    isOpenedRemoveUserModal,
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
