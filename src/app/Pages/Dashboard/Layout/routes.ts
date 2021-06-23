import Profile from './Profile';
import Topics from './Topics';
import Tickets from './Tickets';
import Ticket from './Tickets/Ticket';
import SubmitCertificate from './Profile/SubmitCertificate';
import EditTopic from './Topics/EditTopic';
import CreateTopic from './Topics/CreateTopic';
import Categories from './Topics/Categories';
import CreateCategory from './Topics/Categories/CreateCategory';

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
    path: '/',
    name: 'داشبورد',
    redirect: '/tickets',
    children: [
      {
        path: '/tickets/:sectionId',
        name: 'تیکت های بخش',
        component: Tickets,
      },
      {
        path: '/tickets',
        name: 'تیکت های من',
        component: Tickets,
      },
      {
        path: '/topics',
        name: 'تاپیک ها',
        component: Topics,
        children: [
          {
            path: '/topics/new',
            name: 'تاپیک جدید',
            component: CreateTopic,
          },
          {
            path: '/topics/edit/:topicId',
            name: 'ویرایش تاپیک',
            component: EditTopic,
          },
          {
            path: '/topics/:topicId',
            name: 'دسته بندی های تاپیک',
            component: Categories,
            children: [
              {
                name: 'ایجاد دسته بندی',
                component: CreateCategory,
                path: '/topics/:topicId/new',
              },
            ],
          },
        ],
      },
      {
        path: '/ticket/:sectionId',
        name: 'محتوای تیکت',
        component: Ticket,
      },
      {
        path: '/submit-certificate',
        name: 'احراز هویت',
        component: SubmitCertificate,
      },
      {
        path: '/profile',
        name: 'مديريت حساب',
        component: Profile,
      },
    ],
  },
];
export default routes;
