import { ContentProps } from 'props-type';

const Content = ({
  svg,
  title,
  content,
  styleClass,
  subtitle,
}: ContentProps) => {
  return (
    <div className={`${styleClass} content-div`}>
      <img src={svg} />
      <div className="content-mobile-div">
        <div className="content-title-box">
          <p>{title}</p>
          <p className="content-subtitle">{subtitle}</p>
        </div>
        <div className="content-box">
          <p>{content}</p>
          <div
            className={`${styleClass === 'green' ? 'black-arrow' : 'small-arrow'}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
