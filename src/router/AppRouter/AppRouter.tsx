import { FunctionComponent } from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "components";
import { LandingPage, LoginColetas, LoginReciclo, PageNotFound } from "pages";
import { BrowserRouter } from "react-router-dom";

const AppRouter: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/coletas/login" element={<LoginColetas />} />
        <Route path="/reciclo/login" element={<LoginReciclo />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
