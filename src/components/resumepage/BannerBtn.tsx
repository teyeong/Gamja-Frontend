import { ContentProps } from 'props-type';
import arrow from '../../assets/icons/arrow-right.svg';

const BannerBtn = ({
  svg,
  title,
  content,
  styleClass,
  onClick,
}: ContentProps) => {
  return (
    <div className={`${styleClass} banner-div`} onClick={onClick}>
      <div>
        <div className="banner-title">{title}</div>
        <div className="banner-contents">
          {content}
          <img src={arrow} />
        </div>
      </div>
      <img src={svg} />
    </div>
  );
};

export default BannerBtn;
