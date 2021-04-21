import React, {useState} from 'react';
import styles from './styles.module.scss';
import useUser from '../../Hooks/useUser';
import State1 from '../../Assets/SVGs/Files/State1.svg';
export default function DropDown() {
  const [Open, setOpen] = useState<boolean>(false);
  const {isLogin} = useUser();

  return (
    <div data-open={Open} data-log={isLogin} className={styles.container}>
      <div onClick={() => setOpen(!Open)}>
        <p className={styles.text}>انتخاب كنيد</p>
        <img src={State1} className={styles.state1} />

        <div className={styles.drop_down}>
          <p className={styles.labelBox}>_ _</p>
          <label className={styles.labelBox}>تست</label>
          <label className={styles.labelBox}>تست</label>
          <label className={styles.labelBox}>تست</label>
        </div>
      </div>
    </div>
  );
}
