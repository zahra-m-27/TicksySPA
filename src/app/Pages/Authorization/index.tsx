import routes from './routes';
import Template from './Template';
import styles from './styles.module.scss';
import {Switch, Route} from 'react-router-dom';

export default function Authorization() {
  const defaultMessage =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.';

  const defaultMessageHeader = ':) خوشحاليم كه ما رو انتخاب كرديد';

  return (
    <div className={styles.container}>
      <div className={styles.header} />

      <Switch>
        {routes.map((item, key) => {
          if (item.component) {
            return (
              <Route key={key} path={item.path} component={item.component} />
            );
          }
          return (
            <Route
              key={key}
              path={item.path}
              component={() =>
                item.inputComponent ? (
                  <Template
                    inputComponent={item.inputComponent}
                    message={item.message ?? defaultMessage}
                    messageHeader={item.messageHeader ?? defaultMessageHeader}
                  />
                ) : (
                  <></>
                )
              }
            />
          );
        })}
      </Switch>
    </div>
  );
}
