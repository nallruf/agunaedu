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
import HackerPage from "./pages/course/hacker/hacker";
import PathWebPage from "./pages/course/hacker/path/pathweb";
import { Toaster } from "react-hot-toast";
import WebFePage from "./pages/course/hacker/path/fe/webfe";
import EventPage from "./pages/kegiatan/event/event";
import ChallengePage from "./pages/kegiatan/challenge/challenge";
import DetailEventPage from "./pages/kegiatan/event/detail/detailevent";
import DetailChallengePage from "./pages/kegiatan/challenge/detail/detailchallenge";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

const CourseLayout = ({ children }) => (
  <div>
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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: { background: "#1470EF", color: "#ffff" },
          }}
        />
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
          <Route
            path="/event"
            element={
              <DefaultLayout>
                <EventPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/event/detail/:id"
            element={
              <DefaultLayout>
                <DetailEventPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/challenge"
            element={
              <DefaultLayout>
                <ChallengePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/challenge/detail/:id"
            element={
              <DefaultLayout>
                <DetailChallengePage />
              </DefaultLayout>
            }
          />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          <Route path="/auth/reset" element={<ResetPage />} />

          <Route path="/course">
            <Route
              path="hacker"
              element={
                <CourseLayout>
                  <HackerPage />
                </CourseLayout>
              }
            />
            <Route
              path="hacker/path-web"
              element={
                <CourseLayout>
                  <PathWebPage />
                </CourseLayout>
              }
            />
            <Route
              path="hacker/path-web/fe"
              element={
                <CourseLayout>
                  <WebFePage />
                </CourseLayout>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
