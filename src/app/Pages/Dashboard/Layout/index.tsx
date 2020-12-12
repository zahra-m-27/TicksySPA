import React from "react";
import routes from "./routes";
import { Breadcrumb } from "antd";
import styles from "./styles.module.scss";
import { Route, Switch } from "react-router-dom";
import Grid from "../../../Assets/Images/Files/grid.svg";
import Ticksy from "../../../Assets/Images/Files/ticksy.png";
import { breadcrumbFindRoute, getRoutes } from "../../../Utilities";

export default function DashboardLayout() {
  let breadcrumb = breadcrumbFindRoute(window.location.pathname, routes, []);

  return (
    <>
      <div className={styles.header}>
        تیکسی
        <img src={Grid} />
        <img src={Ticksy} />
      </div>
      <div className={styles.breadcrumb}>
        {breadcrumb.route && (
          <Breadcrumb style={{ direction: "rtl" }}>
            <Breadcrumb.Item>خانه</Breadcrumb.Item>
            {breadcrumb.parents.map((parent, index) => (
              <Breadcrumb.Item key={index}>
                <a href={"/dashboard" + parent.path}>{parent.name}</a>
              </Breadcrumb.Item>
            ))}
            <Breadcrumb.Item>{breadcrumb.route.name}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        <span>{breadcrumb.route?.name}</span>
      </div>
      <Switch>
        {getRoutes(routes)
          .filter((route) => route.component)
          .map((route, index) => {
            return (
              <Route
                key={index}
                path={"/dashboard" + route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
      </Switch>
    </>
  );
}
