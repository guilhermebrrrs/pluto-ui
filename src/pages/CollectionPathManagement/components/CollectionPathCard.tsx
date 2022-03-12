import { CardContainer } from "components";
import { FunctionComponent } from "react";
import { CollectionPath } from "types";

interface CollectionPathCardProps {
  collectionPath: CollectionPath;
}

const CollectionPathCard: FunctionComponent<CollectionPathCardProps> = ({
  collectionPath,
}) => <CardContainer>{collectionPath.name}</CardContainer>;

export default CollectionPathCard;
