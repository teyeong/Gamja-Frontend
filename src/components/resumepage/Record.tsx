import { RecordProps } from 'props-type';
const Record = ({
  isMini = false,
  needDetail = false,
  firstPlaceholder,
  secondPlaceholder,
}: RecordProps) => {
  return (
    <>
      {isMini ? (
        <div className="record-wrapper record-mini">
          <div className="record-container">
            <div className="record-date ">
              <input placeholder="0000" />년{' '}
              <input style={{ width: '3rem' }} placeholder="00" />월 -{' '}
              <input placeholder="0000" />년{' '}
              <input style={{ width: '3rem' }} placeholder="00" />월
            </div>
            <div className="record-date">x</div>
          </div>
          <input className="input" placeholder={firstPlaceholder} />
          <textarea
            className="resume-text-area"
            style={{ height: '8rem', marginTop: '1rem' }}
            placeholder={secondPlaceholder}
          />
        </div>
      ) : (
        <div className="record-wrapper">
          <div className="record-container">
            <div className="record-date">
              <input placeholder="0000" />년{' '}
              <input style={{ width: '3rem' }} placeholder="00" />월 -{' '}
              <input placeholder="0000" />년{' '}
              <input style={{ width: '3rem' }} placeholder="00" />월
            </div>
            <div className="record-date">x</div>
          </div>
          <input className="input" placeholder={firstPlaceholder} />
          {needDetail ? (
            <textarea
              className="resume-text-area"
              style={{ height: '8rem', marginTop: '1rem' }}
              placeholder={secondPlaceholder}
            />
          ) : (
            <input className="input" placeholder={secondPlaceholder} />
          )}
        </div>
      )}
    </>
  );
};

export default Record;
