import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/home/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

function App() {
  const location = useLocation();

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
