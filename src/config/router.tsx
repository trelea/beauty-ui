import { _Page404 } from "@/components/_Page404";
import { FailGoogle } from "@/components/FailGoogle";
import { SuccessGoogle } from "@/components/SuccessGoogle";
import { Admin } from "@/pages/admin/admin";
import * as _Appointments from "@/pages/admin/Appointments";
import { Dashboard } from "@/pages/admin/dashboard";
import { Masters } from "@/pages/admin/Masters";
import { Index } from "@/pages/index";
import { Login } from "@/pages/login/login";
import { Register } from "@/pages/register/register";
import { Settings } from "@/pages/settings/settings";
import { useUserStore } from "@/store/store";
import { Appointments } from "@/pages/appointments/appointments";
import { createBrowserRouter } from "react-router-dom";

const { user, admin } = useUserStore.getState();

export const router = createBrowserRouter([
  // USER STUFF
  { path: "/", element: <Index /> },
  { path: "/:lang", element: <Index /> },

  { path: "/home", element: <Index /> },
  { path: "/:lang/home", element: <Index /> },

  { path: "/login", element: <Login /> },
  { path: "/:lang/login", element: <Login /> },

  { path: "/register", element: <Register /> },
  { path: "/:lang/register", element: <Register /> },

  { path: "/settings", element: user ? <Settings /> : <Index /> },
  { path: "/:lang/settings", element: user ? <Settings /> : <Index /> },

  { path: "/appointments", element: <Appointments /> },
  { path: "/:lang/appointments", element: <Appointments /> },

  { path: "/google/success", element: <SuccessGoogle /> },
  { path: "/:lang/google/success", element: <SuccessGoogle /> },

  { path: "/google/fail", element: <FailGoogle /> },
  { path: "/:lang/google/fail", element: <FailGoogle /> },

  // ADMIN STUFF
  { path: "/admin/auth", element: <Admin /> },
  { path: "/:lang/admin/auth", element: <Admin /> },

  { path: "/admin/dashboard", element: admin ? <Dashboard /> : <Index /> },
  {
    path: "/:lang/admin/dashboard",
    element: admin ? <Dashboard /> : <Index />,
  },

  {
    path: "/admin/dashboard/masters",
    element: admin ? <Masters /> : <Index />,
  },
  {
    path: "/:lang/admin/dashboard/masters",
    element: admin ? <Masters /> : <Index />,
  },
  {
    path: "/admin/dashboard/appointments",
    element: admin ? <_Appointments.Appointments /> : <Index />,
  },
  {
    path: "/:lang/admin/dashboard/appointments",
    element: admin ? <_Appointments.Appointments /> : <Index />,
  },

  { path: "*", element: <_Page404 /> },
]);
