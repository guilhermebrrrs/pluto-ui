import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  AppColetasMainLayout,
  AppRecicloMainLayout,
  MainLayout,
} from "components";
import {
  LandingPage,
  Login,
  LoginColetas,
  LoginReciclo,
  PageNotFound,
} from "pages";
import { AppRecicloAuthenticationProvider } from "../../providers";

const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/coletas" element={<LoginColetas />} />
        <Route
          path="/login/reciclo"
          element={
            <AppRecicloAuthenticationProvider>
              <LoginReciclo />
            </AppRecicloAuthenticationProvider>
          }
        />
        <Route path="/app/coletas" element={<AppColetasMainLayout />}>
          <Route />
        </Route>
        <Route path="/app/reciclo" element={<AppRecicloMainLayout />}>
          <Route />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
