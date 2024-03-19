import { NoticeListProps } from 'props-type';
import data from '../../assets/mock/noticelist.json';
import NoticeItem from './NoticeItem';

const NoticeList = ({ isOld }: NoticeListProps) => {
  return (
    <div className="noticelist-div">
      {data.map((item) => {
        return (
          isOld === item.isRead && (
            <NoticeItem
              key={item.id}
              name={item.name}
              src={item.src}
              type={item.type}
            />
          )
        );
      })}
    </div>
  );
};

export default NoticeList;
