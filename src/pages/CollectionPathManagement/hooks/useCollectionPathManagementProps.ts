import { useMemo } from "react";

const useCollectionPathManagementProps = () => {
  const selectebTabStyle = useMemo(
    () => ({
      bg: "gray.200",
      borderColor: "gray.500",
      borderWidth: "2px",
      borderBottomWidth: 0,
    }),
    []
  );

  return { selectebTabStyle };
};

export { useCollectionPathManagementProps };
