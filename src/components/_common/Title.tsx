import React from 'react';
import { TitleProps } from 'props-type';

const Title = ({ label }: TitleProps) => {
  return <div className="title">{label}</div>;
};

export default Title;
