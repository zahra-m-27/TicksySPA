import {DashboardRoute} from '../Pages/Dashboard/Layout/routes';

export function breadcrumbFindRoute(
  path: string,
  routes: DashboardRoute[],
  parents: DashboardRoute[]
) {
  const resultRoute = routes.find((route) =>
    new RegExp(
      ('^/dashboard' + route.path)
        .replace(/\/:(.*?)(\/|$)/g, '/([^/]*?)/')
        .replace(/\/$/i, '') + '$'
    ).test(path.replace(/\/$/i, ''))
  );
  if (resultRoute) {
    return {route: resultRoute, parents};
  } else {
    let result:
      | {
          route?: DashboardRoute;
          parents: DashboardRoute[];
        }
      | undefined;
    routes.some((route) => {
      if (route.children) {
        result = breadcrumbFindRoute(path, route.children, [...parents, route]);
      }
      return !!result;
    });
    return result;
  }
}

export function getRoutes(routeArray?: DashboardRoute[]): DashboardRoute[] {
  if (routeArray) {
    return routeArray
      .filter((r) => r.children)
      .map((r) => getRoutes(r.children))
      .reduce((a, b) => a.concat(b), [])
      .concat(routeArray);
  }
  return [];
}
