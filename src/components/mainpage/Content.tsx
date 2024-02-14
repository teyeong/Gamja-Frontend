import { ContentProps } from './Content.d';

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
      <div className="content-title-box">
        <p>{title}</p>
        <p className="content-subtitle">{subtitle}</p>
      </div>
      <div className="content-box">
        <p>{content}</p>
        <div className="arrow">
          <p className={`${styleClass === 'green' && 'black-arrow'}`}></p>
        </div>
      </div>
    </div>
  );
};

export default Content;
