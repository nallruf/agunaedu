import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/main/home";
import NavBar from "./components/main/navbar";
import Footer from "./components/main/footer";
import LoginPage from "./pages/auth/login";
import ForgotPage from "./pages/auth/forgot";
import ResetPage from "./pages/auth/reset";
import RegisterPage from "./pages/auth/register";
import AboutPage from "./pages/information/about";
import PrivacyPage from "./pages/information/privacy";
import TermsPage from "./pages/information/terms";
import EventPage from "./pages/kegiatan/event/event";
import DetailEventPage from "./pages/kegiatan/event/detail/detailevent";
import ChallengePage from "./pages/kegiatan/challenge/challenge";
import DetailChallengePage from "./pages/kegiatan/challenge/detail/detailchallenge";
import RolePage from "./pages/course/role";
import DetailFePage from "./pages/course/path/fe/detail/detailfe";
import TransactionFePage from "./pages/course/path/fe/transaction/transactionfe";
import StatusTransactionPage from "./pages/course/path/fe/transaction/statustransaction";
import PemulaPage from "./pages/course/pemula/pemula";
import DetailTesPage from "./pages/course/tesrole/detailtes";
import TesPage from "./pages/course/tesrole/tes/tes";
import HasilTes from "./pages/course/tesrole/tes/hasiltes";
import PathPage from "./pages/course/path/path";
import WebFePage from "./pages/course/path/fe/webfe";
import DashboardUserPage from "./pages/user-menu/dashboard";
import MentoringUserPage from "./pages/user-menu/mentoring";
import EventUserPage from "./pages/user-menu/event";
import ChallengeUserPage from "./pages/user-menu/challenge";
import TransactionUserPage from "./pages/user-menu/transaction";
import SettingUserPage from "./pages/user-menu/settings";

import { AuthProvider } from "./hooks/useauth";
import { ProtectedRoute } from "./private/protectedroute";

import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_URL;

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
      <AuthProvider>
        <AnimatePresence>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: { background: "#1470EF", color: "#ffff" },
            }}
          />
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFoundPage />} />

            <Route path="/">
              <Route
                path=""
                element={
                  <DefaultLayout>
                    <HomePage />
                  </DefaultLayout>
                }
              />
              <Route
                path="about"
                element={
                  <DefaultLayout>
                    <AboutPage />
                  </DefaultLayout>
                }
              />
              <Route
                path="terms"
                element={
                  <DefaultLayout>
                    <TermsPage />
                  </DefaultLayout>
                }
              />
              <Route
                path="privacy"
                element={
                  <DefaultLayout>
                    <PrivacyPage />
                  </DefaultLayout>
                }
              />
              <Route
                path="event"
                element={
                  <DefaultLayout>
                    <EventPage />
                  </DefaultLayout>
                }
              />

              <Route
                path="challenge"
                element={
                  <DefaultLayout>
                    <ChallengePage />
                  </DefaultLayout>
                }
              />
            </Route>

            <Route path="/auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="forgot" element={<ForgotPage />} />
              <Route path="reset" element={<ResetPage />} />
            </Route>

            <Route path="/course" element={<ProtectedRoute />}>
              <Route
                path=":role"
                element={
                  <CourseLayout>
                    <RolePage />
                  </CourseLayout>
                }
              />
              <Route
                path=":role/pemula/:path"
                element={
                  <CourseLayout>
                    <PemulaPage />
                  </CourseLayout>
                }
              />
              <Route
                path=":role/:path"
                element={
                  <CourseLayout>
                    <PathPage />
                  </CourseLayout>
                }
              />
              <Route
                path=":role/tes"
                element={
                  <CourseLayout>
                    <DetailTesPage />
                  </CourseLayout>
                }
              />
              <Route path=":role/tes/dasar" element={<TesPage />} />
              <Route path=":role/tes/dasar/hasil" element={<HasilTes />} />
              <Route
                path="hacker/path-web/fe"
                element={
                  <CourseLayout>
                    <WebFePage />
                  </CourseLayout>
                }
              />
              <Route
                path="hacker/path-web/fe/:id"
                element={
                  <CourseLayout>
                    <DetailFePage />
                  </CourseLayout>
                }
              />
              <Route
                path="hacker/path-web/fe/transaction/:id"
                element={<TransactionFePage />}
              />
              <Route
                path="hacker/path-web/fe/transaction/status/:id"
                element={<StatusTransactionPage />}
              />
            </Route>

            <Route path="/user" element={<ProtectedRoute />}>
              <Route path="dashboard" element={<DashboardUserPage />} />
              <Route path="mentoring" element={<MentoringUserPage />} />
              <Route path="course/:id" element={<NotFoundPage />} />
              <Route path="event" element={<EventUserPage />} />
              <Route path="challenge" element={<ChallengeUserPage />} />
              <Route path="transaction" element={<TransactionUserPage />} />
              <Route path="settings" element={<SettingUserPage />} />
            </Route>

            <Route path="/" element={<ProtectedRoute />}>
              <Route
                path="event/detail/:id"
                element={
                  <DefaultLayout>
                    <DetailEventPage />
                  </DefaultLayout>
                }
              />
              <Route
                path="challenge/detail/:id"
                element={
                  <DefaultLayout>
                    <DetailChallengePage />
                  </DefaultLayout>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </>
  );
}

export default App;
