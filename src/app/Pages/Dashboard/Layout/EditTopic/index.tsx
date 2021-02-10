import { message, Spin } from "antd";
import API from "../../../../API";
import Assets from "../../../../Assets";
import styles from "./styles.module.scss";
import useUser from "../../../../Hooks/useUser";
import { useEffect, useRef, useState } from "react";
import SEInput from "../../../../Components/SEInput";
import TickCard from "../../../../Components/TickCard";
import { useHistory, useParams } from "react-router-dom";
import ClassNames from "../../../../Utilities/ClassNames";
import UserSerializerRestrictedDto from "../../../../API/DTOs/UserSerializerRestrictedDto";

export default function EditTopic() {
  const me = useUser();
  const history = useHistory();
  const params = useParams<any>();
  const [Title, setTitle] = useState("");
  const [Avatar, setAvatar] = useState<File>();
  const [Loading, setLoading] = useState(true);
  const [AvatarUrl, setAvatarUrl] = useState<any>();
  const [SearchEmail, setSearchEmail] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const [Description, setDescription] = useState("");
  const [Username, setUsername] = useState(params.id);
  const [SaveLoading, setSaveLoading] = useState(false);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [TitleHasError, setTitleHasError] = useState(false);
  const [SearchLoading, setSearchLoading] = useState(false);
  const [StartSearch, setStartSearch] = useState<boolean>(false);
  const [SupporterIds, setSupporterIds] = useState<number[]>([]);
  const [UsernameHasError, setUsernameHasError] = useState(false);
  const [DescriptionHasError, setDescriptionHasError] = useState(false);
  const [Supporters, setSupporters] = useState<UserSerializerRestrictedDto[]>(
    []
  );
  const [SearchedEmails, setSearchedEmails] = useState<
    UserSerializerRestrictedDto[]
  >([]);

  const onSearchEmail = () => {
    if (SearchEmail.length < 3) {
      return;
    }
    setSearchLoading(true);
    API.Email.SearchEmail({ search: SearchEmail })
      .then((response) => {
        setSearchedEmails(response.filter((s) => s.id !== me.user.id));
      })
      .finally(() => setSearchLoading(false));
  };

  useEffect(() => onSearchEmail(), [SearchEmail]);

  useEffect(() => {
    setLoading(true);
    API.Topics.GetTopic({
      slug: params.id,
    })
      .then((response) => {
        setTitle(response.title);
        setAvatarUrl(response.avatar);
        setSupporters(response.supporters);
        setDescription(response.description);
        setSupporterIds(response.supporters.map((s) => s.id));
      })
      .catch(() => message.error("اشکالی در دریافت اطلاعات تایپک رخ داده."))
      .finally(() => setLoading(false));
  }, []);

  const onEditTopic = () => {
    if (!Title) {
      setTitleHasError(true);
    }
    if (!Username) {
      setUsernameHasError(true);
    }
    if (!Description) {
      setDescriptionHasError(true);
    }
    if (!Avatar && !AvatarUrl) {
      message.error("برای تاپیک خود یک آواتار انتخاب کنید");
    }
    if (!Title || !Username || !Description || (!Avatar && !AvatarUrl)) {
      return;
    }
    setTitleHasError(false);
    setUsernameHasError(false);
    setDescriptionHasError(false);

    setSaveLoading(true);
    API.Topics.UpdateTopic({
      title: Title,
      avatar: Avatar,
      slug: Username,
      description: Description,
      supporters_ids: SupporterIds,
    })
      .then(() => {
        message.success("تاپیک با بروز شد.");
        history.push("/dashboard/topics");
      })
      .catch((error) => {
        if (error.status === 403) {
          message.error("برای این عملیات نیاز هست تا احراز هویت کرده باشید");
        } else {
          message.error("انجام این عملیات ممکن نیست");
        }
      })
      .finally(() => setSaveLoading(false));
  };

  const onTitleEnter = () => {
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus();
    }
  };

  const onUserNameEnter = () => {
    if (descriptionRef && descriptionRef.current) {
      descriptionRef.current.focus();
    }
  };

  if (Loading) {
    return (
      <div className={styles.container}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <TickCard
        title="اعضا"
        icon={Assets.SVGs.People}
        className={styles.member_card}
        contentClassName={styles.member_content}
      >
        {StartSearch ? (
          <div className={styles.search_box}>
            <SEInput
              onChangeText={setSearchEmail}
              inputClassName={styles.search}
              className={styles.search_container}
              icon={<img src={Assets.SVGs.Search} alt="" />}
            />
            <img
              alt="cancel"
              src={Assets.SVGs.Cancel}
              className={styles.close_search}
              onClick={() => {
                setSearchEmail("");
                setSearchedEmails([]);
                setStartSearch(false);
                setSearchLoading(false);
              }}
            />
          </div>
        ) : (
          <div
            onClick={() => setStartSearch(true)}
            className={ClassNames(styles.member_container, styles.add_button)}
          >
            <img src={Assets.SVGs.Plus} alt="add member" />
            <p>افزودن عضو</p>
          </div>
        )}
        {!StartSearch &&
          Supporters.map((supporter, index) => (
            <div key={index} className={styles.member_container}>
              <img
                src={Assets.SVGs.Minus}
                alt=""
                onClick={() => {
                  let supporters = Supporters.filter(
                    (s) => s.id !== supporter.id
                  );
                  setSupporters(supporters);
                  setSupporterIds(supporters.map((s) => s.id));
                }}
              />
              <p>{supporter.email}</p>
            </div>
          ))}
        {SearchLoading && <Spin size="large" />}
        {SearchedEmails.map((user, index) => (
          <div key={index} className={styles.member_container}>
            <img
              src={
                SupporterIds.find((id) => id === user.id)
                  ? Assets.SVGs.Minus
                  : Assets.SVGs.Plus
              }
              alt=""
              onClick={() => {
                let supporters = Supporters.filter(
                  (s) => s.id !== user.id
                ).concat([user]);
                setSupporters(supporters);
                setSupporterIds(supporters.map((s) => s.id));
              }}
            />
            <p>{user.email}</p>
          </div>
        ))}
      </TickCard>
      <TickCard
        title="ویرایش تاپيک"
        icon={Assets.SVGs.Topic}
        className={styles.detail_card}
        buttons={[
          {
            label: "ثبت",
            onClick: onEditTopic,
            loading: SaveLoading,
            className: styles.enter_button,
          },
        ]}
      >
        <div className={styles.upload}>
          <label htmlFor="picture">
            <img
              alt="avatar"
              className={styles.picture}
              src={AvatarUrl ?? Assets.Images.GoogleImage2}
            />
          </label>
          <input
            type="file"
            id="picture"
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
        <div className={styles.inputs_container}>
          <div className={styles.middle}>
            <label>:عنوان</label>
            <SEInput
              content={Title}
              onEnter={onTitleEnter}
              onChangeText={setTitle}
              hasError={TitleHasError}
              innerContainerClassName={styles.input_container}
            />
            <label>:شناسه</label>
            <SEInput
              ref={usernameRef}
              content={Username}
              onEnter={onUserNameEnter}
              onChangeText={setUsername}
              hasError={UsernameHasError}
              innerContainerClassName={styles.input_container}
            />
          </div>
          <div className={styles.below}>
            <label>:توضيح</label>
            <SEInput
              minLines={5}
              ref={descriptionRef}
              content={Description}
              onChangeText={setDescription}
              hasError={DescriptionHasError}
              inputClassName={styles.description_input}
              innerContainerClassName={styles.input_container}
            />
          </div>
        </div>
      </TickCard>
    </div>
  );
}
