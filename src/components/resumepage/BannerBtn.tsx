import { ContentProps } from 'props-type';
import arrow from '../../assets/icons/arrow-right.svg';

const BannerBtn = ({ svg, title, content, styleClass }: ContentProps) => {
  return (
    <div className={`${styleClass} banner-div`}>
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
