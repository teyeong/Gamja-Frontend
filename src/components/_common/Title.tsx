import React from 'react';
import { TitleProps } from './Title.d';

const Title = ({ label }: TitleProps) => {
  return <div className="title">{label}</div>;
};

export default Title;
