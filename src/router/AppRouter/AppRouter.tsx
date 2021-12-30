import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  AppColetasMainLayout,
  AppRecicloMainLayout,
  MainLayout,
} from "components";
import {
  Dashboard,
  LandingPage,
  Login,
  LoginColetas,
  LoginReciclo,
  PageNotFound,
  Register,
  RegisterColetasOrganization,
  RegisterColetasUser,
  RegisterReciclo,
} from "pages";

const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/app/reciclo" element={<AppRecicloMainLayout />}>
          <Route path="/app/reciclo/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/coletas" element={<LoginColetas />} />
        <Route path="/login/reciclo" element={<LoginReciclo />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/register/coletas/organization"
          element={<RegisterColetasOrganization />}
        />
        <Route
          path="/register/coletas/user"
          element={<RegisterColetasUser />}
        />
        <Route path="/register/reciclo" element={<RegisterReciclo />} />
        <Route path="/app/coletas" element={<AppColetasMainLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
