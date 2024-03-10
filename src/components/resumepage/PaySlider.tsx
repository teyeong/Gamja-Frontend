import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { PaySliderProps } from 'props-type';

const hourMarks: SliderSingleProps['marks'] = {
  0: '0원',
  50: '50만원',
};

const monthMarks: SliderSingleProps['marks'] = {
  0: '0원',
  1000: '1000만원',
};

const careerMarks: SliderSingleProps['marks'] = {
  0: '0년',
  50: '50년',
};

const PaySlider = ({ isHour, isCareer }: PaySliderProps) => (
  <>
    {isCareer ? (
      <Slider
        range
        marks={careerMarks}
        max={50}
        defaultValue={[10, 40]}
        tooltip={{ open: true }}
        style={{ marginTop: '4rem' }}
      />
    ) : (
      <>
        {isHour ? (
          <>
            <div className="slider-title">시급</div>
            <Slider
              range
              marks={hourMarks}
              max={50}
              defaultValue={[10, 20]}
              tooltip={{ open: true }}
            />
          </>
        ) : (
          <>
            <div className="slider-title">월급</div>
            <Slider
              range
              marks={monthMarks}
              max={1000}
              defaultValue={[200, 400]}
              tooltip={{ open: true }}
            />
          </>
        )}
      </>
    )}
  </>
);

export default PaySlider;
