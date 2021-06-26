import React from 'react';
import './styles.scss';
import FroalaEditor from 'react-froala-wysiwyg';

interface Props {
  content: string;
  placeholder?: string;
  onChange: (text: string) => void;
}

const TTextArea = React.forwardRef<FroalaEditor, Props>(
  ({content, placeholder, onChange}, ref) => {
    if (process.env.JEST_WORKER_ID) return <input ref={ref as any} />;

    return (
      <FroalaEditor
        ref={ref}
        tag="textarea"
        config={{
          heightMin: 200,
          direction: 'rtl',
          fileUpload: false,
          videoUpload: false,
          imageUpload: false,
          quickInsertEnabled: false,
          placeholderText: placeholder,
          key: 'yDJ6hT5jU7QUv4Xy4OZh4ABVJRDRNGGUO3ITru7M5a6a21j11e13l12l7w10h7==',
        }}
        model={content}
        onModelChange={onChange}
      />
    );
  }
);

export default TTextArea;
