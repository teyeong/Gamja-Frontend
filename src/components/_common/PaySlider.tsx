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

const durationMarks: SliderSingleProps['marks'] = {
  0: '0개월',
  12: '12개월',
};

const PaySlider = ({ isDuration, isCareer, isPay }: PaySliderProps) => (
  <>
    {isDuration && (
      <Slider
        range
        marks={durationMarks}
        max={12}
        defaultValue={[2, 7]}
        tooltip={{ open: true }}
        style={{ marginTop: '4rem' }}
      />
    )}
    {isCareer && (
      <Slider
        range
        marks={careerMarks}
        max={50}
        defaultValue={[10, 40]}
        tooltip={{ open: true }}
        style={{ marginTop: '4rem' }}
      />
    )}
    {isPay && (
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
);

export default PaySlider;
