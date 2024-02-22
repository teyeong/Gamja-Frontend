import { Tag } from 'antd';
import type { SelectProps } from 'antd';

type TagRender = SelectProps['tagRender'];

const SelectTag: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      style={{
        height: '3rem',
        fontSize: '2rem',
        textAlign: 'center',
      }}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
    >
      {label}
    </Tag>
  );
};

export default SelectTag;
