import Profile from "./Profile";
import Users from "./Users";
import Topics from "./Topics";
import CreateTopic from "./CreateTopic";
import Tickets from "./Tickets";
import Ticket from "./Ticket";
import SubmitCertificate from "./SubmitCertificate";

export interface DashboardRoute {
  name?: string;
  path?: string;
  exact?: boolean;
  redirect?: string;
  children?: DashboardRoute[];
  component?: () => JSX.Element;
}

const routes: DashboardRoute[] = [
  {
    path: "/",
    name: "داشبورد",
    redirect: "/tickets",
    children: [
      {
        path: "/users",
        name: "مديريت حساب",
        component: Users,
        children: [
          {
            path: "/users/profile",
            name: "پروفايل",
            component: Profile,
          },
        ],
      },
      {
        path: "/tickets",
        name: "تیکت ها",
        component: Tickets,
        children: [
          {
            path: "/tickets/:id",
            name: "محتوای تیکت",
            component: Ticket,
          },
        ],
      },
      {
        path: "/topics",
        name: "تاپیک ها",
        component: Topics,
        children: [
          {
            path: "/topics/new",
            name: " تاپیک جدید",
            component: CreateTopic,
          },
        ],
      },
    ],
  },
];
export default routes;
