import { AppMainLayout } from "components";
import {
  ColetasCollectionRequestManagement,
  CollectionPathManagement,
  DashboardColetas,
  DashboardReciclo,
  LandingPage,
  Login,
  LoginColetas,
  LoginReciclo,
  OrganizationUserManagement,
  PageNotFound,
  RecicloCollectionRequestManagement,
  Register,
  RegisterColetasOrganization,
  RegisterReciclo,
  UserLocationManagement,
} from "pages";
import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="/app" element={<AppMainLayout />}>
          <Route
            path="/app/coletas/collectionrequests"
            element={<ColetasCollectionRequestManagement />}
          />
          <Route path="/app/coletas/dashboard" element={<DashboardColetas />} />
          <Route
            path="/app/coletas/rotas"
            element={<CollectionPathManagement />}
          />
          <Route
            path="/app/coletas/usuarios"
            element={<OrganizationUserManagement />}
          />
          <Route
            path="/app/reciclo/collectionrequests"
            element={<RecicloCollectionRequestManagement />}
          />
          <Route path="/app/reciclo/dashboard" element={<DashboardReciclo />} />
          <Route
            path="/app/reciclo/locations"
            element={<UserLocationManagement />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/coletas" element={<LoginColetas />} />
        <Route path="/login/reciclo" element={<LoginReciclo />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register/coletas"
          element={<RegisterColetasOrganization />}
        />
        <Route path="/register/reciclo" element={<RegisterReciclo />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
