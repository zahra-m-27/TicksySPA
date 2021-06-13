import Assets from '../../Assets';
import styles from './styles.module.scss';
import ClassNames from '../../Utilities/ClassNames';
import {useRef} from 'react';

interface Props {
  className?: string;
  onRemoveAttachment?: () => void;
  onSelectFile?: (file: File) => void;
}

export default function TSelectFile({
  className,
  onSelectFile,
  onRemoveAttachment,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: any) => {
    if (e.target.files && onSelectFile) {
      onSelectFile(e.target.files[0]);
    }
  };

  const onRemoveFile = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.files = null;
    }
    if (onRemoveAttachment) {
      onRemoveAttachment();
    }
  };

  const container_style = ClassNames(styles.container, className);

  return (
    <div className={container_style}>
      <p className={styles.label}>پيوست فايل</p>
      <div className={styles.select_file}>
        <img
          alt="delete"
          data-testid="remove-file"
          onClick={onRemoveFile}
          src={Assets.SVGs.Delete}
          className={styles.delete}
        />
        <input
          ref={inputRef}
          type="file"
          data-testid="file-input"
          className={styles.file}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
