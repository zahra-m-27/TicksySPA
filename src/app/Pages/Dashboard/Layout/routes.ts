import Profile from "./Profile";
import Topics from "./Topics";
import CreateTopic from "./CreateTopic";
import Tickets from "./Tickets";
import Ticket from "./Ticket";
import SubmitCertificate from "./SubmitCertificate";
import EditTopic from "./EditTopic";

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
            name: "تاپیک جدید",
            component: CreateTopic,
          },
          {
            path: "/topics/edit/:id",
            name: "ویرایش تاپیک",
            component: EditTopic,
          },
        ],
      },
      {
        path: "/submit-certificate",
        name: "احراز هویت",
        component: SubmitCertificate,
      },
      {
        path: "/profile",
        name: "مديريت حساب",
        component: Profile,
      },
    ],
  },
];
export default routes;
