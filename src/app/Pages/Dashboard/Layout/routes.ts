import Topics from "./Topics";
import CreateTopic from "./CreateTopic";
import Users from "./Users";
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
      {
        path: "/users",
        name: "کاربران",
        component: Users,
      },
    ],
  },
];
export default routes;
