import Assets from '../../Assets';
import React, {useState} from 'react';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';

interface Props {
  className: string;
}

export default function SelectFile({className}: Props) {
  const [selectFile, setSelectFile] = useState<File[]>([]);

  const Change = (event: any) => {
    setSelectFile(event.target.files[0]);
  };

  const removeFile = (index: number) => {
    const deleted = [...selectFile];
    deleted.splice(index, 1);
    setSelectFile(deleted);
  };

  const input_container_style = ClassNames(styles.container, className);

  return (
    <div className={input_container_style}>
      <p className={styles.label}>پيوست فايل</p>
      <div className={styles.select_file}>
        <img
          src={Assets.SVGs.Delete}
          className={styles.delete}
          onClick={() => removeFile}
        />
        <input type="file" className={styles.file} onChange={Change} />
      </div>
    </div>
  );
}
