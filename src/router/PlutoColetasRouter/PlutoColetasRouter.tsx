import { FunctionComponent } from "react";
import { Route } from "react-router";
import { LoginColetas } from "pages";

const PlutoColetasRouter: FunctionComponent = () => (
  <Route path="/login" element={<LoginColetas />} />
);

export default PlutoColetasRouter;
