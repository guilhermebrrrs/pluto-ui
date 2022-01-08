import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AppMainLayout } from "components";
import {
  DashboardColetas,
  DashboardReciclo,
  LandingPage,
  Users,
  Login,
  LoginColetas,
  LoginReciclo,
  PageNotFound,
  Register,
  RegisterColetasOrganization,
  RegisterReciclo,
} from "pages";

const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="/app" element={<AppMainLayout />}>
          <Route path="/app/coletas/dashboard" element={<DashboardColetas />} />
          <Route path="/app/coletas/usuarios" element={<Users />} />
          <Route path="/app/reciclo/dashboard" element={<DashboardReciclo />} />
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
