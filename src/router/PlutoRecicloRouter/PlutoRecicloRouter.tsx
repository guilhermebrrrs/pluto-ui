import { FunctionComponent } from "react";
import { Route } from "react-router";
import { LoginReciclo } from "pages";

const PlutoRecicloRouter: FunctionComponent = () => (
  <Route path="/login" element={<LoginReciclo />} />
);

export default PlutoRecicloRouter;
