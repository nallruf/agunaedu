import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/main/home";
import NavBar from "./components/main/navbar";
import Footer from "./components/main/footer";
import LoginPage from "./pages/auth/login";
import ForgotPage from "./pages/auth/forgot";
import ResetPage from "./pages/auth/reset";
import RegisterPage from "./pages/auth/register";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="/"
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          <Route path="/auth/reset" element={<ResetPage />} />

          {/* <Route path="/admin" element={<PrivateRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
