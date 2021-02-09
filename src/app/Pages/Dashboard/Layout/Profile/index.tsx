import API from "../../../../API";
import moment from "jalali-moment";
import { Button, message } from "antd";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import React, { useRef, useState } from "react";
import useUser from "../../../../Hooks/useUser";
import SEInput from "../../../../Components/SEInput";

export default function Profile() {
  const history = useHistory();
  const { user, Login } = useUser();
  const [Avatar, setAvatar] = useState<File>();
  const [Loading, setLoading] = useState(false);
  const [Email, setEmail] = useState(user.email);
  const emailRef = useRef<HTMLInputElement>(null);
  const [AvatarUrl, setAvatarUrl] = useState<any>();
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [LastName, setLastName] = useState(user.last_name);
  const [EmailHasError, setEmailHasError] = useState(false);
  const [CanChange, setCanChange] = useState<boolean>(false);
  const [FirstName, setFirstName] = useState(user.first_name);
  const [LastNameHasError, setLastNameHasError] = useState(false);
  const [FirstNameHasError, setFirstNameHasError] = useState(false);

  const onFirstNameEnter = () => {
    if (lastNameRef && lastNameRef.current) {
      lastNameRef.current.focus();
    }
  };

  const onLastNameEnter = () => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
  };

  const onUpdateProfile = () => {
    if (!/^\S+@\S+$/.test(Email)) {
      setEmailHasError(true);
    }
    if (!FirstName) {
      setFirstNameHasError(true);
    }
    if (!LastName) {
      setLastNameHasError(true);
    }
    if (!/^\S+@\S+$/.test(Email) || !LastName || !FirstName) {
      return;
    }
    setEmailHasError(false);
    setLastNameHasError(false);
    setFirstNameHasError(false);

    setLoading(true);
    API.Users.UpdateProfile({
      email: Email,
      code: user.code,
      last_name: LastName,
      first_name: FirstName,
    })
      .then((response) => {
        Login(response);
      })
      .catch(() => {
        message.error("اشکالی در بروزرسانی پروفایل رخ داده است.");
      })
      .finally(() => {
        setLoading(false);
        setCanChange(false);
      });
  };

  return (
    <div className={styles.rectangle}>
      <div className={styles.header}>
        پروفايل
        <Assets.SVGs.ProfileIconSVG />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            src={user.avatar ?? Assets.SVGs.UserAvatar}
            className={styles.profile}
            alt=""
          />
          {CanChange && (
            <div className={styles.upload}>
              <label htmlFor="add">
                <Assets.SVGs.AddPhotoSVG className={styles.add_photo} />
              </label>
              <input
                id="add"
                type="file"
                className={styles.upload_image}
                onChange={(e) => {
                  if (e.target.files) {
                    setAvatar(e.target.files[0]);
                    var fr = new FileReader();
                    fr.onload = function () {
                      setAvatarUrl(fr.result);
                    };
                    fr.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </div>
          )}
        </div>
        <div className={styles.right}>
          {CanChange ? (
            <div className={styles.change}>
              <p className={styles.small}>نام</p>
              <SEInput
                content={FirstName}
                className={styles.input}
                onEnter={onFirstNameEnter}
                onChangeText={setFirstName}
                hasError={FirstNameHasError}
                innerContainerClassName={styles.input_inner_container}
              />
              <p className={styles.small}>نام خانوادگي</p>
              <SEInput
                ref={lastNameRef}
                content={LastName}
                className={styles.input}
                onEnter={onLastNameEnter}
                onChangeText={setLastName}
                hasError={LastNameHasError}
                innerContainerClassName={styles.input_inner_container}
              />
              <p className={styles.small}>ايميل</p>
              <SEInput
                ref={emailRef}
                content={Email}
                regex={/^\S+@\S+$/}
                onChangeText={setEmail}
                className={styles.input}
                hasError={EmailHasError}
                onEnter={onUpdateProfile}
                innerContainerClassName={styles.input_inner_container}
              />
            </div>
          ) : (
            <>
              <p className={styles.big}>نام و خانوادگي</p>
              <p className={styles.small}>
                {user.first_name + " " + user.last_name}
              </p>
              <p className={styles.big}>ايميل</p>
              <p className={styles.small}>{user.email}</p>
              <p className={styles.big}>تاريخ ثبت نام</p>
              <p className={styles.small}>
                {moment
                  .utc(user.date_joined)
                  .local()
                  .locale("fa")
                  .format("YYYY/MM/D")}
              </p>
            </>
          )}
        </div>
      </div>
      <div className={styles.actions}>
        {!CanChange && (
          <Button
            type="primary"
            onClick={() => history.push("/dashboard/submit-certificate")}
            className={styles.change_button}
          >
            احراز هویت
          </Button>
        )}
        <Button
          type="primary"
          loading={Loading}
          onClick={() => {
            if (CanChange) {
              onUpdateProfile();
            } else {
              setCanChange(!CanChange);
            }
          }}
          className={CanChange ? styles.change_button : styles.record_button}
        >
          {CanChange ? "ثبت" : "تغییر"}
        </Button>
      </div>
    </div>
  );
}
