import { PictureProps } from 'props-type';
import defaultProfile from '../../assets/icons/user.svg';
import cameraIcon from '../../assets/icons/camera.svg';

const Picture = ({ src = defaultProfile }: PictureProps) => {
  return (
    <>
      <div className="picture-div">
        <img src={src} className="picture light-gray" />
        <div className="picture-icon light-gray">
          <img src={cameraIcon} />
        </div>
      </div>
    </>
  );
};

export default Picture;
