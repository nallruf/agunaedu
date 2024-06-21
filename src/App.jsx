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
import DetailPathPage from "./pages/course/path/focus/detail/detailpath";
import TransactionPage from "./pages/course/path/focus/transaction/transaction";
import StatusTransactionPage from "./pages/course/path/focus/transaction/statustransaction";
import PemulaPage from "./pages/course/pemula/pemula";
import DetailTesPage from "./pages/course/tesrole/detailtes";
import TesPage from "./pages/course/tesrole/tes/tes";
import HasilTes from "./pages/course/tesrole/tes/hasiltes";
import PathPage from "./pages/course/path/path";
import FocusPathPage from "./pages/course/path/focus/focuspath";
import DashboardUserPage from "./pages/user-menu/dashboard";
import CourseUserPage from "./pages/user-menu/course";
import EventUserPage from "./pages/user-menu/event";
import ChallengeUserPage from "./pages/user-menu/challenge";
import TransactionUserPage from "./pages/user-menu/transaction";
import SettingUserPage from "./pages/user-menu/settings";
import Dashboard from "./pages/admin-menu/dashboard";
import MentorDashboard from "./pages/admin-menu/mentor";
import UsersDashboard from "./pages/admin-menu/users/users";
import ChallengeDashboard from "./pages/admin-menu/challenge/challenge";
import EventDashboard from "./pages/admin-menu/event/event";
import SettingDashboard from "./pages/admin-menu/settings";
import DetailEvent from "./pages/admin-menu/event/detailevent";
import DetailChallenge from "./pages/admin-menu/challenge/detailchallenge";
import UserSettingDashboard from "./pages/admin-menu/users/usersetings";
import SkillandToolsDashboard from "./pages/admin-menu/skillsandtools/skillandtools";
import RoleDashboard from "./pages/admin-menu/role/role";
import JumlahPendaftar from "./pages/admin-menu/event/jumlahpendaftar";

import { AuthProvider } from "./hooks/useauth";
import ProtectedRoute from "./private/protectedroute";

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
              {/* harsunya ini hanya :role/pemula (karena blm atur jadi masih default data dummy) */}
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
                path=":role/:path/:focus"
                element={
                  <CourseLayout>
                    <FocusPathPage />
                  </CourseLayout>
                }
              />
              <Route
                path=":role/:path/:focus/:id"
                element={
                  <CourseLayout>
                    <DetailPathPage />
                  </CourseLayout>
                }
              />
              <Route
                path=":role/:path/:focus/transaction/:id"
                element={<TransactionPage />}
              />
              <Route
                path="hacker/path-web/fe/transaction/status/:id"
                element={<StatusTransactionPage />}
              />
            </Route>

            <Route
              path="/user"
              element={<ProtectedRoute requiredRole={"USER"} />}
            >
              <Route path="dashboard" element={<DashboardUserPage />} />
              <Route path="course" element={<CourseUserPage />} />
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

            <Route
              path="/admin"
              element={<ProtectedRoute requiredRole={"ADMIN"} />}
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="mentor" element={<MentorDashboard />} />
              <Route path="users" element={<UsersDashboard />} />
              <Route path="event" element={<EventDashboard />} />
              <Route path="challenge" element={<ChallengeDashboard />} />
              <Route path="event/detail" element={<DetailEvent />} />
              <Route path="challenge/detail" element={<DetailChallenge />} />
              <Route path="usersetting" element={<UserSettingDashboard />} />
              <Route
                path="skillandtools"
                element={<SkillandToolsDashboard />}
              />
              <Route path="role" element={<RoleDashboard />} />
              <Route path="settings" element={<SettingDashboard />} />

              <Route path="event/registrants" element={<JumlahPendaftar />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </>
  );
}

export default App;
