import Profile from "./Profile";
import Users from "./Users";
import Topics from "./Topics";
import CreateTopic from "./CreateTopic";
import Tickets from "./Tickets";

export interface DashboardRoute {
  name?: string;
  path?: string;
  exact?: boolean;
  redirect?: string;
  component?: () => JSX.Element;
  children?: DashboardRoute[];
}

const routes: DashboardRoute[] = [
  {
    path: "/",
    name: "داشبورد",
    redirect: "/tickets",
    children: [
      {
        path: "/tickets",
        name: "تیکت ها",
        component: Tickets,
      },
      {
        path: "/users",
        name: "مدیریت حساب",
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
