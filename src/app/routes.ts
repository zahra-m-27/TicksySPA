import Authorization from "./Pages/Authorization";
import CreateTicket from "./Pages/CreateTicket";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

interface Route {
  path: string[];
  needAuthorize?: boolean;
  component: () => JSX.Element;
}

const routes: Route[] = [
  {
    needAuthorize: true,
    component: Dashboard,
    path: ["/dashboard", "/create-topic"],
  },
  {
    path: [
      "/sign-in",
      "/sign-up",
      "/confirm-email",
      "/forgot-password",
      "/confirm-reset-password",
    ],
    component: Authorization,
  },
  {
    needAuthorize: true,
    component: CreateTicket,
    path: ["/ticket/:username"],
  },
  {
    path: ["/"],
    component: Home,
  },
];

export default routes;
