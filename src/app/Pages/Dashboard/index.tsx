import Assets from "../../Assets";
import DashboardLayout from "./Layout";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import useUser from "../../Hooks/useUser";

export default function Dashboard() {
  const { user, Logout } = useUser();
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <DashboardLayout />
      </div>
      <div className={styles.right_side}>
        <div className={styles.info}>
          <div className={styles.info_avatar}>
            <img src={Assets.Images.DotSquare} alt="" />
            <img
              alt=""
              className={styles.avatar}
              src={user.avatar ?? Assets.Images.UserAvatar}
            />
          </div>
          <p>{user.first_name + " " + user.last_name}</p>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <div
                className={styles.item}
                onClick={() => history.push("/dashboard/tickets")}
              >
                <img src={Assets.Images.Ticket} alt="" />
                <div className={styles.item_label}>
                  <p>مدیریت تیکت ها</p>
                </div>
              </div>
            </li>
            <li>
              <div
                className={styles.item}
                onClick={() => history.push("/dashboard/topics")}
              >
                <img src={Assets.Images.Topic} alt="" />
                <div className={styles.item_label}>
                  <p>مدیریت تاپیک ها</p>
                </div>
              </div>
            </li>
            <li>
              <div
                className={styles.item}
                onClick={() => history.push("/dashboard/profile")}
              >
                <img src={Assets.Images.User} alt="" />
                <div className={styles.item_label}>
                  <p>مدیریت حساب</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={styles.nav}
          style={{ marginTop: "auto", marginBottom: "10%" }}
        >
          <ul>
            <li className={styles.exit}>
              <div className={styles.item} onClick={() => Logout()}>
                <img src={Assets.Images.Exit} alt="" />
                <div className={styles.item_label}>
                  <p>خروج</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
