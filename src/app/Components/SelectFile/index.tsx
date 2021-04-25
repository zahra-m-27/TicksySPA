import React, {useState} from 'react';
import styles from './styles.module.scss';
import Assets from '../../Assets';
import {Button} from 'antd';

export default function SelectFile() {
  const [selectFile, setSelectFile] = useState<File[]>([]);

  const Change = (event: any) => {
    setSelectFile(event.target.files[0]);
  };

  const removeFile = (index: number) => {
    const deleted = [...selectFile];
    deleted.splice(index, 1);
    setSelectFile(deleted);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>پيوست فايل</p>
      </div>
      <div className={styles.middle}>
        <input type="file" className={styles.choosen} onChange={Change} />
        <img
          src={Assets.SVGs.Delete}
          className={styles.delete}
          onClick={() => removeFile}
        />
      </div>
      <div className={styles.footer}>
        <Button className={styles.button1}> ثبت تيكت</Button>
        <Button className={styles.button2}>انصراف</Button>
      </div>
    </div>
  );
}
