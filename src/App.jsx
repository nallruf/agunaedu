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
import PathWebPage from "./pages/course/role/path/pathweb";
import { Toaster } from "react-hot-toast";
import WebFePage from "./pages/course/role/path/fe/webfe";
import EventPage from "./pages/kegiatan/event/event";
import ChallengePage from "./pages/kegiatan/challenge/challenge";
import DetailEventPage from "./pages/kegiatan/event/detail/detailevent";
import DetailChallengePage from "./pages/kegiatan/challenge/detail/detailchallenge";
import RolePage from "./pages/course/role/role";
import DetailFePage from "./pages/course/role/path/fe/detail/detailfe";
import TransactionFePage from "./pages/course/role/path/fe/transaction/transactionfe";
import StatusTransactionPage from "./pages/course/role/path/fe/transaction/statustransaction";
import PemulaPage from "./pages/course/role/pemula/pemula";
import DetailTesPage from "./pages/course/role/tesrole/detailtes/detailtes";
import TesPage from "./pages/course/role/tesrole/tes/tes";
import HasilTes from "./pages/course/role/tesrole/tes/hasiltes";
import DashboardUserPage from "./pages/user-menu/dashboard";
import MentoringUserPage from "./pages/user-menu/mentoring";
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
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot" element={<ForgotPage />} />
            <Route path="reset" element={<ResetPage />} />
          </Route>

          <Route path="/course">
            <Route
              path=":role"
              element={
                <CourseLayout>
                  <RolePage />
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
              path="hacker/pemula/:path"
              element={
                <CourseLayout>
                  <PemulaPage />
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

          <Route path="/user">
            <Route path="dashboard" element={<DashboardUserPage />} />
            <Route path="mentoring" element={<MentoringUserPage />} />
            <Route path="course/:id" element={<NotFoundPage />} />
            <Route path="event" element={<EventUserPage />} />
            <Route path="challenge" element={<ChallengeUserPage />} />
            <Route path="transaction" element={<TransactionUserPage />} />
            <Route path="settings" element={<SettingUserPage />} />
          </Route>

          <Route path="/admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="mentor" element={<MentorDashboard />} />
            <Route path="users" element={<UsersDashboard />} />
            <Route path="event" element={<EventDashboard />} />
            <Route path="challenge" element={<ChallengeDashboard />} />
            <Route path="event/detail" element={<DetailEvent />} />
            <Route path="challenge/detail" element={<DetailChallenge />} />
            <Route path="usersetting" element={<UserSettingDashboard />} />
            <Route path="skillandtools" element={<SkillandToolsDashboard />} />
            <Route path="role" element={<RoleDashboard />} />
            <Route path="settings" element={<SettingDashboard />} />

            <Route path="event/registrants" element={<JumlahPendaftar />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
