import { FunctionComponent, useCallback, useMemo, useState } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputProps } from "@chakra-ui/input/dist/declarations/src/input";

const PasswordInput: FunctionComponent<InputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordInputIcon = useMemo(
    () => (showPassword ? <ViewIcon /> : <ViewOffIcon />),
    [showPassword]
  );

  const passwordInputLabel = useMemo(
    () => (showPassword ? "Ocultar senha" : "Mostrar senha"),
    [showPassword]
  );

  const toggleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  );

  return (
    <InputGroup>
      <InputLeftElement color="gray.600" children={<LockIcon />} />
      <Input type={showPassword ? "text" : "password"} {...props} />
      <InputRightElement color="gray.600">
        <Tooltip label={passwordInputLabel}>
          <IconButton
            aria-label="show password"
            onClick={toggleShowPassword}
            size="sm"
          >
            {passwordInputIcon}
          </IconButton>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
